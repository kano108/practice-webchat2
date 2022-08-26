import React from "react";
import "./css/register.css";
import registerViewImage from "./images/registerViewImage.png";

import Button from "react-bootstrap/Button";
import { TextField } from "@material-ui/core";

const Login = () => {
  return (
    <div className="backimage">
      <div className="registerinputimage">
        <div className="inputBox">
          <span className="regiterName">Sign Up</span>
          <div style={{paddingTop:"90px"}}>
            <form noValidate autoComplete="off">
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
              <Button variant="secondary">Submit</Button>{" "}
            </form>
          </div>
        </div>

        <div className="imageBox">
          <img src={registerViewImage} alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Login;
