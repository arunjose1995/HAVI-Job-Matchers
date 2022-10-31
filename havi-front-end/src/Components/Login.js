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
const theme = createTheme();

export default function SignIn() {
 
  const Navigate = useNavigate();
  const [type, setType] = useState();
const baseURL="http://localhost:3001/";
  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
  }
  const validateUser = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let username = data.get("username");
    let password = data.get("password");

    axios.get(baseURL).then((response) => {
      console(response.data);
    });

    // if(username==="vanitha" && password==="12345")
    // {
    //   console.log("Welcome");
    // }
    // else{
    //   console.log("Invalid");
    // }
  }
  return (
    <div backgroundcolor="#e2f590">
      <TitlePanel />

      <Box
        sx={{
          mt: 0,
          display: "flex",
         flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card
          sx={{ maxWidth: 500 }}
          style={{
            marginTop: "50px",
            height: "500px",
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
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={validateUser}>
            <TextField
              margin="normal"
              required
              id="username"
              label="Username"
              name="username"
              autoFocus
              style={{ width: "350px" }}

            />
            <TextField
              margin="normal"
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              style={{ width: "350px" }}
            />
<br></br>
<InputLabel id="demo-select-small">User Type</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={type}
        label="User Type"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Admin"}>Admin</MenuItem>
        <MenuItem value={"Recruiter"}>Recruiter</MenuItem>
        <MenuItem value={"Job_Seeker"}>Job Seeker</MenuItem>
      </Select>

            <Button
              type="submit"
              maxwidth="30px"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
             
            >
              Sign In
            </Button>
<br></br><br></br><br></br>
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
    </div>
  );
}