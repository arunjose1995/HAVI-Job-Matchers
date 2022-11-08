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

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TitlePanel from "./TitlePanel";
import { FormControl } from "@mui/material";
import { HaviContext } from "../Context/HAVIContext";
const theme = createTheme();

export default function Profile() {

  const [degree,setDegree]=useState("");
  const [subject,setSubject]=useState("");
  const [university,setUniversity]=useState("");
  const [year,setYear]=useState("");
  const [experience,setExperience]=useState("");
  const [company,setCompany]=useState("");
  const [ctc,setCtc]=useState("");
  const [interest,setInterest]=useState("");
  let selInterest=[];
  const {regName}=useContext(HaviContext);
  
  const baseURL="http://localhost:3001/postSeeker";

  const handleDegree = (event) => {
    setDegree(event.target.value);
  }
  const handleSubject = (event) => {
    setSubject(event.target.value);
  }
  const handleUniversity = (event) => {
    setUniversity(event.target.value);
  }
  const handleYear = (event) => {
    setYear(event.target.value);
  }
  const handleExperience = (event) => {
    setExperience(event.target.value);
  }
  const handleCompany = (event) => {
    setCompany(event.target.value);
  }
  const handleCtc = (event) => {
    setCtc(event.target.value);
  }

  const { IT, Teaching, Business, Design, Others } = interest;

  const handleInterest = (event) => {
    if(event.target.checked===true){
      selInterest=[...interest];
      selInterest.push(event.target.name);
    setInterest(selInterest);
    }
    if(event.target.checked===false){
      selInterest=[...interest];
      selInterest.slice(event.target.name);
    setInterest(selInterest);
    }
  };

 
  const registerSeeker = (event) => {
    event.preventDefault();
    const seekerObj={
      UserName:regName,
      Degree:degree,
      Subject:subject,
      University: university,
      YearOfPassing:year,
      Experience:experience,
      Company:company,
      CTC:ctc,
      FieldOfInterest:interest
    }
    console.log("SeekerReg="+JSON.stringify(seekerObj));
  
    axios.post(baseURL, seekerObj)
    .then(function (response) {
      console.log("Back="+JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
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
            Job Seeker Profile Details
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={registerSeeker}
            sx={{ mt: 3 }}
          >
            <Grid container rowSpacing={2}>
             
              <Grid item xs={12}>
                <TextField
                  
                  id="name"
                  label="Name"
                  name="name"
                  aria-readonly
              style={{ width: "350px" }}
                value={regName}
                />
              </Grid>
              <Grid item xs={12}>
              <div style={{display:'flex',justifyContent:'flex-start'}}>

              <Typography component="div" variant="p" style={{marginLeft:'80px'}}>
            Qualification Details:
          </Typography>    
          </div>

</Grid>
              <Grid item xs={12}>
              <FormControl style={{width:"350px"}}>
<InputLabel id="demo-select-small">Degree</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={degree}
        label="Degree"
        onChange={handleDegree}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        
        <MenuItem value={"BSc"}>BSc</MenuItem>
        <MenuItem value={"MSc"}>MSc</MenuItem>
        <MenuItem value={"BCA"}>BCA</MenuItem>
        <MenuItem value={"MCA"}>MCA</MenuItem>
        <MenuItem value={"BA"}>BA</MenuItem>
        <MenuItem value={"MA"}>MA</MenuItem>
        <MenuItem value={"Others"}>Others</MenuItem>
      

      </Select>
      </FormControl>
              </Grid>
              <Grid item xs={12}>
              <FormControl style={{width:"350px"}}>
<InputLabel id="demo-select-small">Subject</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={subject}
        label="Subject"
        onChange={handleSubject}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        
        <MenuItem value={"CS"}>Computer Science</MenuItem>
        <MenuItem value={"IT"}>Information Technology</MenuItem>
        <MenuItem value={"CA"}>Computer Application</MenuItem>
        <MenuItem value={"Maths"}>Mathematics</MenuItem>
        <MenuItem value={"Tamil"}>Tamil</MenuItem>
        <MenuItem value={"English"}>English</MenuItem>
          

      </Select>
      </FormControl>
              </Grid>
              <Grid item xs={12}>
              <FormControl style={{width:"350px"}}>
<InputLabel id="demo-select-small">University</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={university}
        label="University"
        onChange={handleUniversity}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        
        <MenuItem value={"Anna University"}>Anna University</MenuItem>
        <MenuItem value={"Bharathidasan University"}>Bharathidasan University</MenuItem>
        <MenuItem value={"Bharathiyar University"}>Bharathiyar University</MenuItem>
        <MenuItem value={"Prist University"}>Prist University</MenuItem>
        <MenuItem value={"Deemed University"}>Deemed University</MenuItem>
              </Select>
      </FormControl>
              </Grid>
              <Grid item xs={12}>
              <FormControl style={{width:"350px"}}>
<InputLabel id="demo-select-small">Year of Passing</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={year}
        label="Year"
        onChange={handleYear}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        
        <MenuItem value={"2018"}>2018</MenuItem>
        <MenuItem value={"2019"}>2019</MenuItem>
        <MenuItem value={"2020"}>2020</MenuItem>
        <MenuItem value={"2021"}>2021</MenuItem>
        <MenuItem value={"2022"}>2022</MenuItem>
             </Select>
      </FormControl>

              </Grid>
              <Grid item xs={12}>
              <div style={{display:'flex',justifyContent:'flex-start'}}>

              <Typography component="div" variant="p" style={{marginLeft:'80px'}}>
            Experience Details:
          </Typography>    
          </div>

</Grid>
              <Grid item xs={12}>
                <TextField
                 
                  name="eXperience"
                  label="Experience"
                  id="experience"
              style={{ width: "350px" }}
                value={experience || "" }
                onChange={handleExperience}
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 
                                   name="company"
                  label="Company"
                  id="company"
              style={{ width: "350px" }}
                value={company || "" }
                onChange={handleCompany}
                 
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                 
                 name="CTC"
label="CTC"
id="ctc"
style={{ width: "350px" }}
value={ctc || "" }
onChange={handleCtc}

/>
            </Grid>
            <Grid item xs={12}>
              
<InputLabel id="demo-select-small" style={{marginLeft:"-110px"}}>Field of Interest</InputLabel>

            <FormControl style={{width:"350px"}}>
            <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={Teaching} onChange={handleInterest} name="Teaching" />
            }
            label="Teaching"
          />
             <FormControlLabel
            control={
              <Checkbox checked={IT} onChange={handleInterest} name="IT" />
            }
            label="IT"
          />
           <FormControlLabel
            control={
              <Checkbox  checked={Business} onChange={handleInterest} name="Business" />
            }
            label="Business"
          />
 <FormControlLabel
            control={
              <Checkbox checked={Design} onChange={handleInterest} name="Design" />
            }
            label="Design"
          />
      <FormControlLabel
            control={
              <Checkbox checked={Others} onChange={handleInterest} name="Others" />
            }
            label="Others"
          />

      </FormGroup>
      </FormControl>
      </Grid>
            </Grid>
            <Button
              type="submit"
              maxwidth="sx{8}"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
            
          </Box>
          </Card>
        </Box>
      </Container>  
    </>
  );
}