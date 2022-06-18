import React, { useState } from "react";
import "./Basic.css";
const Basic = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (e) => {
    const newEntry = { email: email, password: password };
    e.preventDefault();
    setAllEntry([...allEntry, newEntry]);
  };

  return ( 
    <>
      <div className="full_page">
        <form action="" onSubmit={submitForm}>
          <div className="page_view">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              autoComplete="off"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
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
        {allEntry.map((currElem) => {
          return (
            <div>
              <p>{currElem.email}</p>
              <p>{currElem.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Basic;
