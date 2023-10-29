import React from 'react'
import { NavLink } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Box, Button, FormControlLabel, FormGroup, Toolbar, Typography, MenuItem, Menu, IconButton } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';



export const Navbar = () => {
    const currentPath = window.location.pathname;
    if (currentPath === '/login' || currentPath === '/') {
        return null;
    }

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const theme = createTheme({
        palette: {
            primary: {
                light: '#757ce8',
                main: '#3f50b5',
                dark: '#002884',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            },
        },
    });



    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // Clear user data and authentication status from localStorage
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('token');
        localStorage.removeItem('userType');
        // Perform any additional logout actions here, such as redirecting to the login page
        window.location.href = '/login';
    };
    const user_type = localStorage.getItem('userType')

    if (user_type === "user"){

        return (
            <ThemeProvider theme={theme}>
                <Box sx={{ flexGrow: 1, paddingBottom: 10 }}>
                    <AppBar>
                        <Toolbar>
                            <Box component="div" sx={{ flexGrow: 1 }}>
                                <Button component={NavLink}
                                    to="/rawlogs" sx={{ color: "#ffffff" }}>RawLogs</Button>
                                <Button component={NavLink}
                                    to="/activity" sx={{ color: "#ffffff" }}>Activity</Button>
                                <Button component={NavLink}
                                    to="/ml" sx={{ color: "#ffffff" }}>ML</Button>
                                <Button component={NavLink}
                                    to="/attacking" sx={{ color: "#ffffff" }}>Attacking</Button>
                            </Box>
    
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
    
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
    
                        </Toolbar>
                    </AppBar>
                </Box>
            </ThemeProvider>
        )
    }
    else if (user_type === "admin")
    {
        return(
            <ThemeProvider theme={theme}>
                <Box sx={{ flexGrow: 1, paddingBottom: 10 }}>
                    <AppBar>
                        <Toolbar>
                            <Box component="div" sx={{ flexGrow: 1 }}>
                                <Button component={NavLink}
                                    to="/user" sx={{ color: "#ffffff" }}>User</Button>
                                <Button component={NavLink}
                                    to="/file" sx={{ color: "#ffffff" }}>File</Button>
                            </Box>
    
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
    
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
    
                        </Toolbar>
                    </AppBar>
                </Box>
            </ThemeProvider>
        )
    }
}
