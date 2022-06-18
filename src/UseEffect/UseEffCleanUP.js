import React, { useState, useEffect } from "react";

const UseEffCleanUP = () => {
  const [widthCount, setWIdthCount] = useState(window.screen.width);


  const actualWidth = () => {
    console.log(window.innerWidth);
    setWIdthCount(window.innerWidth);
  };
  useEffect(() => {
    console.log('add event');
    window.addEventListener("resize", actualWidth);
     
    return () => {
      console.log('remove event');
      window.removeEventListener('resize', actualWidth);
    }
  });

  return (
    <>
      <p>The actual size of the window is :</p>
      <h1>hy {widthCount}</h1>
    </>
  );
};

export default UseEffCleanUP;
