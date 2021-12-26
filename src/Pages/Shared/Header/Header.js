import React from 'react';
import { Container, Nav, Navbar, Col, Row, Image } from 'react-bootstrap';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            {/* <Navbar fixed="top" collapseOnSelect expand="lg" className="header_bgColor py-3" variant="dark">
                <Container>
                    <Navbar.Brand>
                    <Nav className="mx-auto anchor">
                        <Link to="/home"> <span className="logo">ZeroGlass</span> </Link>
                        </Nav>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto anchor">

                            <Link to="/home">Home</Link>
                            <Link to="/explore">Explore</Link>
                            <Link to="/about">About</Link>

                        </Nav>
                        <Nav>
                            <Nav.Link className="text-white" href="#deets">{user.displayName}</Nav.Link>
                            {user?.email ?
                                <div>
                                    <Link className="text-white m-2" eventKey={2} to="/dashboard">
                                        <button type="button" class="btn btn-outline-info">Dashboard</button>
                                    </Link>

                                    <button onClick={logout} type="button" class="btn btn-outline-info">Log out</button>
                                </div>
                                :
                                <Link className="text-white" eventKey={2} to="/login">
                                    <button type="button" class="btn btn-outline-info">Login</button>
                                </Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

            <Navbar bg="dark" variant="dark" className="justify-content-end" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand>
                    <Nav.Link> 
                        <NavLink className="customLogo" activeClassName="activeStyleLogo" exact="true" to="/">
                            <span className="logo-text-first"><i class="fas fa-jedi"></i> ZeroGlass</span>
                        </NavLink>
                    </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link>
                        <NavLink className="custom" activeClassName="activeStyle" to="/home">
                                  Home
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink className="custom" activeClassName="activeStyle" to="/explore">
                                  Explore
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink className="custom" activeClassName="activeStyle" to="/about">
                                  About
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink className="custom" activeClassName="activeStyle" to="/dashboard">
                                  Dashboard
                        </NavLink>
                        </Nav.Link>

                        {user.email && 
                        <Nav.Link>
                            <div className="w-100">
                            <Row className="d-flex align-items-center">
                            <Col sm={2}>
                                <Image className="header-pic-size ms-2" src={user?.photoURL} roundedCircle />
                            </Col>
                            <Col sm={9} className="header-pic ms-3" style={{ fontWeight: 'bold' }}> {user?.displayName}
                            </Col>
                            </Row>
                            </div>
                        </Nav.Link> }
                        {
                            user.email ?
                        <Nav.Link>
                        <NavLink className="custom-logout d-flex align-items-center" activeClassName="activeStyle" to="/login" onClick={logout}>Logout <i className="ms-2 fas fa-sign-out-alt"></i>
                        </NavLink>
                        </Nav.Link>
                        :
                        <Nav.Link>
                        <NavLink className="custom d-flex align-items-center " activeClassName="activeStyle" to="/register">
                        <i class="fas fa-user-plus"></i> Register 
                        </NavLink>
                        </Nav.Link>}

                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            

        </>
    );
};

export default Header;