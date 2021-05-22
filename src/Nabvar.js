import React,{useState,useEffect} from "react"
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import  "./Home.css"
import {Link} from "react-router-dom"
import { scroller } from "react-scroll";


function Nabvar(props) {


    return(
        <div>
            <Navbar  expand="lg" className="NavBar">
                <Navbar.Brand><Link to="/">Eco-Bolsa</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="NavLink" 
                    onClick={() => scroller.scrollTo('conocenos', {
                        smooth: true,
                        offset: -70,
                        duration: 500,
                    })}
                    >Conocenos</Nav.Link>
                    <Nav.Link className="NavLink"
                    onClick={() => scroller.scrollTo('servicios', {
                        smooth: true,
                        offset: -70,
                        duration: 500,
                    })}
                    >Servicios</Nav.Link>
                    <Nav.Link><Link to="/" className="NavLink"
                     onClick={() => scroller.scrollTo('contacto', {
                        smooth: true,
                        offset: -70,
                        duration: 500,
                    })}
                    >Contacto</Link></Nav.Link>
                    <Nav.Link><Link to="/Comercios" className="NavLink">Comercios</Link></Nav.Link>
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