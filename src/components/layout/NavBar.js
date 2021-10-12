import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './styles.css';

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar
            expand="lg"
            expanded={expanded}
            className="navbar"
        >
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    AZ LIVING
                </Navbar.Brand>
                <Navbar.Toggle
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="responsive-navbar-nav"
                    className="hamburger"
                />
                <Navbar.Collapse id="responsive-navbar=nav" className="justify-content-end">
                    {/* automatically collapses menu after link selected */}
                    <Nav onClick={() => setTimeout(() => { setExpanded(false) }, 150)}>
                        <Link to={"/move"} className="nav-item">
                            MOVE TO AZ
                        </Link>
                        <Link to={"/videos"} className="nav-item">
                            VIDEOS
                        </Link>
                        <Link to={"/contact"} className="nav-item">
                            CONTACT
                        </Link>
                        <Link to={"/about"} className="nav-item">
                            ABOUT
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;