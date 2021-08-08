
import { useDispatch } from "react-redux";
import { cardActionEmail,cardActionName } from "../redux/Action";

const Main=()=>{
    const dispatch = useDispatch();

    return (
    <div>
        <div className="input-container">
        <div className="username">
            <label>Username : </label>
            <input type="text" placeholder="" onChange={(e)=>(dispatch(cardActionName(e.target.value)))} ></input>
        </div>
        <div className="email">
            <label>Email : </label>
            <input type="mail" placeholder="" onChange={(e)=>(dispatch(cardActionEmail(e.target.value)))} ></input>
        </div>
        </div>
    </div>
    )
}

export default Main;