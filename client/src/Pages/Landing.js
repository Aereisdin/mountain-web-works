import React from 'react';
import { Row, Col, Container, Image, Carousel } from 'react-bootstrap';



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
                <Col className="msg-back text-center">
                  <Carousel fade className="mobile-no">
                    <Carousel.Item>
                      <img
                      className="d-block w-100 carousel"
                      src="./Jamison.png"
                      alt="Jamison"
                      />
                    <Carousel.Caption>
                      <h3>Jamison Lake Island</h3>
                      <p>A beautiful shot from a hike to Jamison Lake.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                      className="d-block w-100 carousel"
                      src="./Wade.png"
                      alt="Wade"
                      />
                    <Carousel.Caption>
                      <h3>Wade Lake</h3>
                      <p>A beautiful shot of Wade Lake.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                      className="d-block w-100 carousel"
                      src="./Balconies.png"
                      alt="Balconies"
                      />
                    <Carousel.Caption>
                      <h3>Balconies Cave</h3>
                      <p>From a trip to Pinnacles National Park.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                  <h1>We are here for you!</h1>
                  <h3>Are you having troubles with your internet at home? Trouble with your computer? Trying to build a webpage?</h3>
                    <p>Mountain Web Works is a local Plumas County business specializing in providing IT solutions. 
                      Not just for small businesses in our area but also the local peoples. We all have had troubles
                      now and then connecting to the internet. We are here to help make sure you're setup and running
                      smoothly. 
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

export default Landing