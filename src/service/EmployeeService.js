import axios from "axios";


const REST_API_BASE_URL = "http://localhost:8080/api/v1/";

export const getEmployees = () => axios.get(REST_API_BASE_URL+"employees");

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL+"create", employee);

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL+"employee/"+employeeId);
// function getEmployee(employeeId){
//     return axios.get(REST_API_BASE_URL+"employee/"+employeeId);
// }

export const updateEmployee = (employeId, employee) => axios.put(REST_API_BASE_URL+"updateEmployee/"+employeId, employee)