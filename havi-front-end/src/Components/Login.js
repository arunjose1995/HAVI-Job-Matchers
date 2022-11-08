import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import { React, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Toolbar from "@mui/material/Toolbar";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TitlePanel from "./TitlePanel";
import Card from "@mui/material/Card";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import axios from "axios";
import { FormControl } from "@mui/material";
import Container from "@mui/material/Container";

const theme = createTheme();

export default function SignIn() {
 
  const Navigate = useNavigate();
  const [type, setType] = useState("");
  const [user,setUser]=useState("");
  const [pass,setPass]=useState("");
const baseURL="http://localhost:3001/login";
  const handleChangeType = (event) => {
    setType(event.target.value);
  }
  const handleUser = (event) => {
    setUser(event.target.value);
  }
  const handlePass = (event) => {
    setPass(event.target.value);
  }
  const validateUser = (event) => {
    event.preventDefault();
    
   const userObj={
    UserName: user,
    Password: pass,
    UserType:type
   }
   console.log("Login="+JSON.stringify(userObj));

    
    axios.post(baseURL, userObj)
    .then(function (response) {
      console.log("Response:"+response.data.message);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  return (
    <>
    
      <TitlePanel/>

      <Container component="main">
        <CssBaseline />
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
           <Avatar sx={{ ml: 30, mt: 5, bgcolor: "grey" }}>
            <LockOutlinedIcon />
           </Avatar>
           <Typography component="h1" variant="h5">
             Sign in
           </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={validateUser}
            sx={{ mt: 3 }}
          >
            <Grid container rowSpacing={2}>
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
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/Forget" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Registration" variant="body2">
                  {"Don't have an account? Sign Up"}
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