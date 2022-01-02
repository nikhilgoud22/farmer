import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./allDashboard_files.css";
import Grid from "@mui/material/Grid";
import QRCode from "react-qr-code";

function Transitions() {
  return (
    <div style={{ textAlign: "left" }}>
      <div className="flex">
        <h1 className="nb-title">Transitions Details</h1>
        <Button className="nb-back-btn">Back</Button>
      </div>
      <div className="tns-padding">
        <Grid container spacing={4}>
          <Grid iteem xs={12} sm={12} md={5} lg={5}>
            <h3>
              <u>Scan the QR Code</u>
            </h3>
            <QRCode value="hey" />
            <p style={{ marginLeft: "120px" }}>or</p>
            <Button className="tns-cont-me-btn">Contact me</Button>
          </Grid>

          <Grid iteem xs={12} sm={12} md={6} lg={6}>
            <div style={{ marginTop: "10%" }}>
              <label>Upload the screenshot:</label>
              <br />
              <TextField className="tns-upload-field" type="file" />
            </div>
            <Button className="dd-submit-btn">Submit</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Transitions;
