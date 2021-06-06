import React,{useState,useEffect} from "react"
import "./Home/Home.css"
import Carousel from 'react-bootstrap/Carousel'
import { scroller } from "react-scroll";


function Carrusel(props) {

    const img1=props.img1
    const img2=props.img2
    const img4=props.img4

    const scrollservicios=()=>{
        scroller.scrollTo('Econews',{
            smooth: true,
            offset: -70,
            duration:2000,
        })
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
                    <Carousel.Caption className="ContenedorButton">
                    <button  className="ButtonC">CONOCÉ MÁS</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="Carrusel"
                        src={img2}
                        alt="Second slide"
                        />
                    <Carousel.Caption className="ContenedorButton">
                    <button  className="ButtonC" >CONOCÉ MÁS</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="Carrusel"
                        src={img4}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="ContenedorButton">
                    <button  className="ButtonC" onClick={scrollservicios} >CONOCÉ MÁS</button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>








            
        </div>
    )
    
}
export default Carrusel;