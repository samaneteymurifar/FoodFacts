import { createStore,applyMiddleware} from "redux";
import infoReducer from './reducers/infoReducer.js'
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas/saga.js";

const sagaMiddleWare=createSagaMiddleware()
const store=createStore(infoReducer,applyMiddleware(sagaMiddleWare))

export default store

sagaMiddleWare.run(mySaga)