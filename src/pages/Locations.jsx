import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Divider } from '@mui/material';
import { Footer, LocationsHero } from '../components'; // Import LocationsHero, assuming Footer is exported from components/index.js or directly
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// Temporary location data (similar to Footer)
const locationsData = [
  {
    name: 'Milpitas Office',
    addressLines: ['1763 Landess Avenue,', 'Milpitas, CA 95035'],
    phones: ['(408) 719-8295', '(408) 650-6969'],
    hours: [
      'Mon: 9:00 am - 6:00 pm',
      'Tue: 9:00 am - 6:00 pm',
      'Wed: 9:00 am - 6:00 pm',
      'Thu: Closed',
      'Fri: 9:00 am - 6:00 pm',
      'Sat: 9:00 am - 3:00 pm',
      'Sun: Closed',
    ],
  },
  {
    name: 'Santa Clara Office',
    addressLines: ['4767 Lafayette Street,', 'Santa Clara, CA 95054'],
    phones: ['(408) 727-0722', '(408) 505-2325'],
    hours: [ // Assuming same hours, adjust if different
      'Mon: 9:00 am - 6:00 pm',
      'Tue: 9:00 am - 6:00 pm',
      'Wed: 9:00 am - 6:00 pm',
      'Thu: Closed',
      'Fri: 9:00 am - 6:00 pm',
      'Sat: 9:00 am - 3:00 pm',
      'Sun: Closed',
    ],
  },
];

// Removed inline LocationsHero definition

function Locations() {
  // Define consistent vertical spacing value (can be same as Home or different)
  const contentSpacing = { pt: { xs: 5, md: 8 }, pb: { xs: 5, md: 8 } }; // Add padding top and bottom

  return (
    <Box>
      <LocationsHero title="Our Locations" subtitle="Find the Zarate Studios office nearest to you." /> {/* Use imported component with props */}
      {/* Add spacing below hero and around content */}
      <Box sx={contentSpacing}>
        {/* Add margin-bottom to Container for extra space before Footer */}
        <Container maxWidth="lg" sx={{ mb: { xs: 4, md: 6 } }}>
          <Grid container spacing={6} justifyContent="center">
            {locationsData.map((location, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h4" component="h2" sx={{ color: '#4E5283', mb: 3, display: 'flex', alignItems: 'center' }}>
                  <LocationOnIcon sx={{ mr: 1, fontSize: '2rem', color: '#4CAF50' }} /> {location.name} {/* Green Icon */}
                </Typography>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#4E5283', mb: 1 }}>Address</Typography>
                    {location.addressLines.map((line, i) => (
                      <Typography key={i} variant="body1">{line}</Typography>
                    ))}
                  </Box>
                  <Divider />
                  <Box>
                    <Typography variant="h6" sx={{ color: '#4E5283', mb: 1, display: 'flex', alignItems: 'center' }}>
                       <PhoneIcon sx={{ mr: 1, fontSize: '1.2rem' }}/> Phone
                    </Typography>
                    {location.phones.map((phone, i) => (
                      <Typography key={i} variant="body1">{phone}</Typography>
                    ))}
                  </Box>
                  <Divider />
                  <Box>
                     <Typography variant="h6" sx={{ color: '#4E5283', mb: 1, display: 'flex', alignItems: 'center' }}>
                       <AccessTimeIcon sx={{ mr: 1, fontSize: '1.2rem' }}/> Hours
                    </Typography>
                    {location.hours.map((hour, i) => (
                      <Typography key={i} variant="body1">{hour}</Typography>
                    ))}
                  </Box>
                  {/* Placeholder for Map */}
                  <Box sx={{ pt: 2 }}>
                     <Typography variant="body2" color="text.secondary">
                       (Map placeholder)
                     </Typography>
                   </Box>
                </Stack>
              </Paper>
            </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Locations;
