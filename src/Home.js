import React,{useState,useEffect} from "react"
import Layout from "./Layout";
import Carrusel from "./Carrusel";
import Econews from "./Econews";
import Personalizar from "./Personalizar";
import Elegirnos from "./Elegirnos";
import Video from "./Video";


function Home(props) {
    const img1="assets/carrusel1.jpg"
    const img2="assets/logo.png"
    return(
        <div>
            <Layout>
            <Carrusel img1={img1} img2={img2}/>
            <Video/>
            <Econews/>
            <Personalizar/>
            <Elegirnos/>
            </Layout>
        </div>
    )
}

export default Home;