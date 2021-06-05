import React,{useState,useEffect} from "react"
import "./Home.css"
import Button from 'react-bootstrap/Button'


function Econews(props) {


    return(
        
        <div className="Fondoeconews">
            
            <img 
                className="Imagen" 
                src="../assets/Fondoeconews.png"
            />
            <div className="ContenedorButtonE">
                <button className="ButtonE"><b>CONOCÉ MÁS</b></button>
            </div>
            
           
                
        </div>
    )
    
}
export default Econews;