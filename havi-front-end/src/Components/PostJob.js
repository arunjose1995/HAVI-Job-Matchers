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
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TitlePanel from "./TitlePanel";
import { FormControl } from "@mui/material";
import { HaviContext } from "../Context/HAVIContext";
const theme = createTheme();

export default function PostJob() {

  const [companyName,setCompanyName]=useState("");
  const [contactPerson,setContactPerson]=useState("");
  const [contactNumber,setContactNumber]=useState("");
  const [mail,setMail]=useState("");
  const [jobLocation,setJobLocation]=useState("");
  const [area,setArea]=useState("");
  const [posted,setPosted]=useState("");
  const [lastDate,setLastDate]=useState("");
  const [vacancy,setVacancy]=useState("");
  const [jobRole,setJobRole]=useState("");
 
  const [skill,setSkill]=useState("");

  let selInterest=[];
  const {regName}=useContext(HaviContext);
  console.log("reg Name="+regName);
  const baseURL="http://localhost:3001/details";

  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
   
  ]);
  
useEffect(()=>{
  if(dateState.startDate){
  let Date1 = dateState[0].startDate.toLocaleDateString();
  let Date2 = dateState[0].endDate.toLocaleDateString();
  console.log("Date1="+Date1);
  console.log("Date2="+Date2);
setPosted(Date1);
setLastDate(Date2);
  }
},[dateState]);

 


  const handleCompany = (event) => {
    setCompanyName(event.target.value);
  }
  const handleCPerson = (event) => {
    setContactPerson(event.target.value);
  }
  const handleCNumber = (event) => {
    setContactNumber(event.target.value);
  }
  const handleMail = (event) => {
    setMail(event.target.value);
  }
  const handleLocation = (event) => {
    setJobLocation(event.target.value);
  }
  const handleArea = (event) => {
    setArea(event.target.value);
  }  
  const handleVacancy = (event) => {
    setVacancy(event.target.value);
  }
  const handleJobRole = (event) => {
    setJobRole(event.target.value);
  }
  

  const { Java, DotNet, ReactJS, NodeJS, Python } = skill;

  const handleSkill = (event) => {
    if(event.target.checked===true){
      selInterest=[...skill];
      selInterest.push(event.target.name);
    setSkill(selInterest);
    }
   
  };

 
  const postJob = (event) => {
    event.preventDefault();
   
    const jobObj={
      UserName:regName,
      CompanyName:companyName,
      ContactPerson:contactPerson,
      contactNumber: contactNumber,
      MailId:mail,
      JobLocation:jobLocation,
      AreaOfWork:area,
      PostedOn:posted,
      LastDate:lastDate,
      Vacancy:vacancy,
    JobRole:jobRole,
   
    ProfessionalSkills:skill
    }
    console.log("Post Job="+JSON.stringify(jobObj));
  
    axios.post(baseURL, jobObj)
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
            Post Job
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={postJob}
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
        Company Details:
          </Typography>    
          </div>

</Grid>
              <Grid item xs={12}>
              <TextField
                 
                 name="cName"
                 label="Company Name"
                 id="cName"
             style={{ width: "350px" }}
               value={companyName || "" }
               onChange={handleCompany}
                
               />
              </Grid>

              <Grid item xs={12}>
              <TextField
                 
                 name="cPerson"
                 label="Contact Person"
                 id="cPerson"
             style={{ width: "350px" }}
               value={contactPerson || "" }
               onChange={handleCPerson}
                
               />
              </Grid>

              <Grid item xs={12}>
              <TextField
                 
                 name="cNumber"
                 label="Contact Number"
                 id="cNumber"
             style={{ width: "350px" }}
               value={contactNumber || "" }
               onChange={handleCNumber}
                
               />
              </Grid>
              <Grid item xs={12}>
              <TextField
                 
                 name="mailId"
                 label="Mail Id"
                 id="mail"
             style={{ width: "350px" }}
               value={mail || "" }
               onChange={handleMail}
                
               />
              </Grid>

              <Grid item xs={12}>
              <FormControl style={{width:"350px"}}>
<InputLabel id="demo-select-small">Job Location</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={jobLocation}
        label="Job Location"
        onChange={handleLocation}
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
              <div style={{display:'flex',justifyContent:'flex-start'}}>

              <Typography component="div" variant="p" style={{marginLeft:'80px'}}>
        Job Details:
          </Typography>    
          </div>

</Grid>

            
              <Grid item xs={12}>
              <FormControl style={{width:"350px"}}>
<InputLabel id="demo-select-small">Area of Work</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={area}
        label="Area of Work"
        onChange={handleArea}
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
<InputLabel id="demo-select-small">Posted On & Last Date to Apply</InputLabel>

              <FormControl style={{width:"350px"}}>
              <DateRange
              onChange={(item) => setDateState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dateState}
            />
</FormControl>
              </Grid>
              <Grid item xs={12}>
              <FormControl style={{width:"350px"}}>
<InputLabel id="demo-select-small">No. of Vacancies</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={vacancy}
        label="No. of Vacancies"
        onChange={handleVacancy}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Fresher"}>Fresher</MenuItem>
        
        <MenuItem value={"1-5"}>1-5</MenuItem>
        <MenuItem value={"6-10"}>6-10</MenuItem>
        <MenuItem value={"20"}>20</MenuItem>
        

      </Select>
      </FormControl>
</Grid>
              <Grid item xs={12}>
              <TextField
                 
                 name="JobRole"
                 label="Job Role"
                 id="jobRole"
             style={{ width: "350px" }}
               value={jobRole || "" }
               onChange={handleJobRole}
                
               />
              </Grid>
              
              <Grid item xs={12}>
              <InputLabel id="demo-select-small" style={{marginLeft:"-110px"}}>Tech Stack</InputLabel>

<FormControl style={{width:"350px"}}>
<FormGroup>
<FormControlLabel
control={
  <Checkbox checked={Java} onChange={handleSkill} name="Java" />
}
label="Java"
/>
 <FormControlLabel
control={
  <Checkbox checked={DotNet} onChange={handleSkill} name="DotNet" />
}
label="DotNet"
/>
<FormControlLabel
control={
  <Checkbox  checked={ReactJS} onChange={handleSkill} name="ReactJS" />
}
label="ReactJS"
/>
<FormControlLabel
control={
  <Checkbox checked={NodeJS} onChange={handleSkill} name="NodeJS" />
}
label="NodeJS"
/>
<FormControlLabel
control={
  <Checkbox checked={Python} onChange={handleSkill} name="Python" />
}
label="Python"
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
              Post Job
            </Button>
            
          </Box>
          </Card>
        </Box>
      </Container>  
    </>
  );
}