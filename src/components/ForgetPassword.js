import React from "react";
import "../assets/commomCss/LoginPage.css";
import { Grid, Card, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div>
      <Card className="login_card">
        <h1>Forgot Password </h1>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your Phone Number"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <label>Old Password:</label> <br />
            <input
              type="password"
              name="psw"
              placeholder="Type your Password"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <label>New Password:</label> <br />
            <input
              type="password"
              name="psw"
              placeholder="Type your Password"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <label>Confirm Password:</label> <br />
            <input
              type="password"
              name="psw"
              placeholder="Confirm your Password"
            />
          </Grid>
        </Grid>
        <br />
        <Button>Submit</Button>
        <p>
          <Link to="/login">Already have an Account!.</Link>
        </p>
      </Card>
    </div>
  );
}

export default ForgotPassword;
