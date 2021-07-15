import { useState } from 'react';

const Btn = ()=>{
    const [num,setValue]=useState(0)
    return(
        <button className="btn" onClick={()=>setValue(num+1)}>{num}</button>
    )
}

export default Btn;