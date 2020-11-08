import React,{useState} from 'react'
import Die from './die'
import dice from '../dice.json'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


function DiceModal(){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(    <>
      <Button variant="success" onClick={handleShow}>
      Show Dice
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Dice to Roll</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {dice.map((item)=>(
  <Die sides={item.sides} img={item.img}/> 
))}
   
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>)
}
export default DiceModal;