import React, { useEffect, useState } from "react";
import "./GitHub.css";

const GitHub = () => {
  const [users, setUsers] = useState([]);
  const getUSers = async () => {
    const response = await fetch("https://api.github.com/users");
    // const data = await response.json();
    setUsers(await response.json());

    // console.log(data);
  };
  useEffect(() => {
    getUSers();
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <div className="container-fluid mt-5" key='id'>
        <div className="row text-center">
          {users.map((curElem) => {
            return (
              <div>
                <div className="col-10 col-md-4 mt-5">
                  <div className="care p-2">
                    <div className="d-flex align-items-center   ">
                      <div className="image">
                        <img src={curElem.avatar_} className="rounded" width="155" />
                      </div>
                      <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0 textLeft">{curElem.title}</h4>
                        <span className="textLeft"></span>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                          <div className="d-flex flex-column">
                            <span className="articles">Articles</span>
                            <span className="number1">43</span>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="articles">Followers</span>
                            <span className="number1">433</span>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="articles">Rating</span>
                            <span className="number1">4233</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GitHub;
