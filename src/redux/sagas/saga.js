import GetDataInformation from './API'
import {call, put, takeEvery} from 'redux-saga/effects'

// j
import { GetInfo, NextInfo } from '../actions/action'



export function* GetInformation(){
    // get data
    const informationFromSaga=yield call(GetDataInformation)

    yield put({type:"GET_INFO_SUCCESS",informationFromSaga})
    console.log("from saga:",informationFromSaga)
}

function* mySaga(){
    
    yield takeEvery("GET_INFO",GetInformation);
}
export default mySaga