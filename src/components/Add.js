import React, {useState} from "react";
import { Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import { v4 as uuid} from "uuid";
import {Link, useNavigate } from "react-router-dom";


function Add(){

    const [name, setName]=useState('');
    const [domain, setDomain]=useState('');

    let history =useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();

        const ids =uuid();
        let uniqueId = ids.slice(0,8);

        let a =name,
        b= domain;

        Employees.push({id:uniqueId, Name:a, Domain:b});

        history('/');
    }

    return <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3 d-grid gap-2" controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" required onChange={(e)=> setName(e.target.value)}>
                </Form.Control>
                <Form.Control type="text" placeholder="Enter Domain" required onChange={(e)=> setDomain(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button type="submit" className="btn-sm" style={{backgroundColor:"#057205"}} onClick={(e)=>handleSubmit(e)}>Submit</Button>
        </Form>
    </div>
}

export default Add;