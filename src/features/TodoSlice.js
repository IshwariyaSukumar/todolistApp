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

            removeTodo: (state,action)=>{
              state.todos=state.todos.filter((todo)=>todo.id!==action.payload);
              state.count-=1;
            },
            completedTodo:(state,action)=>{
              state.todos=state.todos.filter((todo)=>todo.id===action.payload);
            }
        },

    });

    export const {addTodo, removeTodo,completedTodo} =todoSlice.actions;
    export default todoSlice.reducer;