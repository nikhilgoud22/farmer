import React from "react";
import "../assets/commomCss/LoginPage.css";
import { Grid, Card, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <Card className="login_card">
        <h1>Register Here</h1>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <label>Email:</label> <br />
            <input type="email" name="email" placeholder="Type your Email" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your Phone Number"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <label>Password:</label> <br />
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
        <Button>Sign Up</Button>
        <p>
          <Link to="/login">Already have an Account!.</Link>
        </p>
      </Card>
    </div>
  );
}

export default Register;
