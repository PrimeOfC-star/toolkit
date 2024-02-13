import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {Inc, Dec} from "../redux/slices/counterSlice"

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state)=> state.count1.value)    // here count1 is imp 
  //  const count = useSelector((state)=> state.count1)    // if we direct assig insitalState: 0 in CounterSlice
   console.log(count);
  return (
    <div>
        <div onClick={(e)=>{dispatch(Inc())}}>Inc</div>
        <p>{count}</p>
        <div onClick={(e)=>{dispatch(Dec())}}>Dec</div>
    </div>
  )
}

export default Counter
