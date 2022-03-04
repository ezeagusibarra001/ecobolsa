import React from "react"
import "./Home.css"
import ButtonsHome from "../Buttons/ButtonsHome"


function Econews(props) {

    
/*--------------------------------------------LE PASAMOS CARACTERISTICAS DEL BUTTON A TRAVES DE LAS PROPS--------------------------------------------*/
    const Buttons={
            text:"CONOCÉ MÁS",
            stylecss1:"ButtonE",
            stylecss2:"TextoE",
            contenedor:"ContenedorButtonE",
        }
    
    return(
        
        <div className="Fondoeconews" id="Econews">

            <div className="ContenedorImagen">
                <img 
                    alt="imagen"
                    className="Imagen" 
                    src="../assets/Fondoeconews.jpg"
                />
            </div>
            
           
                <ButtonsHome Buttons={Buttons} />
                

        </div>
    )
    
}
export default Econews;