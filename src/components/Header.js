import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

import LogoSVG from './../assets/svg/logo.svg';

import './../assets/css/header.css';

const Header = () => (
    <Navbar>
        <Navbar.Brand href="#home">
            <img src={LogoSVG} className="h-100" />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>

        <Button variant="success">Get Started</Button>
        &nbsp;&nbsp;
        <Button variant="outline-secondary">Apply as a Developer</Button>
        &nbsp;&nbsp;
        <Button variant="light" >Login</Button>
    </Navbar>
);

export default Header;