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
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";


export default function TitlePanel() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState();
  const Navigate=useNavigate();

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

<Box sx={{ flexGrow: 1 }}>
<AppBar
  position="static"
  sx={{ backgroundColor: "#858320" }}
  enableColorOnDark
>
  <Toolbar>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
    <ScreenSearchDesktopIcon color="inherit" sx={{ fontSize: 40 }} />
    <Typography variant="h4" sx={{ flexGrow: 1 }} component="p">
      HAVI Job Matchers
    </Typography>
    {auth && (
      <div>
        <Tooltip title="Home">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={()=>Navigate('/')}
            color="inherit"
            sx={{ ml: 100 }}
          >
            <HomeIcon />
          </IconButton>
        </Tooltip>
        
      </div>
    )}
  </Toolbar>
</AppBar>
</Box>
  )}