import React,{useState,useEffect} from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Modals(props) {

    const show=props.show
    const handleClose=props.clickclose
    const Wp=props.Wp

    return(

        <div>

            <Modal show={show} onHide={handleClose} variant="success">
                <Modal.Header closeButton>
                    <Modal.Title> <b> Lo sentimos... </b></Modal.Title>
                </Modal.Header>
                <Modal.Body> Solo se puede contactar con este comercio a través de <Button variant="success" size="sm" href={Wp} target="_blank" className="ButtonModal">WhatsApp!</Button>  </Modal.Body>
                <Modal.Footer>
                     <Button variant="success" onClick={handleClose} className="ButtonModal">
                        Entendido
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>

    )
    
}
export default Modals;