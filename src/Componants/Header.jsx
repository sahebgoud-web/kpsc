import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/aboutus' },
    { label: 'KPSC', path: '/kpsc' },
    { label: 'Study Material', path: '/studymaterial' },
    { label: 'Contact Us', path: '/contactus' },
  ];

  const drawer = (
    <Box width={250} role="presentation" onClick={() => setDrawerOpen(false)} p={2}>
      <img
        src="https://elearnkpsc.com/assets/eLearn%20KPSC%20LOGO-ZUiNqm5W.png"
        alt="Logo"
        style={{ height: 50, marginBottom: 16 }}
        loading="lazy"
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.label} component={Link} to={item.path}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <Divider sx={{ my: 1 }} />
        <ListItem>
          <Button
            component={Link}
            to="/login"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#e66910',
              borderRadius: '50px',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#cf5e0f' },
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Login
          </Button>
        </ListItem>
        <ListItem>
          <Button
            component={Link}
            to="/register"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#203b4c',
              borderRadius: '50px',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#182f3e' },
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Register
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: '#fff', paddingY: 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo on the left */}
        <Box display="flex" alignItems="center">
          <img
            src="https://elearnkpsc.com/assets/eLearn%20KPSC%20LOGO-ZUiNqm5W.png"
            alt="Logo"
            style={{ height: 50 }}
            loading="lazy"
          />
        </Box>

        {/* Spacer to push content right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop Navigation and Buttons */}
        {!isMobile && (
          <Box display="flex" alignItems="center" gap={4}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  fontWeight: 600,
                  color: location.pathname === item.path ? '#e66910' : '#000',
                  textTransform: 'none',
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              component={Link}
              to="/login"
              variant="contained"
              sx={{
                backgroundColor: '#e66910',
                borderRadius: '50px',
                paddingX: 3,
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#cf5e0f' },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              sx={{
                backgroundColor: '#203b4c',
                borderRadius: '50px',
                paddingX: 3,
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#182f3e' },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Register
            </Button>
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <>
            <IconButton
              edge="end"
              onClick={() => setDrawerOpen(true)}
              sx={{ color: '#000' }}
              aria-label="open navigation drawer"
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              {drawer}
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;




