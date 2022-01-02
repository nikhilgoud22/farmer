import React from "react";
import "../allDashboard_files.css";
import Card from "@mui/material/Card";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";

function Employee() {
  return (
    <div>
      <h1 style={{ textAlign: "left", marginLeft: "20px" }}>Employee</h1>
      <div className="card-div">
        <Card className="card">
          <div className="flex">
            <Typography className="card-title">Area Requested List</Typography>
            <AccountCircle className="icons" />
          </div>
        </Card>
        <Card className="card2">
          <div className="flex">
            <Typography className="card-title">Area Submitted List</Typography>
            <AccountCircle className="icons" />
          </div>
        </Card>
        <Card className="card3">
          <div className="flex">
            <Typography className="card-title">Item Requested List</Typography>
            <AccountCircle className="icons" />
          </div>
        </Card>
        <Card className="card4">
          <div className="flex">
            <Typography className="card-title">Item Submitted List</Typography>
            <AccountCircle className="icons" />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Employee;
