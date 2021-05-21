import React,{useState,useEffect} from "react"
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const styles={
    color:"green"
}


function Nabvar(props) {


    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Eco-Bolsa</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home" style={styles} >Conocenos</Nav.Link>
                    <Nav.Link href="#link">Servicios</Nav.Link>
                    <Nav.Link href="#link">Comercios</Nav.Link>
                    <Nav.Link href="#link">Contacto</Nav.Link>
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