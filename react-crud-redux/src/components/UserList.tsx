import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

function UserList() {
  const fullname = useSelector((state: any) => state.fullname);
  const monumber = useSelector((state: any) => state.monumber);

  function createData(fullName: string, monumber: number) {
    return { fullname, monumber };
  }

  const rows = [createData(fullname, monumber)];

  return (
    <TableContainer component={Paper} className="userlist-main">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Number</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.monumber}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fullname}
              </TableCell>
              <TableCell align="right">{row.monumber}</TableCell>
              <TableCell align="right">
                <Button variant="outlined" color="error">
                  Delete
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button variant="contained" color="success">
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserList;
