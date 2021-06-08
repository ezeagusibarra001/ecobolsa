import React,{useState,useEffect} from "react"
import "./Home.css"
import Button from 'react-bootstrap/Button'

function Personalizar(props) {


    return(
        
        <div className="Personalizarfondo">
            <img 
            className="Imgpersonalizar"
            src="../assets/Personalizar.png"
            />
            <div className="ContenedorButtonP">
            <Button className="ButtonP" href="https://api.whatsapp.com/send?phone=5491130784202" target="_blank" ><b>¡PRESUPUESTO SIN CARGO!</b></Button>
            </div>

        </div>
    )
    
}
export default Personalizar;