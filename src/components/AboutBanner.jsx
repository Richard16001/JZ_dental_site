import { Box, Container, Grid, Stack, Typography } from '@mui/material'; // Container was already imported but not used effectively
import React from 'react';

function AboutBanner() {
  return (
    // Removed outer Box wrapper
    <Box
      sx={{
        bgcolor: '#D6E7EB', // Keep background color
        color: '#4E5283',
        py: { xs: 4, md: 6 }, // Use responsive vertical padding
        width: '100%'
      }}
    >
      <Container maxWidth="lg"> {/* Use Container for centering and max-width */}
        {/* Adjusted Grid spacing */}
        <Grid container spacing={{ xs: 3, md: 6 }} alignItems="flex-start">
          {/* Column 1: Title and first paragraph */}
          <Grid item xs={12} md={6}> {/* Stack on xs, side-by-side md and up */}
            <Stack spacing={3}> {/* Adjusted spacing */}
              {/* Removed sx fontSize override */}
              <Typography variant="h2">
                About Us
              </Typography>
              {/* Changed variant to body1 */}
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                Welcome to our office, where our dedicated team is committed to providing you with exceptional dental care and personalized attention. At our office, we understand the importance of a healthy and beautiful smile, and we strive to exceed your expectations at every visit. Our experienced dentists, skilled hygienists, and compassionate staff work together to create a welcoming and comfortable environment for patients of all ages.
              </Typography>
            </Stack>
          </Grid>
          {/* Column 2: Second paragraph */}
          <Grid item xs={12} md={6}> {/* Stack on xs, side-by-side md and up */}
            {/* Removed redundant Box wrapper */}
            {/* Changed variant to body1 */}
            <Typography variant="body1" sx={{ lineHeight: 1.7, pt: { xs: 0, md: 7 } }}> {/* Add padding top on md+ to align text better if title is present */}
              With our dental office staff guarantee, you can trust that you're in good hands every step of the way. From the moment you walk through our doors, we prioritize your comfort and well-being. Our friendly front desk receptionists are here to assist you with scheduling appointments, answering questions about insurance coverage, and ensuring a seamless check-in process. Throughout your appointment, our dedicated dental assistants and hygienists provide gentle and thorough care, using the latest technology and techniques to achieve optimal oral health. Experience the difference at our office, where your smile is our top priority.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutBanner;
