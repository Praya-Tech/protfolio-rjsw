import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

function Contact() {
    return (
        <div className="bg-primary container-fluid" id="contact">
            <Row >
                <Col>
                    <h1 className="text-center m-4 text-light">Contact Me</h1>
                </Col>
            </Row>
            <Col sm="12" xs="12" lg="8" md="8" className="container-fluid text-light">
                <Form action="https://formspree.io/f/mleojaea"
                    method="POST">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" placeholder="Enter Message here..." />
                    </Form.Group>


                    <Button variant="dark" type="submit">
                        Submit
  </Button>
                </Form>
            </Col>
        </div>
    )
}

export default Contact
