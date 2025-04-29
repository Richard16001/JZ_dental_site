import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import YellowButton from './YellowButton';
import { siteLogo } from '../assets'; // Import the logo

const drawerWidth = 240;
// Define nav items with paths (lowercase for consistency, matching potential route structure)
const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Insurance', path: '/insurance' },
  { label: 'Locations', path: '/locations' },
];

function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Active link style
  const activeStyle = {
    textDecoration: 'underline',
    textDecorationThickness: '2px',
    textUnderlineOffset: '4px',
    color: '#FFFFFF', // Ensure active link is white
    // fontWeight: 'bold', // Optional: make active link bold
  };

  // Common style for NavLink buttons (desktop)
  const navButtonStyle = {
    fontFamily: 'outfit',
    fontSize: 18,
    textTransform: 'none',
    color: '#FFFFFF', // White text
    mx: 1, // Add some horizontal margin between buttons
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // Subtle hover background
    },
  };

  // Mobile View of Navigation Menu
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ bgcolor: '#4BC6B9', color: '#FFFFFF', textAlign: 'center', height: '100%' }}>
      <Typography
        variant="h6"
        component={Link} // Use Link component for non-active styling
        to="/" // Link to home
        sx={{ my: 2, fontFamily: 'outfit', fontSize: 18, color: '#FFFFFF', textDecoration: 'none' }}
      >
        Dentist Site {/* Corrected typo */}
      </Typography>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} /> {/* Lighter divider */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            {/* Use NavLink for active styling */}
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{ textAlign: 'center' }}
              style={({ isActive }) => isActive ? activeStyle : { color: '#FFFFFF' }} // Apply active style or default white
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontFamily: 'outfit', fontSize: 18, textTransform: 'none' }} // Inherit color or use active style
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', mb: { xs: 7, sm: 8 } }}> {/* Add margin bottom to prevent overlap with content */}
      <AppBar component="nav" sx={{ bgcolor: '#4BC6B9' }} elevation={4}> {/* Reduced elevation slightly */}
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit" // Inherits white color from AppBar
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Group Logo and Nav Items */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}> {/* Use flexGrow to push Book Now button right */}
            {/* Logo with White Background Pad */}
            <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', mr: { sm: 2 } }}> {/* Removed flexGrow from here */}
              {/* White Rectangular Background with Rounded Corners */}
              <Box sx={{
                bgcolor: '#FFFFFF',
              borderRadius: '8px', // Changed from '50%' to create rounded corners
              p: '8px', // Keep padding
              display: 'flex', // Needed to center the image inside
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: 0 // Prevents extra space below image
            }}>
              <Box
                component="img"
                src={siteLogo}
                alt="EDental Logo"
                sx={{
                  height: '35px', // Adjust logo size to fit padding
                  width: 'auto',
                  display: 'block'
                }}
              />
            </Box>
            {/* Optional: Keep text next to logo if desired */}
            {/* <Typography variant="h6" sx={{ color: '#FFFFFF', fontFamily: 'outfit', ml: 1 }}>
                Dentist Site
              </Typography> */}
            </Box>

            {/* Desktop Navigation Items */}
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button
                key={item.label}
                component={NavLink} // Use NavLink here too
                to={item.path}
                style={({ isActive }) => isActive ? { ...navButtonStyle, ...activeStyle } : navButtonStyle} // Combine base and active styles
              >
                {item.label}
                </Button>
              ))}
            </Box>
          </Box> {/* End Group Logo and Nav Items */}


          {/* Book Now Button (appears on right for desktop) */}
          <Box sx={{ display: { xs: 'none', sm: 'block' }, flexShrink: 0 }}> {/* Added flexShrink: 0 */}
            <YellowButton component={Link} to="/locations" sx={{ ml: 1 }}>Book Now</YellowButton> {/* Add component={Link} and to="/locations" */}
          </Box>

        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: '#4BC6B9' }, // Ensure drawer background
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* Add Toolbar component to offset content below fixed AppBar */}
      {/* <Toolbar /> */} {/* Removed - added margin bottom to parent Box instead */}
    </Box>
  );
}

export default NavBar;
