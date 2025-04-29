import { Box, Typography, Container, Grid, Stack } from '@mui/material'; // Removed Card imports
import { frontLandessPhoto } from '../assets'; // Import frontLandessPhoto instead of mottoImage
import React from 'react'

// Removed unused HeroTheme and Card/CardMedia/CardContent imports

function MissionStatement() {
  return (
    // Changed background, adjusted padding
    <Box sx={{ bgcolor: '#D6E7EB', width: '100%', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Removed Centered Title */}
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Text Column */}
          <Grid item xs={12} md={6}> {/* Adjusted grid size */}
            <Stack spacing={3}>
              {/* Added Title back */}
              <Typography variant='h2' sx={{ color: '#4E5283' }}>
                Our Guaranteed Promise
              </Typography>
              {/* Changed quote variant back to h4 */}
              <Typography variant='h4' sx={{ color: '#555' }}>
                We're a dentistry that puts your family first. You can count on us to deliver the best care for your family!
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', fontStyle: 'italic' }}> {/* Adjusted variant and color */}
                "Creating healthier, happier smiles with compassionate care."
              </Typography>
            </Stack>
          </Grid>

          {/* Image and Text Column */}
          <Grid item xs={12} md={6}> {/* Adjusted grid size */}
            {/* Removed Card wrapper */}
            <Stack spacing={3} alignItems="center"> {/* Center items in stack */}
              <Box
                component="img"
                src={frontLandessPhoto} // Use frontLandessPhoto
                alt={`Front view of the Landess dental office location`} // Updated alt text
                sx={{
                  display: 'block',
                  width: '100%',
                  maxWidth: '500px', // Limit image max width
                  height: 'auto',
                  borderRadius: '8px', // More rounding
                  boxShadow: 3 // Add shadow directly to image
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default MissionStatement
