import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { addEmployee } from "./actions/Employee";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.employeeId = "";
        this.employeeName = "";
    }

    render() {
        return (
            <div>
                <div className='App'>
                    <div>{JSON.stringify(this.props.employee)}</div>
                    <label htmlFor='name'>Name</label>
                    <br></br>
                    <input
                        placeholder='Employee Id'
                        onChange={(e) => {
                            this.setState({ employeeId: e.target.value });
                        }}
                    />
                    <input
                        placeholder='Employee Name'
                        onChange={(e) => {
                            this.setState({ employeeName: e.target.value });
                        }}
                    />
                    <button
                        onClick={() => {
                            console.log(
                                this.state.employeeId,
                                this.state.employeeName
                            );
                            this.props.addEmployeeDispatch(
                                this.state.employeeId,
                                this.state.employeeName
                            );
                        }}
                    >
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employee: state.employee,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addEmployeeDispatch: (empId, empName) => {
            dispatch(addEmployee(empId, empName));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
