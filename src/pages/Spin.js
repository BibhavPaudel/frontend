import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import spinwheel from "../assets/spinwheel.png";
import Navbar from "../components/Navbar";

export const Spin = () => {
  // const [spins, setSpins] = useState(3);
  const [open, setOpen] = React.useState(false);
  const [desc, setDesc] = React.useState("Oops Better Luck Nezt Time");
  const [cid, setCid] = React.useState("");
  const [transition, setTransition] = React.useState("");

  const spins = localStorage.getItem("spins_left");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDesc("Oops Better Luck Nezt Time");
    setCid("");
  };

  const onSpin = () => {
    //transition start
    setTransition("a");

    //random luck Probablity
    const luck = Math.floor(Math.random() * 5) + 1;
    //Results Show after 1 sec delay
    setTimeout(() => {
      axios
        .get(`https://redsan-backend.onrender.com/spin`)
        .then((response) => {
          console.log(response.data[luck]);
          handleClickOpen();
          if (response.data[luck].desc) {
            alert("yey you won a Coupon , Dont forget to take a Screenshot");
            setDesc(response.data[luck].desc);
            setCid(response.data[luck].c_id);
          }
        })
        .catch((e) => {
          console.error(e.error);
        });
    }, 500);

    localStorage.setItem(
      "spins_left",
      Number(localStorage.getItem("spins_left") - 1)
    );
    setTransition(false);
  };

  return (
    <div>
      <Navbar/>
      <iframe
        title="Spin"
        style={{ position: "relative", top: 0, right: 0, "z-index": "-1" }}
        src="https://giphy.com/embed/8wVRtdu0M1u0AvcDVM"
        width="100%"
        height="400"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Coupon ID {cid}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {desc}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}></Button> */}
          <Button onClick={handleClose} autoFocus>
            Try Next Spin
          </Button>
        </DialogActions>
        <p style={{ margin: 40 }}>
          <b>Note: </b>Take A Clear Screenshot of Coupon and Coupon Id and show
          it to Stall 12
        </p>
      </Dialog>
      {Number(spins) <= 0 ? (
        <>
          <button>Free Spins Finished</button>
          <p>Go to the stall and Get 20 More Spins at just Rs 20 </p>
        </>
      ) : (
        <button
          onClick={() => {
            onSpin();
          }}
        >
          Click to Spin
        </button>
      )}
      free spins left : {spins}
    </div>
  );
};
