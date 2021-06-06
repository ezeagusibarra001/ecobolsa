import React,{useState,useEffect} from "react"
import Layout from "../Layout";
import Carrusel from "../Carrusel"


function Comercio(props) {

    const img1="../assets/Carrusel3.png"
    const img2="../assets/Carrusel2.png"
    const img4="../assets/Carrusel4.png"
    
   

    return(
        <div>
            <Layout>
                <Carrusel img1={img1} img2={img2} img4={img4}/>
            </Layout>
        </div>
    )
}

export default Comercio;