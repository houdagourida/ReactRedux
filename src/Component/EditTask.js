import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {  Modal ,Button} from 'react-bootstrap';
import { edit_task } from '../Redux/Actions/actions';

const EditTask = ({Task}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newdesc, setNewdesc] = useState(Task.desc);
    const dispatch = useDispatch();
    return (
        <div>
           <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <input
          type="text"
          value={newdesc}
          onChange={(e) => setNewdesc(e.target.value)}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(edit_task(Task.id,newdesc))    ;handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>   
        </div>
    )
}

export default EditTask
