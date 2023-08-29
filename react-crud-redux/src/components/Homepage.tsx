import React, { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

function Homepage() {
  const [fullname, setFullName] = useState("");
  const [monumber, setMonumber] = useState("");

  const dispatch = useDispatch();

  const handleName = (e: ChangeEvent<HTMLInputElement>) =>
    setFullName(e.target.value);

  const handleNumber = (e: ChangeEvent<HTMLInputElement>) =>
    setMonumber(e.target.value);

  const handleSubmit = () => {
    dispatch({
      type: "ADD-USER",
      data: { fullname, monumber },
    });
  };

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
              value={fullname}
              onChange={handleName}
            />
            <br />
            <TextField
              className="textfield"
              id="outlined-basic"
              label="MobileNumber"
              variant="outlined"
              value={monumber}
              onChange={handleNumber}
            />
            <br />
            <Button
              variant="contained"
              className="textfield"
              onClick={handleSubmit}
            >
              Contained
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Homepage;
