import React from "react"
import "./Home.css"
import ButtonsHome from "../Buttons/ButtonsHome"

function Personalizar() {


    const Buttons={
        text:"¡PRESUPUESTO SIN CARGO!",
        stylecss1:"ButtonP",
        stylecss2:"TextoP",
        contenedor:"ContenedorButtonP",
    }
    return(
        
        <div className="Personalizarfondo">
            <img 
            alt="imagen"
            className="Imgpersonalizar"
            src="../assets/Personalizar.png"
            />
           
            <ButtonsHome Buttons={Buttons}/>
        

        </div>
    )
    
}
export default Personalizar;