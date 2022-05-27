import "./App.css";
import {useDispatch,useSelector } from "react-redux";
import {GetInfo} from './redux/actions/action'
import FoodFacts from "./features/FoodFacts";


function App() {
  const myArray=useSelector((state)=>state.Information)
  const dispatch=useDispatch()
  return (
    <div>
      {myArray.length===0 && <button type="button" onClick={()=>dispatch(GetInfo())}>getData</button>}
      {myArray.length!==0 && <FoodFacts/>}
    </div>
  );
}

export default App;

