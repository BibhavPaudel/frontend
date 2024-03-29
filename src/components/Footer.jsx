import React from "react";

function Footer() {
  return (
    <div
      style={{
        height: "60px",
        background: "black",
        color: "white",
        marginTop: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <span style={{ marginLeft: "10px" }}>Developed by RedSan Co.</span>

      <span style={{ fontSize: "12px", marginRight: "10px" }}>
        Contact Us: 9664365954
      </span>
    </div>
  );
}

export default Footer;
