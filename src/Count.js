import React, { useState, useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "Increment") {
    return state + 1;
  }
  if (action.type === "Decrement") {
    return state - 1;
  }
  return state;
};
const Count = () => {
  //   const [count, setCount] = useState(0);
  // this is useState method
  //   const onInput = () => {
  //     setCount(count + 1);
  //   };
  //   const onOutput = () => {
  //     if (count > 0) {
  //       setCount(count - 1);
  //     } else {
  //       setCount(0);
  //     }
  //   };
  //This is useReducer method
  const [state, dispatch] = useReducer(reducer, initialState);
  // const onInput = () =>{
  //     dispatch({type:"Increment"})
  // }
  // const onOutput = () =>{
  //     dispatch({type: 'Decremtnt'})
  // }
  return (
    <>
      <h1>hello {state}</h1>
      <div className="btnStylePosition">
        <button onClick={() => dispatch({ type: "Increment" })}>Inc</button>
        <button onClick={() => dispatch({ type: "Decrement" })}>Dec</button>
      </div>
    </>
  );
};

export default Count;
