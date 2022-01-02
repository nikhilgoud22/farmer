import React from "react";
import "../allDashboard_files.css";
import Card from "@mui/material/Card";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Typography, Button, Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function EmployeeList() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <h1 style={{ textAlign: "left", marginLeft: "20px" }}>Employee List</h1>
      <div className="card-div">
        <Card className="card" onClick={handleClickOpen}>
          <div className="flex">
            <Typography className="card-title">Farmer Name</Typography>
            <AccountCircle className="icons" />
          </div>
          <div style={{ textAlign: "left" }}>
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
          </div>
        </Card>
        <Card className="card2" onClick={handleClickOpen}>
          <div className="flex">
            <Typography className="card-title">Farmer Name</Typography>
            <AccountCircle className="icons" />
          </div>
          <div style={{ textAlign: "left" }}>
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
          </div>
        </Card>
        <Card className="card3" onClick={handleClickOpen}>
          <div className="flex">
            <Typography className="card-title">Farmer Name</Typography>
            <AccountCircle className="icons" />
          </div>

          <div style={{ textAlign: "left" }}>
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
          </div>
        </Card>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Employee Data"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Grid container spacing={0}>
                <Grid item={12} sm={12} md={6} lg={6}>
                  <label>
                    <b>Name:</b> &nbsp;
                  </label>
                  <span>Farmer Name</span>
                </Grid>
                <Grid item={12} sm={12} md={6} lg={6}>
                  <label>
                    <b>Phone:</b> &nbsp;
                  </label>
                  <span>123456789</span>
                </Grid>
                <Grid item={12} sm={12} md={6} lg={6}>
                  <label>
                    <b>Date:</b> &nbsp;
                  </label>
                  <span>10/6/2021</span>
                </Grid>
                <Grid item={12} sm={12} md={6} lg={6}>
                  <label>
                    <b>Area:</b> &nbsp;
                  </label>
                  <span>Telangana</span>
                </Grid>
                <Grid item={12} sm={12} md={6} lg={6}>
                  <label>
                    <b>Location:</b> &nbsp;
                  </label>
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
                </Grid>
              </Grid>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus className="ar-cancel-btn">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default EmployeeList;
