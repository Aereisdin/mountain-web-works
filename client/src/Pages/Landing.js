import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';



function Landing() {


    return (
  <>
    <Container fluid className="landing">
        <Row className="top-spacer">

        </Row>
        <Row className="justify-content-around">
            <Col sm={10} md={4} lg={4} className="greeting">
            <Image src="mww-logo.jpeg" className="logo-display" fluid/>
            <h2>Helping the Lost Sierra Connect</h2>
            </Col>
            <Col sm={10} md={7} lg={7} className="msg">
                <Col className="msg-back">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                  culpa qui officia deserunt mollit anim id est laborum.
                </Col>
            </Col>
        </Row>
        <Row className="top-spacer">

        </Row>
    </Container>
  </>
    )
}

export default Landing