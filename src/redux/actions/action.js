import * as type from '../types'
import {createAction} from '@reduxjs/toolkit'


export const GetInfo=createAction("GET_INFO")

// export function getInfo(info){
//     return{
//         type: type.GET_INFO,
//         payload:info,
// }
// }

export function NextInfo(userInput){
    const userValue=userInput
    return{
        type: type.NEXT_INFO,
        payload:userValue
     
}
}