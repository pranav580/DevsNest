const initialState={
    name:'Name',
    Email:'Email'
}

const CardReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'NAME_INPUT':return{
            ...state,
            name:action.payload
        }
        case 'Email':return{
            ...state,
            Email:action.payload
        }
        default:return state
    }
}

export default CardReducer