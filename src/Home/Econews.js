import React,{useState,useEffect} from "react"
import "./Home.css"

function Econews(props) {


    return(
        
        <div className="Fondoeconews" id="Econews">

            <div className="ContenedorImagen">
                <img 
                    className="Imagen" 
                    src="../assets/Fondoeconews.png"
                />
            </div>
            
            <div className="ContenedorButtonE">
                <button className="ButtonE"> <b>CONOCÉ MÁS</b> </button>
            </div>    

        </div>
    )
    
}
export default Econews;