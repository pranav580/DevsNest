import { useState } from 'react';

const Btn = ()=>{
    const [number,setValue]=useState(0)
    return( <button className="btn" onClick={()=>setValue(number+1)}>{number}</button> )
}

export default Btn;
