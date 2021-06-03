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
             <button className="ButtonE">Conoce Mas</button>
            

        </div>
    )
    
}
export default Econews;