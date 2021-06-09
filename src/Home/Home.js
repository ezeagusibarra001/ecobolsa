import React,{useState,useEffect} from "react"
import Layout from "../Layout";
import Carrusel from "../Carrusel"
import Video from "./Video"
import Econews from "./Econews"
import Personalizar from "./Personalizar"
import Elegirnos from "./Elegirnos"


function Home(props) {

    

    /*--------------------------------------------IMAGENES CARRUSEL HOME--------------------------------------------*/
    const img1="../assets/Carrusel1.png"
    const img2="../assets/Carrusel2.png"
     /*--------------------------------------------BUTTONS CARRUSEL HOME--------------------------------------------*/
     
    return(
        <div>
            <Layout>
                <Carrusel img1={img1}  img2={img2}  />
                <Video/>
                <Econews/>
                <Personalizar/>
                <Elegirnos/>
            </Layout>
        </div>
    )
}

export default Home;