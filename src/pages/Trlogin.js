import React, { useState } from "react";
import "./login.css";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Trlogin() {
  const nav = useNavigate();
  const [teamid, setTeamid] = useState("");

  const [name, setName] = useState("");

  // function validateForm() {
  //   return teamid.length > 0 && name.length > 2;
  // }

  const callAPI = () => {
    // var fetchDateUrl = ({ teamid }) =>
    //   `http://localhost:3001/trlogin/${teamid}`;
    axios
      .get(`http://localhost:3001/trlogin/${teamid}`)
      .then((response) => {
        // console.log(response.data);
        const person = response.data;
        console.log(person);
        localStorage.setItem("teamflow", JSON.stringify(person));

        if (localStorage.getItem("teamflow")) {
          nav("/treasurehunt");
          localStorage.setItem("stage", 0);
        }
        // handleClickOpen();
        // if (response.data[luck].desc) {
        //   setDesc(response.data[luck].desc);
        //   setCid(response.data[luck].c_id);
        // }
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  return (
    <>
    <Navbar/>
      <div className="Login ">
        <form action="" onSubmit={callAPI} className={"loginForm four"}>
          <input
            type="number"
            placeholder="teamID"
            value={teamid}
            onChange={(e) => {
              setTeamid(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Team Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </form>
      </div>
      {teamid ? <button onClick={callAPI}>Login</button> : null}
    </>
  );
}
