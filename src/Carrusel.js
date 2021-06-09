import React,{useState,useEffect} from "react"
import "./Home/Home.css"
import Carousel from 'react-bootstrap/Carousel'
import { scroller } from "react-scroll";
import Button from 'react-bootstrap/Button'
import {useHistory} from "react-router-dom"



function Carrusel(props) {

     /*--------------------------------------------IMAGENES CARRUSEL HOME--------------------------------------------*/
    const img1=props.img1
    const img2=props.img2
    /*--------------------------------------------BUTTONS CARRUSEL HOME--------------------------------------------*/
   

    const history=useHistory()
    const clickcomercios=()=>{
        history.push("/Comercios")
    }

   
    return(
        
        <div className="Carruselfondo">

            <Carousel className="Carruselcontainer">

                <Carousel.Item>
                    <img
                        className="Carrusel"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="ContenedorButton1">
                    <Button  className="ButtonC1" href="https://api.whatsapp.com/send?phone=5491130784202" target="_blank"> <b> CONOCÉ MÁS </b> </Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="Carrusel"
                        src={img2}
                        alt="Second slide"
                        />
                    <Carousel.Caption className="ContenedorButton2" >
                        <Button  className="ButtonC2" onClick={clickcomercios}> <b> COMERCIOS ADHERIDOS </b> </Button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>








            
        </div>
    )
    
}
export default Carrusel;