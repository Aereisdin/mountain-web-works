import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <>
        <Card className="text-center footer">
            <Row>
                <Col>
                    Facebook
                </Col>
                <Col>
                    Instagram
                </Col>
                <Col>
                    Email
                </Col>
                <Col>
                    Phone
                </Col>
            </Row>
        </Card>
        </>
    )
}

export default Footer
