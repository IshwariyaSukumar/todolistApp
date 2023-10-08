import React,{ useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { addTodo} from "./features/TodoSlice";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/exports";


function App() {
  
  const [input,setInput]=useState("");
  const [val,setVal]=useState(0);
  const count=useSelector((state)=>state.todo.count);
  const todos=useSelector((state)=>state.todo.todos);
  const dispatch=useDispatch();
  
  

  const handleAddTodo=(e)=>{
    e.preventDefault();
    dispatch(addTodo(input));
  }
  
  
  
  const findCount=(e)=>{
   if(e.target.checked){
     setVal(val+1);
    }
    else{
      setVal(val-1);
    }
  }
  
  

  return (
    <div className="App">
      <h1>TODO List</h1>
      <form className="App-form" onSubmit={handleAddTodo}>
        <input type="text" onInput={(e)=>setInput(e.target.value)}/>
        <button type="submit">Add Task</button>
      </form>
      <div className="Todos" >
        {count>0 && 
        todos.map((todo)=>(
         
          <TodoItem 
          key={todo.id}
          text={todo.text}
          id={todo.id}
          findCount={findCount}/>

        ))}
        
        
        <h2>Total task :{count}</h2>
        <h2>completed :{val}</h2>
        <h2>Pending:{count-val}</h2>
        
        
      </div>
     
      
      
    </div>
  );

        }
export default App;
