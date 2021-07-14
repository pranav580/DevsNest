import React from "react";
import ReactDOM from "react-dom";
import Btn from "./Components";
import "./style.css";

const App= ()=>{
    return(
        <div className="container">
            <p>There are 4 counter component instances that each manage their own state.</p>
            {
            [...Array(4)].map(item=>
                <Btn/>

            )
            }
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"));