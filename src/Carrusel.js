import React,{useState,useEffect} from "react"
import Carousel from 'react-bootstrap/Carousel'


function Carrusel(props) {
    

    return(
        <div>
            <Carousel>
                <Carousel.Item>
                        <img
                        className="Carrusel"
                        src="https://emasp.org/blog/wp-content/uploads/2019/09/nature-3294632_1280-1024x682.jpg"
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
                    src="https://emasp.org/blog/wp-content/uploads/2019/09/nature-3294632_1280-1024x682.jpg"
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
                    src="https://emasp.org/blog/wp-content/uploads/2019/09/nature-3294632_1280-1024x682.jpg"
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