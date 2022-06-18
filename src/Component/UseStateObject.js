import React, { useState } from "react";

const UseStateObject = () => {
  const [myObj, setMyObj] = useState({
    name: "Bibek",
    age: 27,
    qualification: 'Btech',
    place: 'banglore',
  });
  const changeObject= () => {
      setMyObj({...myObj, age: 28, name: "Anand", qualification:'MBA'})
  }
  return (
    <>
      <h1>hy, my name is {myObj.name}, my age is {myObj.age}, my qualification is {myObj.qualification}</h1>
      <button onClick={changeObject}>Update</button>
    </>
  );
};

export default UseStateObject;
