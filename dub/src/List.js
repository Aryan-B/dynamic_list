import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

export default function List() {
    const navigate = useNavigate();

    const [data, setData] = useState([{
        'name':"",
        'email':"",
        'age':""
    }]);
    
    const [mod, setModal] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/item')
        .then(response=>setData(response.data));
      }, []);
    
    return (<div style={{ width: "100%", height: "100%", alignSelf:"center", justifyContent:"center" , padding: "auto", position:"absolute", margin:"auto" }}>
        <h2>List</h2>
        <Button onClick={()=>{navigate('/')}}>Back to form</Button>
        {data.map(x=>{
            return(
                <div style={{alignItems:"center", justifyContent:"center" }}>
                    <Button key={x._id} style={{ margin: '10px'}} onClick={()=>{setModal(x)}}>
                        {x.name}
                    </Button>
                    <br/>
                </div>
            )
        })}
        <br/>
        {mod.name}
        <br/>
        {mod.email}
        <br/>
        {mod.age}
        </div>);

  }