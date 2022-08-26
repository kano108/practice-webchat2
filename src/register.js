import React from "react";
import "./css/register.css";
import registerViewImage from "./images/registerViewImage.png";
import TextField from "@material-ui/core/TextField";
import Button from "react-bootstrap/esm/Button";
// import {auth} from "./firebase"
import { useState } from "react";

const Register = () => {
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [gender , setGender] = useState("")
  // console.log("gender",gender);

  const dataSubmitFirebase= (e)=>{
      e.preventDefault()
      // auth.createUserWithEmailAndPassword(name,email,password,gender)
      setName("")
      setEmail("")
      setPassword("")
      setGender("")
      console.log("data",name); 
      console.log("data",email);
      console.log("data",gender);
      console.log("data",password);
  }   
  return (
    <div className="backimage">
      <div className="registerinputimage">
        <div className="inputBox">
          <span className="regiterName">Register</span>
          <div>
            {/* <form noValidate autoComplete="off" onSubmit={dataSubmitFirebase}> */}
            <form noValidate autoComplete="off">

              <TextField
                type="text"
                style={{ margin: "20px", width: "-webkit-fill-available" }}
                value={name}
                onChange={(e)=>setName(e.target.value)}
                id="standard-basic"
                label="Enter Your Name"
              />
              <br />
              <TextField
                type="text"
                style={{ margin: "20px", width: "-webkit-fill-available" }}
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                id="standard-basic"
                label="Enter Your Email"
              />
              <br />
              <TextField
                type="password"
                style={{ margin: "20px", width: "-webkit-fill-available" }}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                id="standard-basic"
                label="Enter The Password"
              />
              <br />
              <div className="radioButton">
              <h3>Select Gender </h3>
                <label>Male </label>
                <input type="radio" name="gender" value={"male"} onChange={(e)=>setGender(e.target.value)}/>
                <label>FeMale</label>
                <input type="radio" name="gender" value={"female"}  onChange={(e)=>setGender(e.target.value)}/>
              </div>
              <br />
              <Button variant="secondary" onClick={(e)=>dataSubmitFirebase(e)}>Submit</Button>
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
