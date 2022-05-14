import React from 'react'
import {useSelector,useDispatch} from 'react-redux'



const Counter = () => {
  const dispatch=useDispatch()
  const counter=useSelector(sdf => sdf.counter)


  const toggleCounterHandler = () => {
    dispatch({type:'increment' })
  };
  const increment=()=>{
    dispatch({type:"increment"})
  }
  const decrement=()=>{
    dispatch({type:"decrement"})
  }
  const increase=()=>{
    dispatch({type:'increase',amount: 10})
  }
  return (
    <main>
      <h1>Redux Counter</h1>
      <div>{counter}</div>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={increase}>increase by 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter