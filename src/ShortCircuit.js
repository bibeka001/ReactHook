import React, {useState} from 'react'

const ShortCircuit = () => {
    const [demo, setDemo] = useState("Singh")
  return (
    <>
        <h1> {demo || 'Bibeka'}</h1>
        <h1> {demo && 'Anand'}</h1>
    </>
  )
}

export default ShortCircuit