import { createStore} from "redux";
import infoReducer from './reducers/infoReducer.js'

const store=createStore(infoReducer)
export default store