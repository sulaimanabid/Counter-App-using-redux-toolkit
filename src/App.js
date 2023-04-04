import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counter';
import './style.css';

export default function App() {
  const { value } = useSelector((state) => state.counter); // useselector will allow u to get the varialble that needs to be changed from the reducer u desire to take it from

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter Using Redux Toolkit</h1>
      <h4>The count is: {value}</h4>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(22))}>Increment by Amount</button>
    </div>
  );
}
