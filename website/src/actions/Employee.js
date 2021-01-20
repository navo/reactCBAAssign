import { v1 as uuid } from "uuid";
import axios from "axios";

export function addEmployee(empId, empName) {
    // axios({
    //     method: "get",
    //     url: "http://localhost:7878/addEmployee",
    //     data: { empId, empName },
    // });

    return { type: "ADD_EMPLOYEE", payload: { empId, empName } };
}
