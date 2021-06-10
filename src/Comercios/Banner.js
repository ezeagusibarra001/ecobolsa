import React,{useState,useEffect} from "react"
import "./Comercios.css"



function Banner(props) {
    const {setComercioState} = props;

    return(
        
        <div >
            <div className="ContainerBanner">
                <button onClick={()=>setComercioState("boedo")} className="hover">  Boedo     </button>
                <button onClick={()=>setComercioState("almagro")} className="hover">  Almagro   </button>
                <button onClick={()=>setComercioState("monserrat")} className="hover">  Monserrat </button>
                <button onClick={()=>setComercioState("V.Devoto")} className="hover">  V.Devoto    </button>
                <button onClick={()=>setComercioState("v_parque")} className="hover">  V.Parque  </button>
                <button onClick={()=>setComercioState("caballito")} className="hover">  Caballito </button>
                <button onClick={()=>setComercioState("palermo")} className="hover">  Palermo   </button>
                <button onClick={()=>setComercioState("todos")} className="hover">  Todos   </button>
            </div>     
        </div>
    )
    
}
export default Banner;