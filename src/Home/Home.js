import React,{useState,useEffect} from "react"
import Layout from "../Layout";
import Carrusel from "../Carrusel"
import Video from "./Video"
import Econews from "./Econews"
import Personalizar from "./Personalizar"
import Elegirnos from "./Elegirnos"


function Home(props) {

    

    const img1="../assets/Carrusel1.png"
    const img2="../assets/Carrusel2.png"
    const img4="../assets/Carrusel4.png"
    
    return(
        <div>
            <Layout>
                <Carrusel img1={img1} img2={img2} img4={img4} />
                <Video/>
                <Econews/>
                <Personalizar/>
                <Elegirnos/>
            </Layout>
        </div>
    )
}

export default Home;