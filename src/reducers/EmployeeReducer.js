const employeeState= [];

const employeeReducer=(state=employeeState,action)=>{
    switch (action.type) {
        case 'ADD_EMPLOYEE':
          return [
            ...state,
            action.name
          ];
        default:
            return state;
    }
}
export default employeeReducer;