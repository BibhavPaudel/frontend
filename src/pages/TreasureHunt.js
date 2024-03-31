import React, { useState } from "react";
import t from "../assets/t.png";
import { Link} from "react-router-dom";
import "./treasureHunt.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TreasureContext } from "../useContext/TreasureContext";
import Coupon from "./Coupon";

function TreasureHunt() {
  const [open, setOpen] = useState(false);

  const handleScan = () => {
    setOpen(true);
  };

  const closeScanner=()=>{
    setOpen(false);
  }



  const teamflow = JSON.parse(localStorage.getItem("teamflow"));
  const stage = Number(localStorage.getItem("stage"));

  return (
    <>
      <TreasureContext.Provider value={{teamflow,stage}}>
        <Navbar></Navbar>
        <div>
          {stage != null && open != true ? (
            <div className="mainTreasureContainer">
              <div className="firstTreasureContainer">
                <div className="cardImage">
                  <img src={t} alt="" />
                </div>
                <div className="card">
                  <span className="hint">
                    Team<br />
                    {teamflow.team_id}
                  </span>
                  <h2>Riddle {stage}</h2>
                  <span className="riddle">{teamflow.hints[stage].hint}</span>
                  <span className="hint">
                    Letter: <br />
                    {teamflow.hints[stage].letter}
                  </span>
                </div>
                <button onClick={handleScan} className="scanButton">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Scan Here
                  </Link>
                </button>
              </div>
            </div>
          ) : (
            <>
              
            </>
          )}
        </div>
        {open == true ? (
          <div className="couponcontainer">
            <Coupon props={open}> </Coupon>
            <button className="closebutton" onClick={closeScanner}>Close Scanner</button>
          </div>
        ) : null}
      </TreasureContext.Provider>
      {/* <Footer></Footer> */}
    </>
  );
}

export default TreasureHunt;
