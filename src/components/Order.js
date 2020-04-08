import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo2 from "../images/logo2.png"



class Order extends React.Component {
    render = () =>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img alt="" src={logo2} width="130" height="130" className="d-inline-block align-top"/>
                {' '}

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Navbar.Brand href="#home">Bruce's Diner</Navbar.Brand>
                    <Nav.Link href="#features">Order Form</Nav.Link>
                    <Nav.Link href="#pricing">View Order</Nav.Link>
                    <Nav.Link href="#pricing">Sign Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        
}

export default Order
