import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import "../allDashboard_files.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, TextField, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

export default function AreaRequested() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [submit, setSubmit] = React.useState(false);
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleOpen = () => {
    setSubmit(true);
  };
  const handleClickClose = () => {
    setSubmit(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
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
  const columns = [
    { id: "num", label: "S.No", maxWidth: 10, textAlign: "center" },
    {
      id: "farmerName",
      label: "Farmer Name",
      minWidth: 40,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    { id: "date", label: "Date", minWidth: 60 },

    {
      id: "location",
      label: "Location",
      minWidth: 60,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "status",
      label: "Status",
      minWidth: 60,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
  ];

  function createData(num, date, location, status, farmerName) {
    return { num, date, location, status, farmerName };
  }

  const rows = [
    createData(
      "1",
      "IN",
      1324171354,
      <Button className="status-view-btn" onClick={handleClickOpen}>
        View
      </Button>,
      "Nikhil"
    ),
    createData(
      "2",
      "CN",
      1403500365,
      <Button className="status-view-btn" onClick={handleClickOpen}>
        View
      </Button>,
      "Nikhil"
    ),
    createData(
      "3",
      "IT",
      60483973,
      <Button className="status-view-btn" onClick={handleClickOpen}>
        View
      </Button>,
      "Nikhil"
    ),
    createData(
      "4",
      "US",
      327167434,
      <Button className="status-view-btn" onClick={handleClickOpen}>
        View
      </Button>,
      "Nikhil"
    ),
    createData(
      "5",
      "CA",
      37602103,
      <Button className="status-view-btn" onClick={handleClickOpen}>
        View
      </Button>,
      "Nikhil"
    ),
    createData(
      "6",
      "AU",
      25475400,
      <Button className="status-view-btn" onClick={handleClickOpen}>
        View
      </Button>,
      "Nikhil"
    ),
    createData(
      "7",
      "DE",
      83019200,
      <Button className="status-view-btn" onClick={handleClickOpen}>
        View
      </Button>,
      "Nikhil"
    ),
    createData(
      "8",
      "IE",
      4857000,
      <Button className="status-view-btn" onClick={handleClickOpen}>
        View
      </Button>,
      "Nikhil"
    ),
    createData(
      "9",
      "MX",
      126577691,
      <Button className="status-view-btn" onClick={handleClickOpen}>
        View
      </Button>,
      "Nikhil"
    ),
    createData(
      "10",
      "JP",
      126317000,
      <Button className="status-view-btn" onClick={handleClickOpen}>
        View
      </Button>,
      "Nikhil"
    ),
  ];

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={6} lg={9}>
          <h1 className="nb-title">Area Requested List</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <div className="flex">
            <TextField
              id="outlined-select-currency"
              select
              //   label="Select"
              value={currency}
              onChange={handleChange}
              size="small"
              style={{ width: "120px", marginTop: "18px" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <Button className="nb-back-btn">Back</Button>
          </div>
        </Grid>
      </Grid>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 350 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <div>
          <Dialog
            open={submit}
            onClose={handleClickClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <label>Upload file</label>
                <TextField style={{ width: "100%" }} type="file" />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button className="tns-cont-me-btn">Submit</Button>
              <Button
                onClick={handleClickClose}
                autoFocus
                className="ar-cancel-btn"
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Confirm Data"}</DialogTitle>
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
              <Button onClick={handleOpen} className="tns-cont-me-btn">
                Approve
              </Button>
              <Button onClick={handleClose} autoFocus className="ar-cancel-btn">
                Reject
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
