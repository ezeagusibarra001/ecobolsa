import React from "react"
import Button from 'react-bootstrap/Button'
import "../Home/Home.css"
function ButtonsHome(props){

    const Buttons=props.Buttons

    /*--------------------------------------------REUTILIZAMOS LOS BUTTONS DE ECONEWS & PERSONALIZAR--------------------------------------------*/
return(

    <div className={Buttons.contenedor}> 

        <Button className={Buttons.stylecss1} href="https://api.whatsapp.com/send?phone=5491130030029&text=Hola! Visite su página Web y me interesa tener mas informacion." target="_blank" > <b className={Buttons.stylecss2}>{Buttons.text}</b> </Button>
    
    </div>
)
}
export default ButtonsHome;