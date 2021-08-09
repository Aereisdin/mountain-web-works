import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function Development() {
    return (
  <>
    <Container fluid>
        <Row className="top-spacer">

        </Row>
        <Row className="justify-content-around">
            <Col sm={10} md={4} lg={4} className="greeting">
            <img src="mww-logo.jpeg" className="logo-display" />
            <h2>Helping the Lost Sierra Connect</h2>
            </Col>
            <Col sm={10} md={7} lg={7} className="msg">
                This is where the main body of my message will go. Maybe.
            </Col>
        </Row>
        <Row className="top-spacer">

        </Row>
    </Container>
  </>
    )
}

export default Development