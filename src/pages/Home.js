import React from "react";

import { Link } from "react-router-dom";
import img1 from "../assets/Launch.png";
import img2 from "../assets/Coupon.png";
import img3 from "../assets/Treasure.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="mainIndexContainer">
      <Navbar></Navbar>
      <div className="cardsContainer">
        
        <div className="card1">
          <Link to="/launchevent">
            <div className="subcardContainer">
              <img src={img1} alt="" />
            </div>
          </Link>
        </div>

        <div className="card2">
          <Link to="/couponscan">
            <div className="subcardContainer">
              <img src={img2} alt="" />
            </div>
          </Link>
        </div>

        <div className="card3">
          <Link to="/trlogin">
            <div className="subcardContainer">
              <img src={img3} alt="" />
            </div>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
