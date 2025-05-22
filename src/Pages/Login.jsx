import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Paper,
  Link,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Footer from "../Componants/Footer";
import Header from "../Componants/Header";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <Header/>
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor:'rgb(241, 245, 248)',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, maxWidth: 400, width: "100%" }}>
        <Box textAlign="center" mb={2}>
          <img
            src="https://elearnkpsc.com/assets/eLearn%20KPSC%20LOGO-ZUiNqm5W.png"
            alt="Logo"
            style={{ height: 60, marginBottom: 10 }}
          />
          <Typography variant="h5" fontWeight="bold" color="primary">
            Hi, Welcome Back
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Enter your credentials to continue
          </Typography>
        </Box>

        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
          Sign in with <span style={{ fontWeight: 600 }}>Mobile Number</span>
        </Typography>

        <TextField
          fullWidth
          label="Mobile Number"
          variant="outlined"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Box display="flex" justifyContent="space-between" alignItems="center" my={1}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
          <Link href="#" variant="body2" underline="hover">
            Forgot Password?
          </Link>
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#6C3FCF",
            mt: 2,
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#5b34b3",
            },
          }}
        >
          Sign In
        </Button>

        <Box textAlign="center" mt={3}>
          <Typography variant="body2">
            Don’t have an account?{" "}
            <Link href="/register" underline="hover">
              Register
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
    <Footer />
    </>
  );
};

export default Login;

