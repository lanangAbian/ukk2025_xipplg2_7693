import React from 'react'
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link } from 'react-router';

export default function Login() {
  return (
    <div style={{
        display:"",
        marginTop:"15rem"
      }}>
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
    <Row className="w-100 justify-content-center">
      <Col md={6} lg={4} className="d-flex justify-content-center">
        <Card className="p-4 shadow" style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title className="text-center mb-3" style={{
                fontWeight:"bold"
            }}>LOGIN</Card.Title>
            <Form>
              <Form.Group className="mb-"style={{
                marginBottom:"1rem"
              }} controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formEmail" style={{
                marginBottom:"1rem"
              }}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword" style={{
                marginBottom:"1rem"
              }}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

<Link to={'/'}>
              <Button variant="primary" type="submit" className="w-100">
                Sign Up
              </Button>
</Link>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
      </div>
  )
}
