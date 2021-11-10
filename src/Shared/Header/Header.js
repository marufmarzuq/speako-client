import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
    const { user } = useAuth();
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        SPEAKO
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/products">
                                Products
                            </Nav.Link>
                            <Nav.Link className="me-2" as={Link} to="/dashboard">
                                Dashboard
                            </Nav.Link>
                            <Nav.Link className="login-btn" as={Link} to="/login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
