import React from "react";
import "./App.css"
// import { useSelector, useDispatch } from "react-redux";
// import {incNumber,decNumber} from "./Action/index";
import { useSelector,useDispatch } from "react-redux";
import {incrementNumber,decrementNumber} from "./Action/index"

const App =()=>{
  // const myState= useSelector((state)=>state.changeTheNumber)
  // const dispatch=useDispatch()
  const myState= useSelector((state)=> state.counter)
  const dispatch = useDispatch()
  return (
    <>
      <div className="container">
        <h1>Welcome to redux</h1>
        <h2>Increament and decreament counter</h2>
        <div className="quantity">
          <a className="quantity_minus" title="Decreament" href="#" onClick={()=> dispatch(decrementNumber())}><span>-</span></a>
          <input name="quantity" className="quantity_input" type="text" value={myState}/>
          <a className="quantity_add" title="Increament" href="#" onClick={()=> dispatch(incrementNumber())}><span>+</span></a>
        </div>
      </div>
    </>
  )
}
export default App;