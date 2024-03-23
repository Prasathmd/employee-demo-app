import React, { useState, useEffect } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../service/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const CreateEmployee = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] =  useState('');
    const [email, setEmail] = useState('');

    const [result, setResult] = useState('');

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
        if(id){
            console.log("the employee ID for edit "+id);
            //axios service to get employee details
            getEmployee(id).then(response => {  // 200
                console.log(response);
                setFirstName(response.data.firstName);
                setLastname(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {   // != 200
                console.log("error "+error);
            });
        }
    }, [id])

    function saveEmployee(e){
        e.preventDefault();
        
        const employee = {firstName, lastName, email};

        if(id){
            console.log("Update employee");
            updateEmployee(id, employee).then( response => {
                console.log("updated the employee and response ="+response.data);
                setResult("Successfully Updated "+response.data.id)
            } ).catch(error => {
                console.log("error is "+error);
                setResult("Error in Update")
            });

        }else{
            console.log("Create Employee");
            console.log("save employee");
            console.log("employee input to service "+ employee);
            createEmployee(employee).then((response) => {
                console.log(response.data);
                setResult(response.data);

            }).catch(error => {
                console.log("error while calling create employee "+error);
            });
        }

    }

    // function firstNameText(e){
    //     console.log("first name "+e.target.value);
    //     setFirstName(e.target.value);
    // }

    // function lastNameText(e){
    //     setLastname(e.target.value);
    // }

    function viewAllEmployee(){
        navigate("/employees")
    }

    function pageTitle(){
        if(id){
            return "Update Employee";
        }else{
            return "Create Employee";
        }
    }

  return (
    <div className='container' >
        <div className='row' >
            <div className='card col-md-6 offset-md-3 offset-md-3 '>
                <h2>{pageTitle()}</h2>
                <form>
                    <div className='form-group mb2' >
                    <label className='form-label'>{result}</label>
                    </div>
                    <div className='form-group mb-2' >
                        <label className='form-label'>First Name</label>
                        <input className='form-control' type='text' name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}  placeholder='Enter First Name' ></input>
                        
                    </div>
                    <div className='form-group mb2' >
                        <label className='form-label'>Last Name</label>
                        <input className='form-control' type='text' value={lastName} onChange={e => setLastname(e.target.value)} placeholder='Enter Last Name' name='lastName' ></input>
                       
                    </div>
                    <div className='form-group mb2' >
                        <label className='form-label'>Email</label>
                        <input className='form-control' type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Email' name='email' ></input>
                    </div>
                    
                    <button className='btn btn-success' onClick={saveEmployee} > Submit</button>

                </form>
                <br></br>
                <button className='btn btn-danger' onClick={viewAllEmployee} > View All Employee</button>
            </div>
        </div>
    </div>
  )
}

export default CreateEmployee