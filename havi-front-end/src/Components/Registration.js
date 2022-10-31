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

import TitlePanel from "./TitlePanel";
const theme = createTheme();

export default function SignUp() {
  
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
            height: "500px",
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
            // onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container columnSpacing={5} rowSpacing={2} columns={12}>
              <Grid item xs={12}>
                <TextField
                  name="empId"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                  maxwidth="mx"
                  id="empId"
                  
                  label="Employee Id"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="joindate"
                  label="Joining Date"
                  name="joindate"
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="contact"
                  label="Contact Number"
                  
                  id="contact"
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="experience"
                  label="Experience"
                  id="experience"
                 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="mail"
                  type="email"
                  label="Mail Id"
                  id="mail"
                 
                />
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