import React, { useContext } from "react";
import QrReader from "../components/QrReader";
import "./Coupon.css"

//Scanning the Coupon Complete
function Coupon(open) {
  
  
 
  return (
    <div className={"active-QRreader"} style={{ maxHeight: "50%" }}>
      <QrReader props={open} />
    </div>
  );
}

export default Coupon;
