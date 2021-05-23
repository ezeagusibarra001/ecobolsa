import React,{useState,useEffect} from "react"
import Layout from "./Layout";
import Carrusel from "./Carrusel";
import Econews from "./Econews";
import Personalizar from "./Personalizar";
import Elegirnos from "./Elegirnos";
import Video from "./Video";


function Home(props) {
    const img="assets/carrusel1.jpg"
    return(
        <div>
            <Layout>
            <Carrusel img={img}/>
            <Video/>
            <Econews/>
            <Personalizar/>
            <Elegirnos/>
            </Layout>
        </div>
    )
}

export default Home;