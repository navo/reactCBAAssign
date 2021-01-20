import {createStore} from 'redux';
import EmployeeReducer from '../reducers/EmployeeReducer';

const configureStore = ()=>{
    // Store creation
    const store = createStore(
    {
      employees: EmployeeReducer
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
return store;
};

export default configureStore;