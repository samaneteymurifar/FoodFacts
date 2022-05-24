import * as type from '../types'

export function getInfo(info){
    return{
        type: type.GET_INFO,
        payload:info,
}
}

export function NextInfo(userInput){
    const userValue=userInput
    return{
        type: type.NEXT_INFO,
        payload:userValue
     
}
}