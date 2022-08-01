import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Container , Row , Col } from 'react-bootstrap'
import './SignUp.css'

function SignUp() {
  
  return (
    
    <Container>
    <Row>
      <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
       <Form style={{width:"80%" , maxWidth:500}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Col>
      
      <Col md={5} className="signup__bg"></Col>

    </Row>
  </Container>
  )
}

export default SignUp