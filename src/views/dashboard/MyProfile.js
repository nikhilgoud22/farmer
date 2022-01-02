import * as React from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import account_circle from "../../assets/images/account_circle.png";
import DoNotDisturbOnOutlinedIcon from "@mui/icons-material/DoNotDisturbOnOutlined";
// QUESTION:
// Order of appearance in screen size 'lg' is 1 | 2 | 3 (from left to Right)
// When the screen size is 'xs' then the grid appers in the order 1->2->3 (from top to bottom) but
// I need in the order say 1->3->2(from top to bottom) or say 2->1->3.

export default function MyProfile() {
  return (
    <Box sx={{ "& h1": { m: 0 } }} className="profile-box">
      <Typography className="profile-title">
        MyProfile
        <span style={{ float: "right" }}>
          <DoNotDisturbOnOutlinedIcon />
        </span>
      </Typography>
      <Grid container spacing={2} justify="flex-start">
        <Grid item xs={12} sm={8} md={8} order={{ xs: 3, sm: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <label>First Name:</label>
              <TextField type="text" style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <label>Last Name:</label>
              <TextField type="text" style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <label>Phone:</label>
              <TextField type="nobile" style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <label>Email:</label>
              <TextField type="email" style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <label>Location:</label>
              <TextField type="text" style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <label>Address:</label>
              <TextField type="text" style={{ width: "100%" }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={4} order={{ xs: 2, sm: 3 }}>
          <div>
            <img src={account_circle} className="profile-img" />
            <p className="profile-upload-text">Upload your Profile</p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
