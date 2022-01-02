import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Grid, Typography, TextField } from "@mui/material";
import "../assets/commomCss/HomePage.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    name: "Nikhil",
    email: "nikhil@farmer.com",
    amount: "1000",
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    name: "Nikhil",
    email: "nikhil@farmer.com",
    amount: "1000",
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    name: "Nikhil",
    email: "nikhil@farmer.com",
    amount: "1000",
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    name: "Nikhil",
    email: "nikhil@farmer.com",
    amount: "1000",
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "auto", flexGrow: 1, p: 1.1 }}>
      <Button className="donate_btn" onClick={handleClickOpen}>
        Donate
      </Button>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 200,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <p style={{}}>{images[activeStep].label}</p>

        {images.map((step, index) => (
          <div key={step.label}>
            <div>{step.name}</div>
          </div>
        ))}
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div
            key={step.label}
            style={{
              height: "455px",
              padding: "50px 0px 0px 20px",
              textAlign: "left",
              fontFamily: "monospace !important",
            }}
          >
            {/* {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 306,
                  display: "block",
                  maxWidth: "100%",
                  overflow: "hidden",
                  width: "100%",
                  backgroundImage: "rounded",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null} */}

            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={8} lg={8}>
                <h3>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{step.name}</h3>
                <h3>
                  Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{step.email}
                </h3>
                <h3>Amount:&nbsp;&nbsp;{step.amount}</h3>
                <br />
                <br />
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <img src={step.imgPath} className="profile-img" />
              </Grid>
              <Typography>
                <b>Description:</b> React.js is a revolution in terms of a
                frontend framework. It is the most popular front-end framework
                according to Stackoverflow survey 2019. React.js works
                differently as compared to HTML because it uses JSX, that’s why
                it is often confusing to set background image in React.js.
              </Typography>
              <Typography className="text_thanks">Thank you</Typography>
            </Grid>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        style={{ backgroundColor: "#f7f7f7 !important" }}
        position="static"
        activeStep={activeStep}
        nextButton={<Button className="view_btn">View All</Button>}
        backButton={
          <Button
            size="small"
            //   onClick={handleBack} disabled={activeStep === 0}
          >
            {/* {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back */}
          </Button>
        }
      />
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Donater Data"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <label>
                    <b>First Name:</b> &nbsp;
                  </label>
                  <TextField
                    type="text"
                    style={{ width: "100%" }}
                    margin="dense"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <label>
                    <b>Last Name:</b> &nbsp;
                  </label>
                  <TextField
                    type="text"
                    style={{ width: "100%" }}
                    margin="dense"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <label>
                    <b>Email:</b> &nbsp;
                  </label>
                  <TextField
                    type="email"
                    style={{ width: "100%" }}
                    margin="dense"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <label>
                    <b>Phone:</b> &nbsp;
                  </label>
                  <TextField
                    type="tel"
                    style={{ width: "100%" }}
                    margin="dense"
                  />
                </Grid>
              </Grid>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className="tns-cont-me-btn">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Box>
  );
}

export default Carousel;
