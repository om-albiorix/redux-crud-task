import React from "react";
import {
  Table,
  Button,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
} from "@mui/material";
import { useSelector } from "react-redux";

function UserList() {
  const fullName = useSelector((state: any) => state.fullname);
  const mobileNumber = useSelector((state: any) => state.monumber);

  function createData(fullName: string, mobileNumber: number) {
    return { fullName, mobileNumber };
  }

  const rows = [createData(fullName, mobileNumber)];

  return (
    <TableContainer component={Paper} className="user-list-main">
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
              key={row.mobileNumber}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell align="right">{row.mobileNumber}</TableCell>
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
