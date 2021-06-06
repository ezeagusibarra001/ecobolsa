import React,{useState,useEffect} from "react"
import "./Comercios.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



function Locales(props) {

    const locales=props.data

    return(


        <div >

            <div className="ContainerLocales">


                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../assets/Logo.png" />
                    <Card.Body>
                        <Card.Title>{locales.name}</Card.Title>
                        <Card.Text>
                           {locales.description}
                        </Card.Text>
                        <Button variant="primary">Instagram</Button>
                        <Button variant="primary">Wp</Button>
                    </Card.Body>
                </Card>


            </div>  

        </div>
    )
    
}
export default Locales;