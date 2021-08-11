import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';

function Equipment() {
    return (
  <>
    <Container fluid>
        <Row className="top-spacer">

        </Row>
        <Row className="justify-content-around">
            <Col sm={10} md={4} lg={4} className="greeting">
            <Image src="mww-logo.jpeg" className="logo-display" fluid/>
            <h2>Helping the Lost Sierra Connect</h2>
            </Col>
            <Col sm={10} md={7} lg={7} className="msg">
                <h2>What is the latest and greatest?</h2>
                <p>Good question! While it is definately important to keep up on the latest
                  technologies, it is not always the best practice to use the latest equipment.
                </p><br/>
                <p>Our philosophy at Mountain Web Works is to evaluate each situation and make
                  recommendations based on your needs and what you hope to accomplish. While we
                  do like future proof to a certain extent, it is more important to provide great
                  network infastructure with immediate value.
                </p><br/>
                <p>Every situation is different. We are committed to helping you find the solutions
                  that will work best for you.
                </p>
            </Col>
        </Row>
        <Row className="top-spacer">

        </Row>
    </Container>
  </>
    )
}

export default Equipment