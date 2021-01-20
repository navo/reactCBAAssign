import {v1 as uuid} from 'uuid';
export const addEmployee = (
    {
      name = ''
    } = {}  
  ) => ({
    type: 'ADD_EMPLOYEE',
    employee: {
      id: uuid(),
      name
    }
});