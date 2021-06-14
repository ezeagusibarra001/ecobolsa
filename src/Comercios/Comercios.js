import React from "react"
import Layout from "../Layout";
import Banner from "./Banner"
import Locales from "./Locales"
import "./Comercios.css"
import {useHome} from '../Context/home-context'

function Comercio(props) {
    const {comercioState, setComercioState} = useHome()

  
    
    
       const locales= [
            {
                id: 0,
                name: "Donada & Asoc",
                description: "Abogados",
                instagramstate: true,
                instagram:"https://www.instagram.com/estudio.donada/?hl=es-la",
                wp:"https://api.whatsapp.com/send?phone=5491127759368&text=Hola! Los vi en Publi-City y me interesa tener mas informacion acerca de ustedes!",
                Img:"../assets/Centu.png",
                barrio: "Microcentro"
            },
            {
                id: 1,
                name: "CMC",
                description: "Marmolería",
                instagramstate: true,
                instagram:"https://www.instagram.com/centrodelmarmol/?hl=es-la",
                wp:"https://api.whatsapp.com/send?phone=5491150206254&text=Hola! Los vi en Publi-City y me interesa tener mas informacion acerca de ustedes!",
                Img:"../assets/Marmoles.png",
                barrio: "palermo"
            },
            {
                id: 2,
                name: "Sun Rental",
                description: "Gazebos & Estufas Ext ",
                instagramstate: false,
                instagram:"Este Comercio Adherido no posee cuenta de Instagram",
                wp:"https://api.whatsapp.com/send?phone=5491156071481&text=Hola! Los vi en Publi-City y me interesa tener mas informacion acerca de ustedes!",
                Img:"../assets/Sun.png",
                barrio: "P.Patricios"
            },
            {
                id: 3,
                name: "Rayuela",
                description: "Libreria & Jugueteria ",
                instagramstate:true,
                instagram:"https://www.instagram.com/ciudadrayuelaok/?hl=es-la",
                wp:"https://api.whatsapp.com/send?phone=54948635420&text=Hola! Los vi en Publi-City y me interesa tener mas informacion acerca de ustedes!",
                Img:"../assets/Rayuela.png",
                barrio: "almagro"
            },
            /*
            {
                id: 4,
                name: "V.Parque",
                description: "Some Examples",
                instagramstate: true,
                instagram:"",
                wp:"",
                Img:"../assets/Carrusel1.png",
                barrio: "v_parque"
            },
            {
                id: 5,
                name: "Caballito",
                description: " Some Examples",
                instagramstate: true,
                instagram:"",
                wp:"",
                Img:"../assets/Carrusel1.png",
                barrio: "caballito"
            },
            {
                id: 6,
                name: "Palermo",
                description: "Some Examples",
                instagramstate: true,
                instagram:"",
                wp:"",
                Img:"../assets/Carrusel1.png",
                barrio: "palermo"
            },
            {
                id: 7,
                name: "Quilmes",
                description: "Some Examples",
                instagramstate: true,
                instagram:"",
                wp:"",
                Img:"../assets/Carrusel1.png",
                barrio: "palermo"
            },
            {
                id: 8,
                name: "Libertilandia",
                description: "Some Examples",
                instagramstate: true,
                instagram:"",
                wp:"",
                Img:"../assets/Carrusel1.png",
                barrio: "palermo"
            },
            */
        ]
  
    
/*------------------------------------------PARAMETROS------------------------------------------*/
    return(
        <div>
            <Layout>

                <img 
                alt="imagen"
                className="ImgComercios"
                src="../assets/Portada.png"
                />
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