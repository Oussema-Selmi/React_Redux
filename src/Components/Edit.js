import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {editTask} from '../JS/Action/Actions'


const Edit = ({task}) => {

    const dispatch = useDispatch()
    const EditTask = ( e)=>{
        e.preventDefault();
        dispatch(editTask({id: task.id , text:descriptionText}));
        handleClose()

    
    }
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [descriptionText,SetDescriptionText]=useState(task.text)
    const handleChange = (e) => {SetDescriptionText(e.target.value)}




    return (
        <>
        <FaEdit size={14} onClick={handleShow} />
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <input 
              type = "text"
              onChange={handleChange}
              value = {descriptionText}
              />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={EditTask} >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default Edit
