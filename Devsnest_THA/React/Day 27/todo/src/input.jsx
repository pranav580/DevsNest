import { useState } from "react";
import { useDispatch } from "react-redux";
import Add from "./redux/action";
import "./style.css"

const Input = ()=>{

    const dispatch = useDispatch();
    const [item,setItem]=useState("");

    return <div className="container">
        <div className="input">
            <div>
                <input className="in" placeholder="" onChange={(e)=>{setItem(e.target.value)}} value={item}></input>
            </div>
            <div>
                <button className="btn" onClick={()=>{setItem("");
                if(item){
                    dispatch(Add({
                        title:item,
                        done:false
                    }))
                }}}>Add</button>
            </div>
        </div>
    </div>
}

export default Input;