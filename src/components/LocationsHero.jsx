import React from 'react';
import { Box, Container, Typography } from '@mui/material';

// Reusable Hero component based on Locations page hero
function LocationsHero({ title, subtitle }) {
  return (
    <Box sx={{ bgcolor: '#D6E7EB', py: 8, textAlign: 'center' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" sx={{ color: '#4E5283', mb: 2 }}>
          {title} {/* Use prop for title */}
        </Typography>
        <Typography variant="h5" sx={{ color: '#555' }}>
          {subtitle} {/* Use prop for subtitle */}
        </Typography>
      </Container>
    </Box>
  );
}

export default LocationsHero;
