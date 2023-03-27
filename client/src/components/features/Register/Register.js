import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import Button from '../../common/Button/Button';

import { useState } from 'react';
import axios from  'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [redirect, setRedirect] = useState(3)
  const navigate = useNavigate();

  const port = (process.env.NODE_ENV === 'production') ? '/api/users' : 'http://localhost:8000/api/users'

  const configuration = {
    method: "post",
    url: port,
    data: {
      username,
      password,
      email
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios(configuration)
    .then((res) => {
      setStatus(200);
      setUsername('');
      setPassword('');
      setEmail('');

      let countdown = 2;
      const timer = setInterval(() => {
        setRedirect(countdown)
        countdown -= 1;
      }, 1000);

      setTimeout(() => {
        navigate('/');
        clearInterval(timer);
      }, 3000)
    })
    .catch((error) => {
      console.log(error.response.data.message)

      setStatus(error.response.status);
    });  
  }

  return (
    <Container className='p-5 mar'>
        {status === 200 ? (
          <Row className='pt-3'><Alert variant={'success'}>You are registered successfully! <Spinner style={{backgroundColor: 'inherit', width: '25px', height: '25px'}}/> You will be redirected to main page in {redirect}.</Alert></Row>
        ) : (status === 409) ? (
          <Row className='pt-3'><Alert variant={'danger'}>Username already exists!</Alert></Row>
        ) : (status === '') ? ( 
        <div></div> 
        ) : <Row className='pt-3'><Alert variant={'danger'}>An unexpected error occured!</Alert></Row>}
      <h1 style={{textAlign: 'center'}}>Register</h1>
      <Container className='p-5' >
      <Form style={{padding: '0 100px'}} onSubmit={(e) => handleSubmit(e)}>
        {/* username */}
        <Form.Group controlId="formBasicText" className='pb-4'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            name="username"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        {/* email */}
        <Form.Group controlId="formBasicEmail" className='pb-4'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword" className='pb-4'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {/* submit button */}
        <Button
          text={'Register'}
        >
        </Button>
      </Form>
      </Container>
    </Container>
  )
};

export default Register;