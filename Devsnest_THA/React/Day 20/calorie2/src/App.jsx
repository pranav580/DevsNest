import React, { useState, useEffect } from 'react';
import './App.css';

const Todo=({ todo })=>{
  return(
    <div> 
      <h2>{todo}</h2>
    </div>
  )
}

function App(props) {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(["Food","Work"]);
  return (
    <div className="App">
      <input type="text" onChange={
        (e)=>{
          setValue(e.target.value);
        }
      }
      value={value}
      />

      <button onClick={()=>{
        setTodos([...todos,value])
        setValue("")
        }
      }>Add</button>
      
      {todos.map((todo,index)=>(
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
}
export default App;
