import React, { useContext } from "react";
import QrReader from "../components/QrReader";
import "./Coupon.css"

//Scanning the Coupon Complete
function Coupon() {
  
  
 
  return (
    <div className={"active-QRreader"} style={{ maxHeight: "50%" }}>
      <QrReader />
    </div>
  );
}

export default Coupon;
