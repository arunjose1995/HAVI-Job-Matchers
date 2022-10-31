import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Link } from "@mui/material";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Tooltip } from "@mui/material";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import TransferWithinAStationSharpIcon from '@mui/icons-material/TransferWithinAStationSharp';
import TitlePanel from "./TitlePanel";

export default function HomePage() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
   <TitlePanel/>
      <Box sx={{ flexGrow: 1, display:"flex", columnGap:4, padding:5 }}  >
      <Card 
    sx={{ maxWidth: 345 }}
    style={{
      marginTop: "150px",
      border: "10px",
      backgroundColor: "#d8e05e"
    }}
  >
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <TransferWithinAStationSharpIcon />
          Admin
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage Job Seekers and Job Recruiters?<br></br><br></br><br></br>
          <Link href="Login" underline="hover">
            Get Started
          </Link>
        </Typography>
      </CardContent>
    </CardActionArea>
    
  </Card>
    <Card
    sx={{ maxWidth: 345 }}
    style={{
      marginTop: "150px",
      border: "10px",
      backgroundColor: "#d8e05e"
    }}
  >
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <SupervisorAccountIcon />
          Recruiter
        </Typography>
        <Typography variant="body1" color="text.secondary">
        Want to advertise jobs and search for resumes. <br></br><br></br>
          <Link href="Login" underline="hover">
          Get Started

          </Link>
        </Typography>
      </CardContent>
    </CardActionArea>
    
  </Card>
  
 

  <Card
    sx={{ maxWidth: 345 }}
    style={{
      marginTop: "150px",
      border: "10px",
      backgroundColor: "#d8e05e"
    }}
  >
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <SearchSharpIcon />
          Job Seeker
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Getting hired just got easy. Land your dream job<br></br><br></br>
          <Link href="Login" underline="hover">
          Get Started

          </Link>
        </Typography>
      </CardContent>
    </CardActionArea>
    
  </Card>
  </Box>
  </>
  );
}
