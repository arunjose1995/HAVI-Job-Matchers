import { React, useContext, useEffect, useState } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import axios from "axios";
import PostJob from "./PostJob";
import TitlePanel from "./TitlePanel";
import { FormControl } from "@mui/material";
import { HaviContext } from "../Context/HAVIContext";
const theme = createTheme();

export default function SignUp() {
  const [type,setType]=useState("");
  const [name,setName]=useState("");
  const [mail,setMail]=useState("");
  const [mobile,setMobile]=useState("");
  const [address,setAddress]=useState("");
  const [city,setCity]=useState("");
  const [user,setUser]=useState("");
  const [pass,setPass]=useState("");
  const [response,setResponse]=useState("");
  const {role,setRole,setRegName}=useContext(HaviContext);
const pathNav=useNavigate();

  const baseURL="http://localhost:3001/registration";

  const handleChangeType = (event) => {
    setType(event.target.value);
    setRole(type);
  }
  const handleName = (event) => {
    setName(event.target.value);
    
  }
  const handleMail = (event) => {
    setMail(event.target.value);
  }
  const handleMobile = (event) => {
    setMobile(event.target.value);
  }
  const handleAddress = (event) => {
    setAddress(event.target.value);
  }
  const handleCity = (event) => {
    setCity(event.target.value);
  }
  const handleUser = (event) => {
    setUser(event.target.value);
    setRegName(user);
  }
  const handlePass = (event) => {
    setPass(event.target.value);
  }
  const RegisterUser = (event) => {
    event.preventDefault();
    const userObj={
      Name:name,
      Mail:mail,
      Mobile:mobile,
      Address: address,
      City: city,
      UserName: user,
      Password: pass,
      UserType: type
    }
    console.log("Reg="+JSON.stringify(userObj));
  
  axios.post(baseURL, userObj)
  .then(function (res) {
    console.log("Back="+JSON.stringify(res.data.message));
    setResponse(JSON.stringify(res.data.message));
  })
  .catch(function (res) {
    //console.log(error);
    setResponse(JSON.stringify(res.data.message));

  });


  }
  useEffect(()=>{
  if(response)
  {
    console.log("resp="+response);
    console.log("role="+role);
if(type==="Job_Seeker")
{
  pathNav("/Profile");
}
else if(type==="Recruiter")
{
pathNav("/PostJob")
}
  }
  },[response],[role]);
  return (
    <>
    
      <TitlePanel/>

      <Container component="main">
       
        <Box
          mx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
             <Card
          sx={{ maxWidth: 500 }}
          style={{
            marginTop: "20px",
            
         flexDirection: "column",

            border: "10px",
            backgroundColor: "#d8e05e",
          }}
        >
          <Typography component="h1" variant="h5">
            Registration Form
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={RegisterUser}
            sx={{ mt: 3 }}
          >
            <Grid container rowSpacing={2}>
             
              <Grid item xs={12}>
                <TextField
                  
                  id="name"
                  label="Name"
                  name="name"
                  onChange={handleName}
              style={{ width: "350px" }}
                value={name || "" }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type="email"
                  onChange={handleMail}
                  
                  id="mail"
                  label="Mail Id"
                  name="mail"
              style={{ width: "350px" }}
                value={mail || "" }
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={handleMobile}
                  
                  name="contact"
                  label="Contact Number"
                  
                  id="contact"
              style={{ width: "350px" }}
                value={mobile || "" }
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="address"
                  label="Address"
                  id="address"
              style={{ width: "350px" }}
                value={address || "" }
                onChange={handleAddress}
                 
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl style={{width:"350px"}}>
<InputLabel id="demo-select-small">City</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={city}
        label="City"
        onChange={handleCity}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        
        <MenuItem value={"Mettupalayam"}>Mettupalayam</MenuItem>
        <MenuItem value={"Coimbatore"}>Coimbatore</MenuItem>
        <MenuItem value={"Trichy"}>Trichy</MenuItem>
        <MenuItem value={"Tiruppur"}>Tiruppur</MenuItem>
        <MenuItem value={"Thanjavur"}>Thanjavur</MenuItem>
        <MenuItem value={"Karur"}>Karur</MenuItem>
      

      </Select>
      </FormControl>

              </Grid>
              <Grid item xs={12}>
                <TextField
                 
                  name="username"
                  label="User Name"
                  id="username"
              style={{ width: "350px" }}
                value={user || "" }
                onChange={handleUser}
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 type="password"
                                   name="password"
                  label="Password"
                  id="password"
              style={{ width: "350px" }}
                value={pass || "" }
                onChange={handlePass}
                 
                />
              </Grid>
              <Grid item xs={12}>
<FormControl style={{width:"350px"}}>
<InputLabel id="demo-select-small">User Type</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={type}
        label="User Type"
        onChange={handleChangeType}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        
        <MenuItem value={"Recruiter"}>Recruiter</MenuItem>
        <MenuItem value={"Job_Seeker"}>Job Seeker</MenuItem>
      </Select>
      </FormControl>
            </Grid>
            </Grid>
            <Button
              type="submit"
              maxwidth="sx{8}"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Next
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
               
              </Grid>
            </Grid>
          </Box>
          </Card>
        </Box>
      </Container>  
    </>
  );
}