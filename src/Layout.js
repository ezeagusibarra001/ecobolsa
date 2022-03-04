import React from "react"
import Nabvar from "./Nabvar/Nabvar"
import Footer from "./Footer/Footer"
import Wpp from "./assetsSrc/Wpp";

function Layout(props) {
    

    return(
        <div>
           <Nabvar/> 
           <Wpp/>
           {props.children}
           <Footer/>
        </div>
    )
}

export default Layout;