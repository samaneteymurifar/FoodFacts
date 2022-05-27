

const initialState={
  Information:[],
  step:0,
  // userValue:[]
 
  
}

export default function info(state=initialState, action) {
  switch (action.type) {
      case "GET_INFO_SUCCESS":
        return {
          ...state,
          Information:action.informationFromSaga
        }
        case "NEXT_INFO":
          return {
              
          ...state,
          step: ++state.step,
          userValue: action.payload,
        
              
          }
    default:
      return state;
  }
}
