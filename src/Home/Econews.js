import React,{useState,useEffect} from "react"
import "./Home.css"
import Button from 'react-bootstrap/Button'

function Econews(props) {


    return(
        
        <div className="Fondoeconews" id="Econews">

            <div className="ContenedorImagen">
                <img 
                    className="Imagen" 
                    src="../assets/Fondoeconews.jpg"
                />
            </div>
            
            <div className="ContenedorButtonE">
                <Button className="ButtonE" href="https://api.whatsapp.com/send?phone=5491130784202" target="_blank" > <b className="TextoE">CONOCÉ MÁS</b> </Button>
            </div>    

        </div>
    )
    
}
export default Econews;