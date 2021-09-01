import { ADD_TASK, EDIT_TASK, FILTER, REMOUV, TOGGLE} from "../Constants/action-types"
// import { addTodo } from "../todoSlice"
 
const intialState ={
    List:[
        {id:1 , desc: "houda gourida ", isDone:false},
        {id:2 , desc: "ccc gourida ", isDone:false},
        {id:3 , desc: "bbbb gourida ", isDone:false},
    ]
}
export const todoReducer=(state=intialState, {type,payload}) => {
    switch (type) {
        case ADD_TASK:
            return{...state,List:[...state.List,payload]}
            case EDIT_TASK:
                return{...state,List:state.List.map(el=>el.id==payload.id?{...el,desc:payload.desc}:el)}
                case REMOUV:
                    return{...state,List: state.List.filter(el=>el.id!=payload)}    
                    case TOGGLE:
                        return{
                         ...state,List:state.List.map(el=>el.id==payload?{...el, isDone:!el.isDone}:el)
                        }
                        case FILTER:
                            return{
                          ...state,status:payload
                            }
        default:
            return state
    }
    
}