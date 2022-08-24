import React from "react";
import "./css/register.css";
import registerViewImage from "./images/registerViewImage.png";
import TextField from "@material-ui/core/TextField";
import Button from "react-bootstrap/esm/Button";

const Register = () => {
  return (
    <div className="backimage">
      <div className="registerinputimage">
        <div className="inputBox">
          <span className="regiterName">Register</span>
          <div>
            <form noValidate autoComplete="off">
              <TextField
                type="text"
                style={{ margin: "20px", width: "-webkit-fill-available" }}
                // className="forminput4"
                id="standard-basic"
                label="Enter Your Name"
              />
              <br />
              <TextField
                type="text"
                style={{ margin: "20px", width: "-webkit-fill-available" }}
                id="standard-basic"
                label="Enter Your Email"
              />
              <br />
              <TextField
                type="password"
                style={{ margin: "20px", width: "-webkit-fill-available" }}
                id="standard-basic"
                label="Enter The Password"
              />
              <br />
              <div style={{textAlignLast: "start",margin: "20px"}}>
              <h3>Select Gender </h3>
                <label>Male </label>
                <input type="radio" />
                <label>FeMale</label>
                <input type="radio" />
              </div>
              <br />
              <Button variant="secondary">Submit</Button>{" "}
            </form>
          </div>
        </div>

        <div className="imageBox">
          <img src={registerViewImage} alt="" style={{width:"100%"}}/>
        </div>
      </div>
    </div>
  );
};

export default Register;
