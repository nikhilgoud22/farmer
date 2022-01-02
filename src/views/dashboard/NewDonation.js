import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import "./allDashboard_files.css";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

function NewDonations() {
  return (
    <div style={{ textAlign: "left" }}>
      <div className="flex">
        <h1 className="nb-title">New Donation</h1>
        <Button className="nb-back-btn">Back</Button>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card className="dd-card">
            <label>Name: &nbsp;</label>
            <span>Farmer Name</span>
            <br />
            <label>Experience: &nbsp;</label>
            <span>Farmer Name</span>
            <br />
            <label>Location: &nbsp;</label>

            <span>
              123/abc,
              <br />
              <Typography style={{ marginLeft: "80px" }}>
                xyz Colony,abc Nagar,
                <br />
                hyderabad, karimnagar,
                <br />
                Telangana - 500001
              </Typography>
            </span>

            <Button className="dd-submit-btn">Donate</Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card className="dd-card">
            <label>Name: &nbsp;</label>
            <span>Farmer Name</span>
            <br />
            <label>Experience: &nbsp;</label>
            <span>Farmer Name</span>
            <br />
            <label>Location: &nbsp;</label>

            <span>
              123/abc,
              <br />
              <Typography style={{ marginLeft: "80px" }}>
                xyz Colony,abc Nagar,
                <br />
                hyderabad, karimnagar,
                <br />
                Telangana - 500001
              </Typography>
              {/* satara.store
              satara@2009 */}
            </span>

            <Button className="dd-submit-btn">Donate</Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default NewDonations;
