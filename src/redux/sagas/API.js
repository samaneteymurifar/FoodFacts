const apiState={
    Information: [
      {id: "1", text: "Does this Lagoon have beef?",src: "../../../assest/image01.jpg", photoGrapher:"travis barclay",userValue:undefined},
      {id: "2", text: "Does this Sushi Delivery have beef?",src: "../../../assest/image02.jpg", photoGrapher:"InGold We Trust",userValue:undefined},
      {id: "3", text: "Does this Monte Cristo have beef?",src: "../../../assest/image03.jpg", photoGrapher:"travis barclay",userValue:undefined},
      {id: "4", text: "Does this Sweet and Sour Pork have peanuts?",src: "../../../assest/image04.jpg", photoGrapher:"travis barclay",userValue:undefined},
      {id: "5", text: "Does this Mysore have beef?",src: "../../../assest/image05.jpg", photoGrapher:"travis barclay",userValue:undefined},
    ],
    step:0,
    
  } ;
function GetDataInformation() {
  return apiState;

  // return fetch("https://jsonplaceholder.typicode.com/albums").then((response) =>
  // response.json()

}
export default GetDataInformation


