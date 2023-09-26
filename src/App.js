import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Status from './components/Status';
import { addTodo,removeTodo,completedTodo } from "./features/TodoSlice";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/exports";

function App() {
  
  const [input,setInput]=useState("");
  const count=useSelector((state)=>state.todo.count);
  const todos=useSelector((state)=>state.todo.todos);
  const dispatch=useDispatch();
  

  const handleAddTodo=(e)=>{
    e.preventDefault();
    dispatch(addTodo(input));
  };
  const handleTodoDone=(id,input)=>{
    dispatch(removeTodo(id,input));
  };
  const handleCompletion=(id,input)=>{
    dispatch(completedTodo(id,input));
  }

  return (
    <div className="App">
      <h1>TODO List</h1>
      <form className="App-form" onSubmit={handleAddTodo}>
        <input type="text" onInput={(e)=>setInput(e.target.value)}/>
        <button type="submit">Add Task</button>
      </form>
      <div className="Todos">
        {count>0 && 
        todos.map((todo)=>(
         
          <TodoItem 
          key={todo.id}
          text={todo.text}
          id={todo.id}
          onChange={handleCompletion}
          />

        ))}
        {count===0 && <p>No Todos</p>}
        <Status all={handleAddTodo} />
       
      </div>
         
         
      
      
    </div>
  );
}

export default App;
