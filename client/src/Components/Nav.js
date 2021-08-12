import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';


function Navigation () {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand="lg">
            {/* <Navbar.Brand href="/"><img src="./mww-logo.svg" class="nav-logo"/></Navbar.Brand> */}
            <Navbar.Brand href="/">Mountain Web Works</Navbar.Brand>
            {/* <Navbar.Brand href="/">Web</Navbar.Brand>
            <Navbar.Brand href="/">Works</Navbar.Brand>      */}
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/wifi">Network</Nav.Link>
                <Nav.Link href="/equip">Equipment</Nav.Link>
                <Nav.Link href="/dev">Development</Nav.Link>
                </Nav>
             
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation