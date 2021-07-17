import Card from "./Components";
import { useState } from "react";
import "./style.css";

function App() {
  const [value, setValue] = useState([
    {
      id: 1,
      title: "Pizza",
      description: "No. of Cals consumed today :",
      val: 56
    },
    {
      id: 2,
      title: "Burger",
      description: "No. of Cals consumed today :",
      val: 100
    },
    {
      id: 3,
      title: "Coke",
      description: "No. of Cals consumed today :",
      val: 206
    },
    {
      id: 4,
      title: "Fried Rice",
      description: "No. of Cals consumed today :",
      val: 178
    },
  ]);

  const deleteFun = (id) => {
    const newArray = value.filter((omk) => omk.id !== id);
    setValue(newArray);
  };
  
  return (
    <div className="Container">
      <h2>Instructions</h2>
            <ul>
                <li>build a container</li>
                <li>create a seperate function and use it as a component</li>
                <li>pass props "calory and food" and call it to main component</li>
            </ul>
            <h1>Calorie Read Only</h1>
      <div className="cal">
        {value.map((i) => (
          <Card
            title={i.title}
            description={i.description}
            val={i.val}
            id={i.id}
            deleteFun={() => {
              deleteFun(i.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;