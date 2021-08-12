import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

function Facebook() {
    window.open(
        "fb://facewebmodal/f?href=mountainwebworks/"
        // "https://www.facebook.com/MountainWebWorks", "_blank"
    )
};
function Instagram() {
    window.open(
        "https://www.instagram.com/mountainwebworks/", "_blank"
    )
};
function Email() {
    window.location.href =
        "mailto:info@mountainwebworks.com"
  
}
function Phone() {
    window.location.href='tel:+15303944641'
}

function Footer() {

    return (
        <>
        <Card className="text-center footer">
            <Row>
                <Col>
                    <Button onClick={()=>Facebook()} alt="Facebook"><FontAwesomeIcon icon={faFacebookSquare} className="fa-2x blue"/><span className="mobile-no"> Facebook</span></Button>
                </Col>
                <Col>
                    <Button onClick={()=>Instagram()} alt="Instagram"><FontAwesomeIcon icon={faInstagram} className="fa-2x purple" /><span className="mobile-no"> Instsgram</span></Button>
                </Col>
                <Col>
                    <Button onClick={()=>Email()} alt="info@mountainwebworks" ><FontAwesomeIcon icon={faEnvelope} className="fa-2x black" /><span className="mobile-no"> Email Us</span></Button>
                </Col>
                <Col>
                    <Button onClick={()=>Phone()} alt="(530)394-4641"><FontAwesomeIcon icon={faPhone} className="fa-2x red" /><span className="mobile-no"> Call Us</span></Button>
                </Col>
            </Row>
        </Card>
        </>
    )
}

export default Footer
