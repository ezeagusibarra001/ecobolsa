import React,{useState,useEffect} from "react"
import "./Home/Home.css"
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'


function Carrusel(props) {

    const img1=props.img1
    const img2=props.img2
    return(
        
        <div className="Carruselfondo">

            <Carousel>

                <Carousel.Item>
                    <img
                        className="Carrusel"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <Button variant="success" className="ButtonC" size="lg" block>Conoce Mas</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="Carrusel"
                        src={img2}
                        alt="Second slide"
                        />
                    <Carousel.Caption>
                    <Button variant="success" className="ButtonC" size="lg" block>Conoce Mas</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="Carrusel"
                        src={img1}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <Button variant="success" className="ButtonC" size="lg" block>Conoce Mas</Button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>








            
        </div>
    )
    
}
export default Carrusel;