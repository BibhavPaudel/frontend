import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import img1 from "../assets/Frame 1.png";
import Footer from "../components/Footer";
import "./launchEvent.css";

function LaunchEvent() {
  return (
    <div className="mainLaunchContainer">
      <Navbar />
      <div className="firstLaunchContainer">
        <img src={img1} alt="" />
      </div>
      <div className="secondLaunchContainer">
        <button className="scanButton">
          <Link to="/spin" style={{ textDecoration: "none", color: "white" }}>
            Scan QR
          </Link>
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default LaunchEvent;
