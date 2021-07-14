import { useState } from 'react';

const Btn = ()=>{
    const [value,setValue]=useState(0)
    return(
        <button className="btn" onClick={()=>setValue(value+1)}>{value}</button>
    )
}

export default Btn;