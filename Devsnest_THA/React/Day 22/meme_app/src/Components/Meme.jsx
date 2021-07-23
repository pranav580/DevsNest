import { useState } from "react";

const Meme = ({meme , boxCount , setMeme})=>{

    const [form,setForm] = useState({
        template_id: meme.id,
        username : "stringster7",
        password : "facebok41980",
        boxes: [],
    });
    // const genrateMeme = ()=>{

    // }
    return(
        <div>
            <img src={meme.url} alt="img" className="image"/>
            <br/>
            {[...Array( boxCount )].map((item,index)=>(
                <input 
                    key={index} 
                    type="text" 
                    placeholder={`Meme Caption ${index + 1}`}
                    onChange={(e)=>{
                        const newBoxes = form.boxes;
                        newBoxes[index] = {text:e.target.value};
                        setForm({...form, boxes:newBoxes});
                    }}
                />
            ))}
            <div>
                <button className="btn btn-primary" >Create Meme</button>
                <button className="btn btn-primary" onClick={()=>{setMeme(null)}}>Choose Template</button>
            </div>
        </div>
    )
}
export default Meme;