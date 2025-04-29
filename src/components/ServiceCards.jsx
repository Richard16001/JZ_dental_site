import { Box, Card, CardContent, Typography, Container, Grid, Stack } from '@mui/material' // Added Container, Stack
// Removed ThemeProvider, createTheme
import TealButton from './TealButton'


import { extractionPhoto, invisalignPhoto, cleaningPhoto, implantConsultPhoto } from '../assets'; // Import new photos, remove old ones
import React from 'react'

// Removed unused cardTheme

function ServiceCards() {
  const cardData = [
    { img: extractionPhoto, alt: 'Dental procedures illustration', title: 'Dental Procedures', desc: 'Check out our Cleanings, Exams, and X-rays.' }, // Use extractionPhoto
    { img: invisalignPhoto, alt: 'Itero scanner for cosmetic procedures', title: 'Cosmetic Procedures', desc: 'Check out our Teeth Whitening Services.' }, // Use itero/invisalignPhoto
    { img: cleaningPhoto, alt: 'Hygienist and assistant cleaning teeth', title: 'Surgical Procedures', desc: 'Check out our Extractions, Fillings, and Root Canals.' }, // Use cleaningPhoto
    { img: implantConsultPhoto, alt: 'Dr Jane showing implant model to patient', title: 'Orthodontic Procedures', desc: 'Check out our Invisalign services.' }, // Use implantConsultPhoto
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 6, md: 10 }, // Responsive vertical padding
        px: { xs: 2, md: 4 }, // Responsive horizontal padding
        bgcolor: '#D6E7EB' // Light background for the section
      }}
    >
      <Container maxWidth="lg">
        {/* Removed sx fontSize override */}
        <Typography variant="h2" align="center" sx={{ mb: 6, color: '#4E5283' }}>
          Our Services
        </Typography>
        <Grid container spacing={4}> {/* Adjusted spacing */}
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}> {/* Removed xl={4} to keep 4 cards per row */}
              {/* Reverted Card bgcolor to white */}
              <Card sx={{ bgcolor: '#FFFFFF', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}> {/* Consistent padding */}
                  <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center', flexGrow: 1 }}> {/* Center content */}
                    {/* Icon Wrapper - Apply horizontal padding */}
                    <Box sx={{
                      px: 2, // Apply horizontal padding to the wrapper
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2 // Margin below box
                    }}>
                      <Box
                        component="img"
                        src={card.img}
                        alt={card.alt}
                        sx={{
                          width: '300px', // Keep image size
                          height: '300px', // Keep image size
                          objectFit: 'contain',
                          // Removed px: 2 from image itself
                        }}
                      />
                    </Box>
                    <Typography variant="h5" sx={{ color: '#4E5283', mt: 1 }}> {/* Adjusted variant and margin top */}
                      {card.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666', minHeight: '60px' }}> {/* Removed border/height, added minHeight */}
                      {card.desc}
                    </Typography>
                  </Stack>
                  <Box sx={{ mt: 'auto', pt: 2, textAlign: 'center' }}> {/* Push button to bottom, center align */}
                    <TealButton>Learn More</TealButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default ServiceCards
