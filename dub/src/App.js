import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import List from './List'
import Home from './Home'




export default function App() {

  

  return (
      <Routes>
    <Route path="/list" element={<List />} />
    <Route path="/" element={<Home />} />
      </Routes>  
    
  );
}