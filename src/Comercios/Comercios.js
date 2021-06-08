import React,{useState,useEffect} from "react"
import Layout from "../Layout";
import Carrusel from "../Carrusel"
import Banner from "./Banner"
import Locales from "./Locales"
import "./Comercios.css"
import {useHome} from '../Context/home-context'

function Comercio(props) {
    const {comercioState, setComercioState} = useHome()
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
                wp:"https://api.whatsapp.com/send?phone=5491127759368",
                Img:"../assets/Centu.jpeg",
                barrio: "boedo"
            },
            {
                id: 1,
                name: "CMC",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                instagramstate: true,
                instagram:"https://www.instagram.com/centrodelmarmol/?hl=es-la",
                wp:"https://api.whatsapp.com/send?phone=54948635420",
                Img:"../assets/Marmoles.png",
                barrio: "almagro"
            },
            {
                id: 2,
                name: "Sun Rental",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                instagramstate: false,
                instagram:"Este Comercio Adherido no posee cuenta de Instagram",
                wp:"https://api.whatsapp.com/send?phone=5491156071481",
                Img:"../assets/Sun.png",
                barrio: "monserrat"
            },
            {
                id: 3,
                name: "Rayuela",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                instagramstate:false,
                instagram:"",
                wp:"https://api.whatsapp.com/send?phone=54948635420",
                Img:"../assets/Rayuela.jpeg",
                barrio: "deboto"
            },
            {
                id: 4,
                name: "V.Parque",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                instagramstate: true,
                instagram:"",
                wp:"",
                Img:"../assets/Carrusel1.png",
                barrio: "v_parque"
            },
            {
                id: 5,
                name: "Caballito",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                instagramstate: true,
                instagram:"",
                wp:"",
                Img:"../assets/Carrusel1.png",
                barrio: "caballito"
            },
            {
                id: 6,
                name: "Palermo",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                instagramstate: true,
                instagram:"",
                wp:"",
                Img:"../assets/Carrusel1.png",
                barrio: "palermo"
            },
            {
                id: 7,
                name: "Quilmes",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                instagramstate: true,
                instagram:"",
                wp:"",
                Img:"../assets/Carrusel1.png",
                barrio: "palermo"
            },
            {
                id: 8,
                name: "Libertilandia",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                instagramstate: true,
                instagram:"",
                wp:"",
                Img:"../assets/Carrusel1.png",
                barrio: "palermo"
            },
        ]
  
    
/*------------------------------------------PARAMETROS------------------------------------------*/
    return(
        <div>
            <Layout>
                <Carrusel img1={img1} img2={img2} img4={img4}/>
                <Banner
                    comercioState={comercioState}
                    setComercioState={setComercioState}
                />
                <div className="ContainerLocales">
                    {comercioState === "todos"
                    ? locales.map(locales=><Locales data={locales}/>)
                    : locales.filter((local)=>local.barrio === comercioState).map(locales=><Locales data={locales}/>)}
                </div>
            </Layout>
        </div>
    )
}

export default Comercio;