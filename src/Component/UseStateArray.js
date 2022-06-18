import React, { useState } from "react";

const UseStateArray = () => {
  const bioData = [
    {
      id: 0,
      myName: "Bibek",
      age: 26,
    },
    {
      id: 1,
      myName: "Anand",
      age: 27,
    },
    {
      id: 2,
      myName: "Singh",
      age: 27,
    },
  ];
  console.log(bioData);
  const[myArray, setMyArray]= useState(bioData);
  const clearData= () => {
    setMyArray([])
  }
  return (
    <>
      {myArray.map((curElem) => {
        return (
          <h1 key={curElem.id}>
            I'm {curElem.myName} and my age is {curElem.age}
          </h1>
        );
      })}
      <button onClick={clearData}>Clear</button>
    </>
  );
};

export default UseStateArray;
