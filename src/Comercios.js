import React,{useState,useEffect} from "react"
import Layout from "./Layout";
import Locales from "./Locales";
import Carrusel from "./Carrusel";


function Comercio(props) {
    
    const img="https://nextrategic.com/wp-content/uploads/2019/08/Mercado-libre-lanza-categoria-Eco-Friendly-810x405.jpg"

    return(
        <div>
            <Layout>
                <Carrusel img={img}/>
                <Locales/>
                </Layout>
        </div>
    )
}

export default Comercio;