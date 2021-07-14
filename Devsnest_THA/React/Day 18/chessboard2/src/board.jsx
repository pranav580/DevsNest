const Box = ()=>{
    return(<div class="box"> </div>)
}

const BoxRow=()=>{
    return( <div class="boxrow">
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
    </div>)
}

const Board=()=>{
    return(<div class="board">
        <BoxRow/>
        <BoxRow/>
        <BoxRow/>
        <BoxRow/>
        <BoxRow/>
        <BoxRow/>
        <BoxRow/>
        <BoxRow/>
    </div>)
}
export default Board;