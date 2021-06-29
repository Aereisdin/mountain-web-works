import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function Landing() {
    return (
  <>
    <Container fluid>
        <Row className="top-spacer">

        </Row>
        <Row>
            <Col className="greeting">
            <h1>Mountain Web Works</h1>
            <h2>Helping the Lost Sierra connect</h2>
            <p>This is where I write something really inpired.</p>
            </Col>
        </Row>
        <Row>
            <Col>
            
            </Col>
        </Row>
    </Container>
  </>
    )
}

export default Landing
