import React,{useState,useEffect} from "react"
import Button from 'react-bootstrap/Button'


function Econews(props) {
    

    return(
        <div className="FondoEco" id="conocenos">
            <h1 className="Tittle">ANUNCIA EN LAS <b>ECO NEWS</b></h1>

            <div className="EcoTexto">
            <h3 className="EcoLineas">
                Las bolsas ECO NEWS nacen de una necesidad de poder ampliar 
                la efectividad en la difusion de los comercios
            </h3>
            </div>

            <div className="EcoTexto">
            <h3 className="EcoLineas">
                Es un soporte que se basa en la distribucion de publicidad a traves de bolsas Eco-Logicas.
            </h3>
            <h3 className="EcoLineas">
                Estas bolsas respaldan su exito en su forma de entrega y atractivo diseño.
            </h3>

            </div>

            <div className="EcoTexto">
                <h3 className="EcoLineas">
                    La bolsa es entregada en mano en comercios estrategicos del barrio.
                </h3>
                <h3 className="EcoLineas">
                    Estos comercios son rubros escenciales y de mucha rotacion.
                </h3>
            </div>
            <Button variant="success" className="Button">Conoce Mas</Button>
        </div>
    )
}

export default Econews;