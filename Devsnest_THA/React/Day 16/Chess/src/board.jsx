const Box = ()=>{
    return(<div class="box"> </div>)
}
var arr=[1,2,3,4,5,6,7,8];

const BoxRow=()=>{
    return( <div class="boxrow">
        {
        arr.map(item=>
            <Box/>
        ) 
        }
    </div>)
}

const Board=()=>{
    return(<div class="board">
       {
        arr.map(item=>
            <BoxRow/>
        ) 
        }
    </div>)
}
export default Board;