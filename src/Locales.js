import React,{useState,useEffect} from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Locales(props) {
    return(
        <Container fluid>
        <Row >
            <Col className="locales">BOEDO</Col>
            <Col className="locales">ALMAGRO</Col>
            <Col className="locales">BARRACAS</Col>
            <Col className="locales">SAN TELMO</Col>
        </Row>
      </Container>
    )
}

export default Locales;