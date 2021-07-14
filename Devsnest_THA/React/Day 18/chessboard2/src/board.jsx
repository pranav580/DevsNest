const Box = (props)=>{
    return(<div className="box" style={{backgroundColor: props.color}}>

    </div>)
}


const Board=()=>{
    return (
        <div className="board">
            {
            [...Array(64)].map((element,index)=>{
                let COLOR="red";
                if((Math.floor(index/8)%2===0 && index%2===0) || (Math.floor(index/8)%2!==0 && index%2!==0))
                {
                    COLOR="black";
                }
                else
                {
                    COLOR="white"
                }

                return(
                <Box color={COLOR}/>
                )
            })
            }
        </div>
    )
}
export default Board;