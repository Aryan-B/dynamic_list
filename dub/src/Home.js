import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Home(){
    const navigate = useNavigate();

    
    const handleSubmit = event => {
        event.preventDefault();
        
        const form = {  'name': event.target.full_name.value,
                        'email': event.target.email.value,
                        'age': event.target.age.value
                    };
        console.log(form)
        axios.post('http://localhost:3000/item', form)
            .then(navigate('/list'));
        
        

    };
  


    return(
        <div style={{ display: 'block', 
        width: 700, 
        padding: 30 }}>
        <h4>React-Bootstrap Form Component</h4>
        <Form onSubmit={handleSubmit}>
        <Form.Group>
        <Form.Label>Enter your full name:</Form.Label>
        <Form.Control type="text" 
                    placeholder="Enter your full name" name='full_name' />
        </Form.Group>
        <Form.Group>
        <Form.Label>Enter your email address:</Form.Label>
        <Form.Control type="email" 
                    placeholder="Enter your your email address" name='email'/>
        </Form.Group>
        <Form.Group>
        <Form.Label>Enter your age:</Form.Label>
        <Form.Control type="number" placeholder="Enter your age" name='age' />
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
        Click here to submit form
        </Button>
        </Form>
        </div>
    );
}