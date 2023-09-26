import "./TodoItem.css";
import { useDispatch } from "react-redux/es/exports";


const TodoItem = (props) => {

  const dispatch=useDispatch();
  const allTodo=()=>{
    props.all(props.id);
  };
  const completionTodo=()=>{
    props.completed(props.id);
  }
  const incompletionTodo=()=>{
    props.incomplete(props.id);
  }
  return (
    
    <div className="todo" onClick={completionTodo}>
      <input type="checkbox" ></input>
      <label>{props.text}</label>
      
       
     
    </div>
  );
};

export default TodoItem;
