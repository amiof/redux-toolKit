import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../redux/Number/Number'

function Number() {
  const numberValue = useSelector(store => store.number.numberValue)
  const dispatch = useDispatch()
  console.log(numberValue)
  return (
    <div>
      <h3> Number - {numberValue} </h3>
      <button onClick={() => dispatch(increment())}>increse Number</button>
      <button onClick={() => dispatch(decrement())}>decrese Number</button>
    </div>
  )
}

export default Number
