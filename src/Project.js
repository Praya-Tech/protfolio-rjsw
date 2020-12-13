import React from 'react'
import { Container, Row, Card, Button, Col } from 'react-bootstrap'

function Project() {
    return (
        <Container id="project">
            <Row>
                <Col>
                    <h1 className="text-center m-4">My Projects</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="mt-2 mb-2">
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Project 1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                             </Card.Text>
                            <Button onClick={() => {
                                window.open("https://vishak-todoapp.netlify.app/", "_blank");
                            }} variant="primary" >Live Demo</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mb-2 mt-2">
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                             </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mb-2 mt-2">
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                             </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default Project
