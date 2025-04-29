import { Box, Container, Grid, Typography, Stack } from '@mui/material' // Added Container, Stack
// Import specific icons
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';



import React from 'react'

// Removed duplicate React import

const features = [
  { icon: EventAvailableIcon, title: 'Consultation', desc: 'Need help selecting our services? Schedule an in-depth consultation.', color: '#4E5283' },
  { icon: FactCheckIcon, title: 'Transparent', desc: 'Trust us to provide you with fast and transparent service for reliable quotes.', color: '#4BC6B9' },
  { icon: MedicalServicesIcon, title: 'Modern Facilities', desc: 'Modern facilities that use state-of-the-art technology deliver services to smile about.', color: '#FFC247' },
  { icon: FamilyRestroomIcon, title: 'Family Dentistry', desc: 'Welcome to our family dentistry practice, where smiles of all ages are welcome.', color: '#4E5283' },
];

function ServiceBanner1() {
  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 6, md: 10 }, // Responsive vertical padding
        bgcolor: '#D6E7EB', // Keep background color
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ textAlign: 'center' }}> {/* Adjusted spacing */}
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Grid item xs={12} sm={6} lg={3} key={index}> {/* Use sm for 2 columns */}
                <Stack spacing={2} alignItems="center">
                  <IconComponent sx={{ fontSize: 64, color: feature.color }} /> {/* Use specific icon and color */}
                  <Typography variant="h5" sx={{ color: '#4E5283' }}> {/* Adjusted variant */}
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555' }}> {/* Adjusted text color */}
                    {feature.desc}
                  </Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default ServiceBanner1
