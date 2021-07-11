import React from "react";
import ReactDOM from "react-dom";
import Board from "./board";
import "./styles.css"

const App=()=>{
    return(<div class="Container">
        <Board/>
    </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root")
);