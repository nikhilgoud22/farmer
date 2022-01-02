import React from "react";
import "../assets/commomCss/LoginPage.css";
import { Card, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div>
        <Card className="login_card">
          <h1>Login Here</h1>
          <label>Email:</label> <br />
          <input type="email" name="email" placeholder="Type your Email" />
          <br />
          <br />
          <label>Password:</label> <br />
          <input type="password" name="psw" placeholder="Type your Password" />
          <br /> <br />
          <Button>Login</Button>
          <p>
            For Sign Up!&nbsp;
            <Link to="/register">Click Here</Link>
          </p>
          <p>
            <Link to="">Forgot Password?</Link>
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Login;
