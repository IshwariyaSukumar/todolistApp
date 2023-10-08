import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0,
    todos:[],
    
};

export const todoSlice=createSlice(
    {
        name:"todo",
        initialState,
        reducers:{
            addTodo: (state,action)=>{
              const todo={
                id:Math.random()*100,
                text:action.payload,
              }
              state.todos.push(todo);
              state.count+=1
            },
           
           
          
           
        },

    });

    export const {addTodo} =todoSlice.actions;
    export default todoSlice.reducer;