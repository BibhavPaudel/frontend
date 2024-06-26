import { React, useContext, useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// Styles
import "./qrreader.css";

// Qr Scanner
import QrScanner from "qr-scanner";
import { TreasureContext } from "../useContext/TreasureContext";

// import QrFrame from "../assets/qrframe.png";

const QrReader = () => {
  const nav = useNavigate();
  // QR States
  const scanner = useRef(null);
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [qrOn, setQrOn] = useState(true);
  const [scansucc, setScansucc] = useState(false);

  const { teamflow, stage } = useContext(TreasureContext);

  // Result
  const [scannedResult, setScannedResult] = useState("");

  const [open,setOpen] = useState(false);

  // Success
  const onScanSuccess = (result = QrScanner.ScanResult) => {
    // 🖨 Print the "result" to browser console.
    console.log(result);
    // ✅ Handle success.
    // 😎 You can do whatever you want with the scanned result.
    setScannedResult(result?.data);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload();

  };

  //redirect on click
  const goToUrl = () => {
    if (scannedResult.match(teamflow.flow[stage])) {
      // alert("Congrats Do you want to continue to next level");
      setOpen(true);
      localStorage.setItem("stage", Number(localStorage.getItem("stage")) + 1);
    } else {
      alert("Oops Wrong Location Try to Crack the Riddle");
    }
  };
  const goToUrlundefined = () => {
    alert("Scan Again Properly");
  };

  // Fail
  const onScanFail = (err) => {
    // 🖨 Print the "err" to browser console.
    console.log(err);
  };

  useEffect(() => {
    if (videoEl?.current && !scanner.current) {
      // 👉 Instantiate the QR Scanner
      scanner.current = new QrScanner(videoEl?.current, onScanSuccess, {
        onDecodeError: onScanFail,
        // 📷 This is the camera facing mode. In mobile devices, "environment" means back camera and "user" means front camera.
        preferredCamera: "environment",
        // 🖼 This will help us position our "QrFrame.svg" so that user can only scan when qr code is put in between our QrFrame.svg.
        highlightScanRegion: true,
        // 🔥 This will produce a yellow (default color) outline around the qr code that we scan, showing a proof that our qr-scanner is scanning that qr code.
        highlightCodeOutline: true,
        // 📦 A custom div which will pair with "highlightScanRegion" option above 👆. This gives us full control over our scan region.
        overlay: qrBoxEl?.current || undefined,
      });

      // 🚀 Start QR Scanner
      scanner?.current
        ?.start()
        .then(() => setQrOn(true))
        .catch((err) => {
          if (err) setQrOn(false);
        });
    }

    // 🧹 Clean up on unmount.
    // 🚨 This removes the QR Scanner from rendering and using camera when it is closed or removed from the UI.
    return () => {
      if (!videoEl?.current) {
        scanner?.current?.stop();
      }
    };
  }, []);

  // ❌ If "camera" is not allowed in browser permissions, show an alert.
  useEffect(() => {
    if (!qrOn)
      alert(
        "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
      );
  }, [qrOn]);

  



  return (
    <div
      className="mainQRContainer"
      style={{ maxWidth: "60vw", maxHeight: "60vh" }}
    >
      <>
        <div className="qr-reader" style={{ maxHeight: 600, maxWidth: 400 }}>
          {/* QR */}
          <video
            style={{ maxWidth: 500, maxHeight: 500, marginLeft: "" }}
            ref={videoEl}
          ></video>
          <div ref={qrBoxEl} className="qr-box"></div>

          {/* Show Data Result if scan is success
        {scannedResult && (
          <p
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 99999,
              color: "white",
            }}
          >
            Scanned Result: {scannedResult}
          </p>
        )} */}
        </div>
        <div className="ButtonContainer">
          {scannedResult ? (
            <button
              onClick={() => {
                goToUrl();
              }}
            >
              Capture QR
            </button>
          ) : null}
        </div>
      </>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"> Congratulations </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Congratulations You have solved the Riddle
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}></Button> */}
          <Button onClick={handleClose} autoFocus>
            Solve Next Riddle
          </Button>
        </DialogActions>
      </Dialog></div>
  );
};

export default QrReader;
