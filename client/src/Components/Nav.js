import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';


function Navigation () {
    return (
        <>
            <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand>Mountain Web Works</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link>Link</Nav.Link>
                <Nav.Link>Link</Nav.Link>
                <Nav.Link>Link</Nav.Link>
                </Nav>
             
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation
