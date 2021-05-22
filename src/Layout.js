import React,{useState,useEffect} from "react"
import Nabvar from "./Nabvar"
import Footer from "./Footer"

function Layout(props) {
    

    return(
        <div>
           <Nabvar/> 
           {props.children}
           <Footer/>
        </div>
    )
}

export default Layout;