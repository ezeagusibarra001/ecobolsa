import React,{useState,useEffect} from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import data from './data/data'

function Locales(props) {
    const {locales} = data;
    return(
        <Container fluid>
        <Row >
            
            {locales.map((local)=>(
            <Col >
                <Card style={{ width: '18rem', marginTop:'2rem'}}>
                <Card.Img variant="top" src="assets/almagro.png" />
                <Card.Body>
                    <Card.Title>{local.name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
            ))}
            
        </Row>
      </Container>
    )
}

export default Locales;