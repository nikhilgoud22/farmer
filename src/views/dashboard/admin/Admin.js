import React from "react";
import "../allDashboard_files.css";
import Card from "@mui/material/Card";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";

function Admin() {
  return (
    <div>
      <h1 style={{ textAlign: "left", marginLeft: "20px" }}>Admin</h1>
      <div className="card-div">
        <Card className="card">
          <div className="flex">
            <Typography className="card-title">Employee List</Typography>
            <AccountCircle className="icons" />
          </div>
        </Card>
        <Card className="card2">
          <div className="flex">
            <Typography className="card-title">Farmer List</Typography>
            <AccountCircle className="icons" />
          </div>
        </Card>
        <Card className="card3">
          <div className="flex">
            <Typography className="card-title">Donation List</Typography>
            <AccountCircle className="icons" />
          </div>
        </Card>
        <Card className="card4">
          <div className="flex">
            <Typography className="card-title">
              Donation Request List
            </Typography>
            <AccountCircle className="icons" />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Admin;
