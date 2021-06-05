import React,{useState,useEffect} from "react"
import "./Home.css"


function Personalizar(props) {


    return(
        
        <div className="Personalizarfondo">
            <img 
            className="Imgpersonalizar"
            src="../assets/Personalizar.png"
            />
            <div className="ContenedorButtonE">
            <button className="ButtonE"><b>¡PRESUPUESTO GRATIS!</b></button>
            </div>

        </div>
    )
    
}
export default Personalizar;