import React, { Fragment } from "react";
import { Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import {Link, useNavigate } from "react-router-dom";

function Home(){


    let history =useNavigate();

    const handleEdit =(id, domain, name)=>{
        localStorage.setItem('Name', name);
        localStorage.setItem('Id', id);
        localStorage.setItem('Domain', domain);
    }

    const handleDelete =(id)=>{
        var index =Employees.map(function(e){
            return e.id
        }).indexOf(id);

        Employees.splice(index, 1);

        history('/');
    }

    return(
    <Fragment>
        <div style={{margin:"10rem"}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Domain
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Employees && Employees.length > 0 
                        ?
                        Employees.map((item)=>{
                            return(
                                <tr>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Domain}
                                    </td>
                                    <td>
                                        <Link to={'/edit'}>
                                    <Button className="btn-sm" style={{backgroundColor:"#057205"}} onClick={()=>handleEdit(item.id, item.Domain, item.Name)}>Edit</Button>
                                    </Link>
                                    &nbsp;
                                    <Button  className="btn-sm" style={{backgroundColor:"#cd0532"}}  onClick={()=>handleDelete(item.id)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No Data Available"
                    }
                </tbody>
                </Table>
                <br></br>
                <Link className="d-grid gap-2" to="/create" style={{textDecoration:"none"}}>
                    <Button size="lg" style={{backgroundColor:"#08759c"}}>Create</Button>
                </Link>
                </div>
        
            </Fragment>
    )
}

export default Home;