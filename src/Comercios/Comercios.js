import React,{useState,useEffect} from "react"
import Layout from "../Layout";
import Carrusel from "../Carrusel"
import Banner from "./Banner"
import Locales from "./Locales"


function Comercio(props) {

    const img1="../assets/Carrusel3.png"
    const img2="../assets/Carrusel2.png"
    const img4="../assets/Carrusel4.png"
    
    
       const locales= [
            {
                id: 0,
                name: "Boedo",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            },
            {
                id: 1,
                name: "Almagro",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            },
            {
                id: 2,
                name: "Monserrat",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            },
            {
                id: 3,
                name: "Deboto",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            },
            {
                id: 4,
                name: "V.Parque",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            },
            {
                id: 5,
                name: "Caballito",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            },
            {
                id: 6,
                name: "Palermo",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            },
        ]
  
    
/*------------------------------------------PARAMETROS------------------------------------------*/
    return(
        <div>
            <Layout>
                <Carrusel img1={img1} img2={img2} img4={img4}/>
                <Banner/>
                {locales.map(locales=><Locales data={locales}  />)}
            </Layout>
        </div>
    )
}

export default Comercio;