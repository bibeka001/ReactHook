import React, { useEffect, useState } from "react";

const UseEffDep = () => {
  const [count, setCount] = useState(0);
  const onInput = () => {
    setCount(count + 1);
  };
  useEffect(() => {
      console.log('iam first');
    if (count >= 1) {
      document.title = ` chats (${count})`;
    } else {
      document.title = ` chats`;
    }
  }, [count]); 
  useEffect(() => {
      console.log('Iam cool');
  },[])
  console.log("clicked");
  return (
    <>
      <h1>Hello</h1>
      <button onClick={onInput}>Click Me</button>
    </>
  );
};

export default UseEffDep;
