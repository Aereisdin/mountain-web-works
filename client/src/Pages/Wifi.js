import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';

function Wifi() {
    return (
  <>
    <Container fluid className="wifi">
        <Row className="top-spacer">

        </Row>
        <Row className="justify-content-around">
            <Col sm={10} md={4} lg={4} className="greeting">
            <Image src="mww-logo.jpeg" className="logo-display" fluid/>
            <h2>Helping the Lost Sierra Connect</h2>
            </Col>
            <Col sm={10} md={7} lg={7} className="msg">
              <Col className="msg-back">
                <h2>Wi-Fi, Network, Home Connection</h2>
                <p>In today's ever advancing world of technology we find ourselves
                  ever challenged to keep up with the demands of connection to the world
                  and internet.
                </p><br/>
                <p>With the growth of the internet of things (IoT) the amount of connections
                  made in the home is growing. Our security system, locks, refridgerator, pet 
                  camera, tv, computer and so on push the limits of home wi-fi connections. As
                  the amount of connection increases, we often are challenged ensuring not only
                  are we connected to the internet but that there is speed and reliability.
                </p><br/>
                <p>Mountain Web Works is here to help you setup, manage and maintain these 
                  connections as you move forward. It is not enough today to just call someone
                  to turn the internet on, we need people to help us connect our homes to the
                  internet. 
                </p><br/>
                <p>Mountain Web Works keeps a standard stock of the latest equipment to ensure
                  that your home is setup to maintain longevity so you can be worry free. If you
                  have an existing setup we will help you evaluate your needs and modify it or 
                  repair it as needed. 
                </p>
              </Col>
            </Col>
        </Row>
        <Row className="top-spacer">

        </Row>
    </Container>
  </>
    )
}

export default Wifi