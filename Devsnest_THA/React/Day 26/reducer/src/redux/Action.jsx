const cardActionName=(name)=>{
    return{
        type:'NAME_INPUT',
        payload:name
    }
}

const cardActionEmail=(Email)=>{
    return{
        type:'Email',
        payload:Email
    }
}

export {cardActionName,cardActionEmail}