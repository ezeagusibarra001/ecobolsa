import React,{useState,useEffect} from "react"
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import  "./Home.css"



function Nabvar(props) {


    return(
        <div>
            <Navbar  expand="lg" className="NavBar">
                <Navbar.Brand href="/">Eco-Bolsa</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home" className="NavLink" >Conocenos</Nav.Link>
                    <Nav.Link href="#link" className="NavLink">Servicios</Nav.Link>
                    <Nav.Link href="#link" className="NavLink">Contacto</Nav.Link>
                    <Nav.Link href="/Comercios" className="NavLink">Comercios</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Nabvar;