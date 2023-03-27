import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const Login = () => {
    return (
    <Container className='p-5'>
    <h1 style={{textAlign: 'center'}}>Login</h1>
      <Container className='p-5' style={{minHeight: '530px'}}>
      <Form style={{padding: '0 100px'}}>
        <Form.Group className="mb-3" controlId="login">
          <Form.Label>Login</Form.Label>
          <Form.Control type="login" placeholder="login" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
    </Container>
  )
};

export default Login;