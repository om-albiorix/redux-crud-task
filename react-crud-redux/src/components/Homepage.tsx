import React, { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

function Homepage() {
  // interface createData {
  //   fullName: String;
  //   mobileNumber: Number;
  // }

  const intialValues = { fullName, mobileNumber };

  const [formValues, setformValues] = useState(intialValues);

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    dispatch({
      type: "ADD-USER",
      data: { fullName, mobileNumber },
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
              value={fullName}
              onChange={handleChange}
            />
            <br />
            <TextField
              className="textfield"
              id="outlined-basic"
              label="MobileNumber"
              variant="outlined"
              value={mobileNumber}
              onChange={handleChange}
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
