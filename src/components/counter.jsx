import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementWhiteUserData } from '../../redux/counter/counter'

function CounterPage() {
  const state=useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  const [inputVal,setInputVal]=useState(2)
  return (
    <div>
      <h3>counter - {state}</h3>
      <button onClick={()=>dispatch(increment())}>increase</button>
      <button onClick={()=>dispatch(decrement())}>decrease</button>
      <input type="number" name="reduxValue" value={inputVal} onChange={e=>setInputVal(e.target.value)}/>
      <button onClick={()=>dispatch(incrementWhiteUserData(+inputVal))}>increase white input data</button>
    </div>
  )
}

export default CounterPage
