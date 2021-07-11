import React from "react";
import ReactDOM from "react-dom";
import Card from "./components";
import "./styles.css";

const App=()=>{
    return(
    <div className="Container">
        <Card/>
    </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"));