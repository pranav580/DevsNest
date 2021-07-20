import React, { useState } from "react";

const Track=({item ,food , cal, index})=>{
    return(
        <div className="Track">
            <h2>{item}</h2>
            <h6>You have consumed {cal} calories</h6>
            <div className="btn btn-danger b" 
                onClick={()=>{
                    console.log("Delete =>", item);
                    const newFoods = food.filter((el)=> el !== item);
                    console.log(index);
                }}
            >Delete</div>
            <div className="btn btn-primary b">Edit</div>
        </div>
    )
}

function Input(prpos){
    const [cals,setCal] = useState([]);
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
                cals={cals}
                />
            <div><button className="btn btn-primary m-2" 
                onClick={
                    ()=>{
                        setState([...food ,value])
                        setValue("");
                        setCal("");
                        console.log(food);
                    }
                }
                >Add Item</button></div>
            {food.map((items,index)=>(
                <Track key={index} item={items} food={food} cal={cals} index={index}/>
            ))}
        </div>
    )
}
export default Input;