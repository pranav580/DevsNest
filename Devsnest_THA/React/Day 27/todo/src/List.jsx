import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import Done from "./redux/action";
import Delete from "./redux/action";

const Todos=()=>{
    const todo = useSelector((state)=>state)
    const dispatch = useDispatch();

    return (
    <div className="todos">
        {
            todo.map((item,index)=>{return(
            <div key={index} className="card">
            <div>
                {(item.done===true)?
                <button className="doneBtn" onClick={()=>dispatch(Done({title:item.title,done:false,index:index}))}>NotDone</button>:
                <button className="doneBtn" onClick={()=>dispatch(Done({title:item.title,done:true,index:index}))}>Done</button>
            }
            </div>
            <div className="content">
                {(item.done===true)?<div>{item.title}</div>:
                <div>{item.title}</div>}
            </div>
            <div>
                <button className="delBtn" onClick={()=>{dispatch(Delete(index))}}>Delete</button>
            </div>
        </div>)
            })
        }
    </div>
    )
}

export default Todos