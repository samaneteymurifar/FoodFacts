import * as type from "../types";

// const initialState = {
//   Information: [
//     {id: "1", text: "Does this Lagoon have beef?",src: "../../../assest/image01.jpg", photoGrapher:"travis barclay",userValue:undefined},
//     {id: "2", text: "Does this Sushi Delivery have beef?",src: "../../../assest/image02.jpg", photoGrapher:"InGold We Trust",userValue:undefined},
//     {id: "3", text: "Does this Monte Cristo have beef?",src: "../../../assest/image03.jpg", photoGrapher:"travis barclay",userValue:undefined},
//     {id: "4", text: "Does this Sweet and Sour Pork have peanuts?",src: "../../../assest/image04.jpg", photoGrapher:"travis barclay",userValue:undefined},
//     {id: "5", text: "Does this Mysore have beef?",src: "../../../assest/image05.jpg", photoGrapher:"travis barclay",userValue:undefined},
//   ],
//   step:0,
//} 
;
const initialState={
  Information:[],
  step:0
}

export default function info(state={Information:[],step:0}, action) {
  switch (action.type) {
      case "GET_INFO_SUCCESS":
        return {
          ...state,
          Information:action.informationFromSaga
        }
    default:
      return state;
  }
}
