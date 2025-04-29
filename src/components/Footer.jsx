import * as React from 'react';
import { Box, Stack, Typography, Grid, Link, Container, Divider } from '@mui/material'; // Added Container, Divider
// Import Icons & Logo
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ListIcon from '@mui/icons-material/List';
import { siteLogoCircleWhite } from '../assets'; // Import circle logo

function Copyright() {
  return (
    // Set color directly for better contrast on dark background
    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }} mt={1}>
      {'Copyright © '}
      Jane Zarate.All RIghts Reserved&nbsp;
      {new Date().getFullYear()}
    </Typography>
  )
}

function Footer() {
  // Define common text color for the main footer section
  const textColor = 'rgba(255, 255, 255, 0.9)';

  return (
    // Removed outer Box pt: 6, handled by section padding
    <Box component="footer">
      {/* Main Footer Section - Vertical Stack */}
      <Box sx={{ bgcolor: '#4BC6B9', color: textColor, py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          {/* Use Stack for vertical layout */}
          <Stack spacing={4} alignItems="center">

            {/* Office Locations Section (Side-by-Side) */}
            {/* Adjusted justifyContent and maxWidth */}
            <Box sx={{ width: '100%', maxWidth: '900px' }}>
              <Grid container spacing={3} justifyContent="space-evenly"> {/* Use space-evenly for balanced spacing */}
                {/* Milpitas Office */}
                {/* Corrected textAlign in SEARCH, added whiteSpace */}
                <Grid item xs={12} sm={5} md={4} sx={{ textAlign: { xs: 'center', sm: 'left' } }}> {/* Keep sm: 'left' for larger screens */}
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Milpitas Office</Typography>
                  {/* Single Line Address with noWrap */}
                  <Typography variant="body1" sx={{ mb: 1, whiteSpace: 'nowrap' }}>1763 Landess Avenue, Milpitas, CA 95035</Typography>
                  {/* Phone numbers side-by-side */}
                  <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'center', sm: 'flex-start'} }}>
                    <Typography variant="body1">(408) 719-8295</Typography>
                    <Typography variant="body1">(408) 650-6969</Typography>
                  </Stack>
                </Grid>
                {/* Santa Clara Office */}
                 {/* Corrected textAlign in SEARCH, added whiteSpace */}
                <Grid item xs={12} sm={5} md={4} sx={{ textAlign: { xs: 'center', sm: 'left' } }}> {/* Keep sm: 'left' for larger screens */}
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Santa Clara Office</Typography>
                  {/* Single Line Address with noWrap */}
                  <Typography variant="body1" sx={{ mb: 1, whiteSpace: 'nowrap' }}>4767 Lafayette Street, Santa Clara, CA 95054</Typography>
                  {/* Phone numbers side-by-side */}
                  <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'center', sm: 'flex-start'} }}>
                    <Typography variant="body1">(408) 727-0722</Typography>
                    <Typography variant="body1">(408) 505-2325</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>

            {/* Divider between sections */}
            <Divider sx={{ width: '80%', borderColor: 'rgba(255, 255, 255, 0.2)', my: 2 }} />

            {/* Menu Section (Vertical Links, No Header) */}
            <Stack direction="row" spacing={{ xs: 2, sm: 4 }} justifyContent="center" flexWrap="wrap">
              <Link href="/about" color="inherit" underline="hover" sx={{ '&:hover': { color: '#FFFFFF' } }}>
                <Typography variant="body1">About Us</Typography>
              </Link>
              <Link href="/services" color="inherit" underline="hover" sx={{ '&:hover': { color: '#FFFFFF' } }}>
                <Typography variant="body1">Services</Typography>
              </Link>
              <Link href="/insurance" color="inherit" underline="hover" sx={{ '&:hover': { color: '#FFFFFF' } }}>
                <Typography variant="body1">Insurance</Typography>
              </Link>
              <Link href="/locations" color="inherit" underline="hover" sx={{ '&:hover': { color: '#FFFFFF' } }}>
                <Typography variant="body1">Locations</Typography>
              </Link>
            </Stack>

          </Stack>
        </Container>
      </Box>

      {/* Copyright Bar */}
      <Box sx={{ bgcolor: '#319B90', py: 1 }}> {/* Reduced padding slightly */}
        {/* Adjust container to space content between */}
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Copyright />
          {/* Add Circle Logo */}
          <Box
            component="img"
            src={siteLogoCircleWhite}
            alt="EDental Logo Circle"
            sx={{
              height: '35px', // Adjust size as needed
              width: 'auto'
            }}
          />
        </Container>
      </Box>
    </Box>
  )
}

export default Footer;
