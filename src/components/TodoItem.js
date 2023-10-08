import "./TodoItem.css";
import { useDispatch } from "react-redux/es/exports";




const TodoItem = (props) => {
  
  const dispatch=useDispatch();
  
  
  
  

  return (
    
    <div className="todo" >
      <input type="checkbox" onClick={props.findCount}></input>
      <label>{props.text}</label>   
    
    </div>
  );
};

export default TodoItem;
