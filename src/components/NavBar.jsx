import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import { Box } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { ThemeProvider } from '@emotion/react'
import YellowButton from './YellowButton'


const drawerWidth = 240;
const navItems = ['About', 'Services', 'Insurance', 'Locations'];

// const theme = createTheme({
//   typography: {
//     button: {
//       fontFamily: 'outfit',
//       fontSize: 18,
//       textTransform: 'none'
//     }
//   }
// })

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Mobile View of Navigation Menu
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ bgcolor: '#4BC6B9', color: '#4E5283', textAlign: 'center' }}>
      <Link to="/">
        <Typography variant="h6" sx={{ my: 2, fontFamily: 'outfit', fontSize: 18 }}>
          Denist Site
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', fontFamily: 'outfit', fontSize: 18, textTransform: 'none' }}>
              <Link to={item}>
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  
  return (
    // This Box is responsible for the text that is displayed on screen
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      {/* This is the navbar box */}
      <AppBar component="nav" sx={{ bgcolor: '#4BC6B9' }} elevation={10}>
        <Toolbar sx={{ bgcolor: '#4BC6B9', justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Link to="/">
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: '#4E5283', fontFamily: 'outfit' }}
              >
                Denist Site
              </Typography>
            </Link>
          </Box>
              

          {/* This box is responsible for the nav bar items */}
          <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: 1 }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#4E5283', fontFamily: 'outfit', fontSize: 18, textTransform: 'none' }}>
                <Link to={item}>
                  {item}
                </Link> 
                {/* {item} */}
              </Button>
            ))}
            {/* Book Now Button */}
              
            <YellowButton>Book Now</YellowButton>
            
          </Box>
          
          

        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>


      {/* This displays a box of text */}
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          
        </Typography>
      </Box> */}
    </Box>
  );
}

// NavBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default NavBar;
