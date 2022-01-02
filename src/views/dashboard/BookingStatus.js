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
import "./allDashboard_files.css";

const columns = [
  { id: "name", label: "S.No", minWidth: 100 },
  { id: "code", label: "Item", minWidth: 100 },
  {
    id: "population",
    label: "Date of Booking",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Booking Status",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "farmerName",
    label: "Farmer Name",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "cancelOrder",
    label: "Farmer Name",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(name, code, population, size, farmerName, cancelOrder) {
  return { name, code, population, size, farmerName, cancelOrder };
}

const rows = [
  createData(
    "1",
    "IN",
    1324171354,
    3287263,
    "Nikhil",
    <Button className="bs-cancel-btn">Cancel</Button>
  ),
  createData(
    "2",
    "CN",
    1403500365,
    9596961,
    "Nikhil",
    <Button className="bs-cancel-btn">Cancel</Button>
  ),
  createData(
    "3",
    "IT",
    60483973,
    301340,
    "Nikhil",
    <Button className="bs-cancel-btn">Cancel</Button>
  ),
  createData(
    "4",
    "US",
    327167434,
    9833520,
    "Nikhil",
    <Button className="bs-cancel-btn">Cancel</Button>
  ),
  createData(
    "5",
    "CA",
    37602103,
    9984670,
    "Nikhil",
    <Button className="bs-cancel-btn">Cancel</Button>
  ),
  createData(
    "6",
    "AU",
    25475400,
    7692024,
    "Nikhil",
    <Button className="bs-cancel-btn">Cancel</Button>
  ),
  createData(
    "7",
    "DE",
    83019200,
    357578,
    "Nikhil",
    <Button className="bs-cancel-btn">Cancel</Button>
  ),
  createData(
    "8",
    "IE",
    4857000,
    70273,
    "Nikhil",
    <Button className="bs-cancel-btn">Cancel</Button>
  ),
  createData(
    "9",
    "MX",
    126577691,
    1972550,
    "Nikhil",
    <Button className="bs-cancel-btn">Cancel</Button>
  ),
  createData(
    "10",
    "JP",
    126317000,
    377973,
    "Nikhil",
    <Button className="bs-cancel-btn">Cancel</Button>
  ),
  createData(
    "11",
    "FR",
    67022000,
    640679,
    "Nikhil",
    <Button className="bs-cancel-btn">Cancel</Button>
  ),
  createData(
    "12",
    "GB",
    67545757,
    242495,
    "Nikhil",
    <Button className="bs-cancel-btn">Cancel</Button>
  ),
  createData(
    "13",
    "RU",
    146793744,
    17098246,
    "Nikhil",
    <Button className="bs-cancel-btn">Cancel</Button>
  ),
  createData(
    "14",
    "NG",
    200962417,
    923768,
    "Nikhil",
    <Button className="bs-cancel-btn">Cancel</Button>
  ),
  createData(
    "15    ",
    "BR",
    210147125,
    8515767,
    "Nikhil",
    <Button className="bs-cancel-btn">Cancel</Button>
  ),
];

export default function BookingStatus() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <div className="flex">
        <h1 className="nb-title">New Booking</h1>
        <Button className="nb-back-btn">Back</Button>
      </div>
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
