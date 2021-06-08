import React,{useState,useEffect} from "react"
import "./Home/Home.css"
import Carousel from 'react-bootstrap/Carousel'
import { scroller } from "react-scroll";
import Button from 'react-bootstrap/Button'


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
                    <Button  className="ButtonC" href="https://api.whatsapp.com/send?phone=5491130784202" target="_blank"> <b> CONOCÉ MÁS </b></Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="Carrusel"
                        src={img2}
                        alt="Second slide"
                        />
                    <Carousel.Caption className="ContenedorButton">
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="Carrusel"
                        src={img1}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="ContenedorButton">
                    <Button  className="ButtonC" onClick={scrollservicios} href="https://api.whatsapp.com/send?phone=5491130784202" target="_blank" > <b> CONOCÉ MÁS </b> </Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="Carrusel"
                        src={img2}
                        alt="Second slide"
                        />
                    <Carousel.Caption className="ContenedorButton">
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>








            
        </div>
    )
    
}
export default Carrusel;