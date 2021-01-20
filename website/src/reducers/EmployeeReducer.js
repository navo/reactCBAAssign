const storeDate = {
    employee: [],
};

var pushToArray = function (state, obj, key) {
    let tempState = state;
    tempState[key].push(obj);
    return tempState;
};

const employeeReducer = (state = storeDate, action) => {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            console.log(action.payload);
            state.employee.push(action.payload);
            return {
                ...state,
            };
        // break;
        default:
            return state;
    }
};
export default employeeReducer;
