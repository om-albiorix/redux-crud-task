import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Homepage = () => {
  return (
    <div>
      <div className="form-parent">
        <form>
          <div className="main-form">
            <TextField
              id="outlined-basic"
              className="textfield"
              label="Name"
              variant="outlined"
            />
            <br />
            <TextField
              className="textfield"
              id="outlined-basic"
              label="MobileNumber"
              variant="outlined"
            />
            <br />
            <Button variant="contained" className="textfield">
              Contained
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Homepage;
