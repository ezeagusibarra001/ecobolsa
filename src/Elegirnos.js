import React,{useState,useEffect} from "react"
import Card from 'react-bootstrap/Card'


function Elegirnos(props) {
    const variant="Success"

    return(
        <div className="FondoElegirnos">
            <h1 className="TittleElegirnos">¿PORQUÉ ELEGIRNOS?</h1>

            <table className="d-flex justify-content-center">
                <tr>
                    <td>
                        <Card className="Card">
                                <Card.Body className="CardBody">
                                <Card.Title>{variant} Card Title </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                                </Card.Body>
                        </Card> 
                    </td>
                    <td>
                        <Card className="Card">
                                <Card.Body className="CardBody">
                                <Card.Title>{variant} Card Title </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                                </Card.Body>
                        </Card> 
                    </td>
                    <td>
                        <Card className="Card">
                                <Card.Body className="CardBody">
                                <Card.Title>{variant} Card Title </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                                </Card.Body>
                        </Card> 
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Elegirnos;