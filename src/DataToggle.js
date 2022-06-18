import React, { useState } from "react";

const DataToggle = () => {
  const [myName, setMyName] = useState("Bibek Anand");
  const changeName = () => {
    let val = myName;
    if (val === "Bibek Anand") {
      setMyName("Dreamer");
    } else {
      setMyName("Bibek Anand");
    }
    // or
    // (val === "Bibek Anand") ? setMyName("Dreamer") : setMyName("Bibek Anand");
  };
  return (
    <>
      <h1>hyyy {myName}</h1>
      <button onClick={changeName}>Click Me</button>
    </>
  );
};

export default DataToggle;
