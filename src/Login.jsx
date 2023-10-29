import React, { useState } from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from 'axios';

// function

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Make an API request to your login endpoint with username and password
    axios
      .post('http://localhost:3000/login', { username: username, password: password })
      .then((response) => {
        console.log("success");
        if (response.status === 200 && response.data.token) {
          // Check the user type in the response, e.g., response.data.userType
          const userType = response.data.userType;

          // Store the authentication token in localStorage
          localStorage.setItem('token', response.data.token);
          localStorage.setItem("isLoggedin", true);
          localStorage.setItem("userType", userType);

          // Redirect to the appropriate dashboard based on user type
          if (userType === 'user') {
            // Redirect to the user dashboard
            window.location.href = '/rawlogs'; // Replace with your user dashboard URL
          } else if (userType === 'admin') {
            // Redirect to the admin dashboard
            window.location.href = '/user'; // Replace with your admin dashboard URL
          }
        } else {
          // Handle login failure (e.g., show an error message)
          console.error('Login failed');
        }
      })
      .catch((error) => {
        // Handle network error or other errors
        console.error(error);
      });
  };
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundImage: "url(./assets/17361.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                label="Username"
                name="name"
                autoFocus
              />
              <TextField
                margin="normal"
                
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleLogin}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}