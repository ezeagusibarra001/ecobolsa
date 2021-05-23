import React,{useState,useEffect} from "react"
import Carousel from 'react-bootstrap/Carousel'


function Carrusel(props) {
    const img1=props.img1
    const img2=props.img2

    return(
        <div>
            <Carousel id="logo">
                <Carousel.Item>
                        <img
                        className="Carrusel"
                        src={img1}
                        alt="First slide"
                        />
                    <Carousel.Caption>
                        <h3 >First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="Carrusel"
                    src={img1}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="Carrusel"
                    src={img1}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default Carrusel;