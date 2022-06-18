import React, { useState } from "react";

const FormValidate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllentry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    if (email && password) {
      const newEntry = { id: new Date().getTime().toString(), email, password };
      setAllentry([...allEntry, newEntry]);
      console.log(allEntry);


      
      setEmail("");
      setPassword("");
    } else {
      alert('Please Fill up Data')
    }

  };
  return (
    <>
      <h1>hello</h1>
      <div className="full_page">
        <form action="" onSubmit={submitForm}>
          <div className="page_view">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              autoComplete="off"
              placeholder="Type your email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              autoComplete="off"
              placeholder="Enter your Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      <div className="showDetails">
        {allEntry.map((curElem) => {
          const { id, email, password } = curElem;
          return (
            <div key={id}>
              <p>{email}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FormValidate;
