import { ADD_TASK, EDIT_TASK, FILTER, REMOUV, TOGGLE} from "../Constants/action-types"


  export const addtask =(newTask)=>{
    return{type:ADD_TASK , payload:newTask}
  }

  export const remouve  =(id)=>{
    return{type:REMOUV,  payload:id}
  }
  export const edit_task  =(id, desc)=>{
    return{type:EDIT_TASK , payload:{id,desc} }
  }
    export const toggle=(id)=>{
      return{type:TOGGLE,
        payload:id
        
      }
    }
    export const filter=(status)=>{
      return{type:FILTER,
        payload:status
  
      }
    }