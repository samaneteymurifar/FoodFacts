import React from "react";
import QuestionBox from "./questions/QuestionBox"
import { useState } from "react";
import "./Main.scss";
import { getInfo } from "../../redux/actions/action"; 
import { useDispatch,useSelector } from "react-redux";
import { NextInfo } from "../../redux/actions/action";

export default function Main(){
//   const Information=[
//     {id: "1", text: "Does this Lagoon have beef?",src: "../../../assest/image01.jpg", photoGrapher:"travis barclay"},
//     {id: "2", text: "Does this Sushi Delivery have beef?",src: "../../../assest/image02.jpg", photoGrapher:"InGold We Trust"},
//     {id: "3", text: "Does this Monte Cristo have beef?",src: "../../../assest/image03.jpg", photoGrapher:"travis barclay"},
//     {id: "4", text: "Does this Sweet and Sour Pork have peanuts?",src: "../../../assest/image04.jpg", photoGrapher:"travis barclay"},
//     {id: "5", text: "Does this Mysore have beef?",src: "../../../assest/image05.jpg", photoGrapher:"travis barclay"},
//   ]
//  let i=0

const dispatch=useDispatch()
const myArray=useSelector((state)=>state.Information)
const myState=useSelector((state)=>state)
const myStep=useSelector((state)=>state.step)
console.log("myState",myState)
console.log("myArray",myArray)

//  const [myState, setMyState] = useState(Information[0]);

 const ChangeStateByNotSure=()=>{
    console.log("change state")
    
 }

 const ChangeStateByNo=()=>{
  console.log("change state")
  
}

const ChangeStateByYes=()=>{
  console.log("change state")
  
}
  return (
    <div className="Main">
      <QuestionBox questionText={myArray[myStep].text} questionImage={myArray[myStep].src} imagePhotoGrapher={myArray[myStep].photoGrapher}/>

      <div className="Main__ButtonsBox"> 

        <button className="Main__Button" id="notSure" onClick={()=>{dispatch(NextInfo("Not Sure"))}}>
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="gray" fill-rule="evenodd" d="M7.5 1a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13zm0 12a5.5 5.5 0 1 1 0-11a5.5 5.5 0 0 1 0 11zm1.55-8.42a1.84 1.84 0 0 0-.61-.42A2.25 2.25 0 0 0 7.53 4a2.16 2.16 0 0 0-.88.17c-.239.1-.45.254-.62.45a1.89 1.89 0 0 0-.38.62a3 3 0 0 0-.15.72h1.23a.84.84 0 0 1 .506-.741a.72.72 0 0 1 .304-.049a.86.86 0 0 1 .27 0a.64.64 0 0 1 .22.14a.6.6 0 0 1 .16.22a.73.73 0 0 1 .06.3c0 .173-.037.343-.11.5a2.4 2.4 0 0 1-.27.46l-.35.42c-.12.13-.24.27-.35.41a2.33 2.33 0 0 0-.27.45a1.18 1.18 0 0 0-.1.5v.66H8v-.49a.94.94 0 0 1 .11-.42a3.09 3.09 0 0 1 .28-.41l.36-.44a4.29 4.29 0 0 0 .36-.48a2.59 2.59 0 0 0 .28-.55a1.91 1.91 0 0 0 .11-.64a2.18 2.18 0 0 0-.1-.67a1.52 1.52 0 0 0-.35-.55zM6.8 9.83h1.17V11H6.8V9.83z" clip-rule="evenodd"/></svg>
          <span>Not Sure</span>
        </button>

        <button className="Main__Button" id="no" onClick={()=>{dispatch(NextInfo("No"))}}>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="15" height="15" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="red" d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"/></svg>
          <span>No</span>
        </button>

        <button className="Main__Button" id="yes" onClick={()=>{dispatch(NextInfo("yes"))}}>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="green" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z"/></svg>
          <span>Yes</span>
        </button>

        
      </div>
    </div>
  );
}
















