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
     const buttonhome={
         button1:{
             text:"CONOCÉ MÁS",
             stylecss:"ButtonC1",
             container:"Carruselcontainer1",
             wp:"https://api.whatsapp.com/send?phone=5491130784202",
         },
         button2:{
            text:"COMERCIOS",
            stylecss:"ButtonC2",
            container:"Carruselcontainer1"
         }
     }
     
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