import { useSelector } from "react-redux";

const Output=()=>{

    const name = useSelector((state)=>state.name)
    const Email = useSelector((state)=>state.Email)
    
    return (
    <div>
        <div className="input-container">
        <div className="username">
            <div className="nameOut">
                <h4>Name : </h4> {name}
            </div>
        </div>
        <div className="email">
            <div className="emailOut">
               <h4>Email : </h4>{Email}
            </div>
        </div>
        </div>
    </div>
    )
}

export default Output;