import React, { useState } from "react";
import './ToDo.css'

const ToDo = () => {
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
      age: 28,
    },
  ];
  const [myArray, setMyArray] = useState(bioData);
  const clearArray = () => {
    setMyArray([]);
  };
  const removeElem = (id) => {
// alert(id)
// or Filter Method
const myNewArray = myArray.filter((curElem) => {
  return curElem.id ===! id;
})
setMyArray(myNewArray);
  }
  return (
    <>
    <div className="total">
      {myArray.map((curElem) => {
        return (
          <h1  className="h1style"   key={curElem.id}>
            hy, My name is {curElem.myName} and my age is {curElem.age}
            <button onClick={ () => removeElem(curElem.id)}>Remove</button>
          </h1>
        );
      })}
      <button className="bg-primary" onClick={clearArray}>Clear</button>
      </div>
    </>
  );
};

export default ToDo;
