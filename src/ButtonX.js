import React,{useState,useEffect} from "react"
import Button from 'react-bootstrap/Button'

function ButtonX(props) {

    const styles={
        button:{
            color:"green"
        }
    }

    const mensaje=()=>{
        alert("Hola")
    }





    return(
        <div>
             <div className="d-flex justify-content-center">
                <Button onClick={mensaje} variant={props.variant} className="Button"><b>{props.text}</b></Button>
            </div>
        </div>
    )
    
}
export default ButtonX;