import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';


function Facebook() {
    window.open(
        "https://www.facebook.com/MountainWebWorks", "_blank"
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
                    <Button onClick={()=>Facebook()} alt="Facebook">Facebook</Button>
                </Col>
                <Col>
                    <Button onClick={()=>Instagram()} alt="Instagram">Instagram</Button>
                </Col>
                <Col>
                    <Button onClick={()=>Email()} alt="info@mountainwebworks" >Email Us</Button>
                </Col>
                <Col>
                    <Button onClick={()=>Phone()} alt="(530)394-4641">Call Us</Button>
                </Col>
            </Row>
        </Card>
        </>
    )
}

export default Footer
