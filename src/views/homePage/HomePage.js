import React from "react";
// import bgImg from "../../assets/images/f_bg.jpg";
// import Login from "../../components/Login";
import Carousel from "../../components/Carousel";
import { Grid, Button } from "@material-ui/core";
import "../../assets/commomCss/HomePage.css";
import paddyGirl from "../../assets/images/paddy.png";

function HomePage() {
  return (
    <div>
      <section className="login-block">
        <div className="container">
          <Grid container spacing={0}>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              className=" login-sec"
              style={{
                backgroundImage: "url(" + paddyGirl + ")",
                backgroundSize: "cover",
                height: "90vh",
              }}
            >
              <h2 className="text-center">Login Now</h2>
              <form className="login-form">
                <div className="form-group">
                  <label for="exampleInputEmail1" className="text-uppercase">
                    Username:&nbsp;&nbsp;
                  </label>
                  <input
                    type="text"
                    className="form-control input"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1" className="text-uppercase">
                    Password:&nbsp;&nbsp;&nbsp;
                  </label>
                  <input
                    type="password"
                    className="form-control input"
                    placeholder=""
                  />
                </div>
                <br />
                <div className="form-check">
                  <label className="form-check-label ">
                    <input type="checkbox" className="form-check-input" />
                    <small>Remember Me</small>
                  </label>
                  <Button type="submit" className="btn_login">
                    Submit
                  </Button>
                </div>
              </form>
              <div className="copy-text">
                Created New <i className="fa fa-heart"></i>
                <a href="/register">Account</a>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Carousel />
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
