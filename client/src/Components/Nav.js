import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';


function Navigation () {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand="md">
            <Navbar.Brand>Mountain Web Works</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link>WiFi</Nav.Link>
                <Nav.Link>Equipment</Nav.Link>
                <Nav.Link>Page Development</Nav.Link>
                </Nav>
             
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation