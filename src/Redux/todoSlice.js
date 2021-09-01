// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const todoSlice= createSlice({
//     name:'todos',
//     initialState:[
//         {id:1 , desc: "todo1 ", isDone:false},
//         {id:2 , desc: "todo2 ", isDone:false},
//         {id:3 , desc: "todo3", isDone:true},
   
//     ],
//     reducers:{
//         addTodo:(state, action) => {
// const newTodo={
//     id:Date.now,
//     desc:action.payload.desc,
//     isDone:false,
// };
// state.push(newTodo);
//         },
//     },
// });
// export const {addTodo}=todoSlice.action;

// export default  todoSlice.reducer;