import React from 'react';
import {
  Container, Box, TextField, Typography, MenuItem, Button,
  Select, InputLabel, FormControl
} from '@mui/material';
import Footer from '../Componants/Footer';
import Header from '../Componants/Header';

const Register = () => {
  return (
    <>
    <Header/>
     <Container maxWidth="sm">
      <Box 
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          p: 4,
          mt: 5,
          backgroundColor: 'rgb(237, 246, 247)',
        }}
      >
        <Box display="flex" justifyContent="center" mb={2}>
          <img src="https://elearnkpsc.com/assets/eLearn%20KPSC%20LOGO-ZUiNqm5W.png" alt="Logo" style={{ height: 60 }} />
        </Box>

        <Typography variant="h5" align="center" gutterBottom color="primary">
          Sign up
        </Typography>
        <Typography variant="body2" align="center" gutterBottom>
          Enter your credentials to continue
        </Typography>

        <TextField fullWidth margin="normal" label="Full Name" />
        <TextField fullWidth margin="normal" label="Age" type="number" />

        <FormControl fullWidth margin="normal">
          <InputLabel>Gender</InputLabel>
          <Select label="Gender">
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>

        <TextField fullWidth margin="normal" label="Email ID" type="email" />
        <TextField fullWidth margin="normal" label="Mobile Number" type="tel" />

        <FormControl fullWidth margin="normal">
          <InputLabel>Education</InputLabel>
          <Select label="Education">
            <MenuItem value="High School">High School</MenuItem>
            <MenuItem value="Bachelor's">Bachelor's</MenuItem>
            <MenuItem value="Master's">Master's</MenuItem>
          </Select>
        </FormControl>

        <TextField fullWidth margin="normal" label="College" />
        <TextField fullWidth margin="normal" label="University" />

        <FormControl fullWidth margin="normal">
          <InputLabel>Job Choice</InputLabel>
          <Select label="Job Choice">
            <MenuItem value="Developer">Developer</MenuItem>
            <MenuItem value="Designer">Designer</MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
          </Select>
        </FormControl>

        <TextField fullWidth margin="normal" label="Postal Address" />

        <FormControl fullWidth margin="normal">
          <InputLabel>Student or Working</InputLabel>
          <Select label="Student or Working">
            <MenuItem value="Student">Student</MenuItem>
            <MenuItem value="Working">Working</MenuItem>
          </Select>
        </FormControl>

        <TextField fullWidth margin="normal" label="Set Password" type="password" />
        <TextField fullWidth margin="normal" label="Confirm Password" type="password" />

        <Button fullWidth variant="contained" sx={{ mt: 2 }}>
          Register
        </Button>

        <Typography align="center" variant="body2" sx={{ mt: 2 }}>
          Already have an account?
        </Typography>
      </Box>
    </Container>
    
<Footer/>
    </>
   
  );
};

export default Register;

 