import { useState } from "react";

const Meme = ({meme , boxCount , setMeme})=>{

    const [form,setForm] = useState({
        template_id: meme.id,
        username : "stringster7",
        password : "facebook41980",
        boxes: [],
    });
    const genrateMeme = ()=>{
        let Url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        form.boxes.map((box,index)=>{
            return(Url += (`&boxes[${index}][text]=${box.text}`));
        });
        fetch(Url).then((res) => res.json())
        .then((data)=>{
            if(data.success===true){
                setMeme({...meme, url: data.data.url})
            }else{
                alert("Enter Some Text");
            }
        })
        
    }
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
                <button className="btn btn-primary" onClick={genrateMeme}>Create Meme</button>
                <button className="btn btn-primary" onClick={()=>{setMeme(null)}}>Choose Template</button>
            </div>
        </div>
    )
}
export default Meme;