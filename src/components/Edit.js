import React, {useEffect, useState} from "react";
import { Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import { v4 as uuid} from "uuid";
import {Link, useNavigate } from "react-router-dom";

function Edit(){

    const [name, setName]=useState('');
    const [domain, setDomain]=useState('');
    const [id, setId]=useState('');

    let history =useNavigate();

    var index =Employees.map(function(e){
        return e.id
    }).indexOf(id);


    const handleSubmit =(e)=>{
        e.preventDefault();

        let a = Employees[index];
        a.Name = name;
        a.Domain = domain;


        history('/');
    }

    useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setDomain(localStorage.getItem('Domain'))
        setId(localStorage.getItem('Id'))
    },[])

    return <div>  
    <Form className="d-grid gap-2" style={{margin:"15rem"}}>
        <Form.Group className="mb-3 d-grid gap-2" controlId="formName">
            <Form.Control type="text" placeholder="Enter Name" required value={name} onChange={(e)=> setName(e.target.value)}>
            </Form.Control>
            <Form.Control type="text" placeholder="Enter Domain" required value={domain} onChange={(e)=> setDomain(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Button type="submit" style={{backgroundColor:"#057205"}} onClick={(e)=>handleSubmit(e)}>Update</Button>
    </Form>
</div>

}

export default Edit;