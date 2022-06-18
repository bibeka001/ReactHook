import React, {useEffect, useState} from 'react'

const UseEffect = () => {
    const[count, setCount] = useState(0)
    const doCount = () => {
        setCount(count + 1);
    }
    console.log('clicked');
    useEffect(() => {
        if(count >= 1){

            document.title = `Beauty (${count})`
        }else{
            document.title = `Beauty`

        }
    })
  return (
    <>
        <h1>hello {count}</h1>
        <button onClick={doCount}>Click Me</button>
    </>

  )
}

export default UseEffect