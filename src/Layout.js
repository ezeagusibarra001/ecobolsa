import React,{useState,useEffect} from "react"
import Nabvar from "./Nabvar"

function Layout(props) {
    

    return(
        <div>
           <Nabvar/> 
           {props.children}
        </div>
    )
}

export default Layout;