import React from 'react';
import { Box, Container, Paper, Typography, Grid } from '@mui/material';
// Import specific service images
import {
  cleaningPhoto,
  whiteningPhoto,
  fillingPhoto,
  extractionPhoto,
  rootCanalPhoto,
  invisalignPhoto,
  invisalignBadge // Keep badge import
} from '../assets';

// Updated service data with specific images
const servicesData = [
  {
    img: cleaningPhoto,
    alt: 'Dental Cleanings',
    title: 'Dental Cleanings',
    description: 'Professional dental cleanings are essential. Our skilled hygienists provide thorough cleanings, removing plaque, tartar, and bacteria buildup for healthier teeth and gums.'
  },
  {
    img: whiteningPhoto,
    alt: 'Teeth Whitening',
    title: 'Teeth Whitening',
    description: 'Brighten your smile with our professional teeth whitening services. Safe, effective, and tailored to give you noticeable results.'
  },
  {
    img: fillingPhoto, // Placeholder image
    alt: 'Fillings',
    title: 'Fillings',
    description: 'Restore teeth affected by decay with durable fillings. We offer tooth-colored options for a natural look.'
  },
  {
    img: extractionPhoto, // Placeholder image
    alt: 'Extractions',
    title: 'Extractions',
    description: 'Gentle and efficient tooth extractions when necessary to preserve your overall oral health.'
  },
  {
    img: rootCanalPhoto, // Placeholder image
    alt: 'Root Canals',
    title: 'Root Canals',
    description: 'Save infected teeth with root canal therapy, relieving pain and preventing further damage.'
  },
  {
    img: invisalignPhoto,
    alt: 'Invisalign',
    title: 'Invisalign',
    description: 'Straighten your teeth discreetly with clear Invisalign aligners. A modern alternative to traditional braces.'
  },
  // Add more services as needed
];

function ServicesList() {
  return (
    // Use Container for consistent padding and max-width
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      {/* Removed sx fontSize override */}
      <Typography variant="h2" align="center" sx={{ mb: 6, color: '#4E5283' }}>
        Our Dental Services
      </Typography>
      {/* Use Grid instead of Masonry */}
      <Grid container spacing={3}> {/* Responsive spacing */}
        {servicesData.map((service, index) => (
          // Grid items for responsive columns
          <Grid item xs={12} sm={6} md={4} key={index}>
            {/* Add transition and hover effect to Paper sx prop */}
            <Paper
              elevation={3}
              sx={{
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Add transition
                '&:hover': {
                  transform: 'translateY(-5px)', // Lift effect
                  boxShadow: 6 // Increased shadow (adjust value if needed, 6 or 8 are common)
                }
              }}
            >
              <Box
                component="img"
                src={service.img}
                alt={service.alt}
                sx={{
                  width: '100%',
                  height: 200, // Maintain fixed height for images
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <Box sx={{ p: 2, flexGrow: 1 }}> {/* Padding for text content, allow text box to grow */}
                <Typography variant="h5" component="h3" sx={{ color: '#4E5283', mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                  {service.description}
                </Typography>
                {/* Conditionally add Invisalign badge */}
                {service.title === 'Invisalign' && (
                  <Box sx={{ mt: 2, textAlign: 'center' }}> {/* Center the badge */}
                    <img
                      src={invisalignBadge}
                      alt="Invisalign Platinum Provider 2023"
                      style={{ maxWidth: '100px', height: 'auto' }} // Adjust size as needed
                    />
                  </Box>
                )}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ServicesList;
