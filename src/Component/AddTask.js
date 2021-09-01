import React, { useState } from 'react'
import { Input , Icon } from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import {addtask} from '../Redux/Actions/actions';

const AddTask = () => {
  const dispatch=useDispatch();
  const [desx, setDesx] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (desx.length<=3) {alert("oops min 3 chars")} else 
   {
     dispatch(addtask({ id: Date.now(), description: desx, isDone: false }));
     setDesx("");
   }
  };
    return (
        <div>
            <form onSubmit={handleSubmit}>
      <Input placeholder='Add...' 
      onChange={(e)=>setDesx(e.target.value)}
      value={desx}
      />
        <button>
          Add
        </button>
      </form>
        </div>
    )
}

export default AddTask
