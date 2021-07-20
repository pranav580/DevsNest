import React, { useState } from "react";

const Track=({item , cal})=>{
    return(
        <div>
            <h2>{item}</h2>
            <h6>You have consumed {cal} calories</h6>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    )
}

function Input(prpos){
    const [cal,setCal] = useState();
    const [value,setValue] = useState();
    const [food,setState] = useState([]);
    return(
        <div className="input">
            <input type="text" placeholder="food" 
                onChange={(e)=>{
                    setValue(e.target.value);
                }}
                value={value}
            />
            <input type="number" placeholder="Calories" 
                onChange={
                    (e)=>{
                        setCal(e.target.value)
                    }
                }
                cal={cal}
                />
            <div><button className="btn btn-primary m-2" 
                onClick={
                    ()=>{
                        setState([...food ,value])
                        console.log(food);
                        setValue("");
                        setCal("");
                    }
                }
                >Add Item</button></div>
            {food.map((items,index)=>(
                <Track key={index} item={items} cal={cal} />
            ))}
        </div>
    )
}
export default Input;