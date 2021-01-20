import React,{useState,useEffect} from 'react';
import{connect, useDispatch} from 'react-redux';
import {addEmployee} from "./actions/Employee";

const App =(props) => {

  const [employee, setEmployee] = useState(props.employee?props.employee:[]);
  const [name, setName] = useState('')
  const dispatch=useDispatch;

  const submitName = (e) => {
    e.preventDefault()
    setEmployee([
        ...employee,
        {name}
    ])
    setName('')
    dispatch(addEmployee(employee));
}

/* useEffect(() => {
  const employeeData = JSON.parse(localStorage.getItem('employeeData'))

  if (employeeData) {
      setEmployee(employeeData);
  }
}, []) */

useEffect(() => {
  //post request here
  console.log(employee);
}, [employee])

  return (
    <div className="App">
      <form onSubmit={submitName}>
        <label htmlFor = 'name'>Name</label><br></br>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default connect() (App);
