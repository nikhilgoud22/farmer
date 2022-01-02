import React from "react";
import Button from "@mui/material/Button";
import "./allDashboard_files.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

function NewBooking() {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div style={{ textAlign: "left" }}>
      <div className="flex">
        <h1 className="nb-title">New Booking</h1>
        <Button className="nb-back-btn">Back</Button>
      </div>
      <div>
        <form>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <label>First Name</label>
              <br />
              <TextField style={{ width: "100%" }} type="text" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <label>Last Name</label>
              <br />
              <TextField style={{ width: "100%" }} type="text" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <label>Phone Number</label>
              <br />
              <TextField style={{ width: "100%" }} type="mobile" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <label>Item Name</label>
              <br />
              <TextField
                style={{ width: "100%" }}
                id="outlined-select-currency"
                select
                value={currency}
                onChange={handleChange}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <label>Item Quantity</label>
              <br />
              <TextField style={{ width: "100%" }} type="text" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <label>Location</label>
              <br />
              <TextField style={{ width: "100%" }} type="text" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <label>Address</label>
              <br />
              <TextField style={{ width: "100%" }} type="text" />
            </Grid>
          </Grid>
          <Button className="nb-submit-btn">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default NewBooking;
