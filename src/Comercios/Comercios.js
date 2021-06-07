import React,{useState,useEffect} from "react"
import Layout from "../Layout";
import Carrusel from "../Carrusel"
import Banner from "./Banner"
import Locales from "./Locales"
import "./Comercios.css"


function Comercio(props) {

    const img1="../assets/Carrusel3.png"
    const img2="../assets/Carrusel2.png"
    const img4="../assets/Carrusel4.png"
    
    
       const locales= [
            {
                id: 0,
                name: "Donada & Asociados",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                instagramstate: true,
                instagram:"https://www.instagram.com/estudio.donada/?hl=es-la",
                wp:"",
                Img:"../assets/Centu.jpeg",
            },
            {
                id: 1,
                name: "CMC",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                instagramstate: true,
                instagram:"https://www.instagram.com/centrodelmarmol/?hl=es-la",
                wp:"",
                Img:"../assets/Marmoles.png",
            },
            {
                id: 2,
                name: "Sun Rental",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                instagramstate: false,
                instagram:"Este Comercio Adherido no posee cuenta de Instagram",
                wp:"",
                Img:"../assets/Sun.png",
            },
            {
                id: 3,
                name: "Rayuela",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                instagramstate:false,
                instagram:"",
                wp:"",
                Img:"../assets/Rayuela.jpeg",
            },
            {
                id: 4,
                name: "V.Parque",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                instagramstate: true,
                instagram:"",
                wp:"",
                Img:"../assets/Carrusel1.png",
            },
            {
                id: 5,
                name: "Caballito",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                instagramstate: true,
                instagram:"",
                wp:"",
                Img:"../assets/Carrusel1.png",
            },
            {
                id: 6,
                name: "Palermo",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                instagramstate: true,
                instagram:"",
                wp:"",
                Img:"../assets/Carrusel1.png",
            },
            {
                id: 7,
                name: "Quilmes",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                instagramstate: true,
                instagram:"",
                wp:"",
                Img:"../assets/Carrusel1.png",
            },
            {
                id: 8,
                name: "Libertilandia",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                instagramstate: true,
                instagram:"",
                wp:"",
                Img:"../assets/Carrusel1.png",
            },
        ]
  
    
/*------------------------------------------PARAMETROS------------------------------------------*/
    return(
        <div>
            <Layout>
                <Carrusel img1={img1} img2={img2} img4={img4}/>
                <Banner/>
                <div className="ContainerLocales">
                    {locales.map(locales=><Locales data={locales}  />)}
                </div>
            </Layout>
        </div>
    )
}

export default Comercio;