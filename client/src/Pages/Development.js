import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';

function Development() {
    return (
  <>
    <Container fluid className="development">
        <Row className="top-spacer">

        </Row>
        <Row className="justify-content-around">
            <Col sm={10} md={4} lg={4} className="greeting">
            <Image src="mww-logo.jpeg" className="logo-display" fluid/>
            <h2>Helping the Lost Sierra Connect</h2>
            </Col>
            <Col sm={10} md={7} lg={7} className="msg">
            <Col className="msg-back">
                <h2>Helping You Share Your Story</h2>
                <p>There are a lot of options out there when it comes to building a webpage.
                  Literally thousands. In this confusing environment, it is easy to get lost.</p><br/>
                <p>Mountain Web Works is committed to helping you navigate the complexity of web
                  development to help you find the best solution that fits your needs.
                </p><br/>
                <p>Helping you get on Etsy. Building out a blog. Creating a customized webpage with
                  e-commerce and inventory management. For every person and their situation Mountain Web
                  Works can help you find a solution that fits your needs.
                </p><br/>
                <p>Our goal and commitment is to help you get there and be independent once you are 
                  setup. If you feel you need ongoing help maintaining your online presence Mountain
                  Web Works can also assist in managing your Facebook, Instagram and other social media.
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

export default Development