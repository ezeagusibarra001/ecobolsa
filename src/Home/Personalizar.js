import React,{useState,useEffect} from "react"
import "./Home.css"


function Personalizar(props) {


    return(
        
        <div className="Personalizarfondo">
            <img 
            className="Imgpersonalizar"
            src="../assets/Personalizar.png"
            />
            <button className="ButtonP">¡Presupuesto Sin Cargo!</button>


        </div>
    )
    
}
export default Personalizar;