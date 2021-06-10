import React,{useState,useEffect} from "react"
import "./Home.css"
import Button from 'react-bootstrap/Button'
import ButtonsHome from "../Buttons/ButtonsHome"

function Personalizar(props) {


    const Buttons={
        text:"¡PRESUPUESTO SIN CARGO!",
        stylecss1:"ButtonP",
        stylecss2:"TextoP",
        contenedor:"ContenedorButtonP",
    }
    return(
        
        <div className="Personalizarfondo">
            <img 
            className="Imgpersonalizar"
            src="../assets/Personalizar.png"
            />
           
            <ButtonsHome Buttons={Buttons}/>
        

        </div>
    )
    
}
export default Personalizar;