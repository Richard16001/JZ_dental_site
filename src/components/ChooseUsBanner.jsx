import { Box, Container, Grid, Typography, Stack } from '@mui/material'; // Added Container
import React from 'react';
// Import Icons
import HighQualityIcon from '@mui/icons-material/HighQuality';
import SpeedIcon from '@mui/icons-material/Speed';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { textureTeal } from '../assets'; // Import texture

// Abstracted features data
const featuresData = [
  {
    icon: HighQualityIcon,
    title: 'High-Quality Care',
    description: 'You deserve high-quality care. At our practice, we prioritize excellence in every aspect of your treatment, from our skilled professionals to our state-of-the-art facilities. Your trust in us is paramount, and we are committed to providing the finest care to ensure your comfort, and satisfaction.'
  },
  {
    icon: SpeedIcon,
    title: 'Fast Service',
    description: 'Experience the best of both worlds with our fast and quality service. We strive to deliver efficient care without compromising on excellence. From prompt appointments to streamlined procedures, trust us to provide swift and top-notch service that exceeds your expectations.'
  },
  {
    icon: SentimentSatisfiedAltIcon,
    title: 'Inviting Atmosphere',
    description: 'Feel the warmth of our welcoming and friendly atmosphere. From the moment you arrive, our team is dedicated to making you feel like part of our dental family. With genuine smiles and personalized attention, we ensure that every visit is comfortable, enjoyable, and leaves you looking forward to your next appointment.'
  },
  {
    icon: VisibilityIcon,
    title: 'Transparency',
    description: 'Transparency is our commitment to you. We believe in open communication and honesty every step of the way, ensuring you are fully informed about your treatment options, costs, and expectations. With transparent policies and clear explanations, you can trust us to provide reliable information about your dental care.'
  }
];

function ChooseUsBanner() {
  const textColor = '#FFFFFF'; // White text for contrast

  return (
    <Box
      sx={{
        position: 'relative', // Needed for overlay
        // bgcolor: '#75C1C5', // Remove solid color
        backgroundImage: `url(${textureTeal})`, // Apply texture
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: textColor,
        py: { xs: 6, md: 8 },
        '&::before': { // Add overlay for readability
          content: '""',
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust darkness as needed
          zIndex: 1,
        }
      }}
    >
      {/* Add relative positioning and zIndex to Container */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Stack spacing={5} alignItems="center"> {/* Center stack items */}
          {/* Removed sx fontSize override */}
          <Typography variant='h2' sx={{ textAlign: 'center' }}>
            Why Choose Us?
          </Typography>
          <Grid container spacing={4}> {/* Adjusted spacing */}
            {featuresData.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Grid item xs={12} sm={6} key={index}>
                  <Stack spacing={2} alignItems={{ xs: 'center', sm: 'flex-start' }} sx={{ textAlign: { xs: 'center', sm: 'left' } }}> {/* Center on xs, left-align on sm+ */}
                    <IconComponent sx={{ fontSize: 48, color: '#FFC247' }} /> {/* Added Icon with accent color */}
                    <Typography variant='h5'> {/* Adjusted variant */}
                      {feature.title}
                    </Typography>
                    <Typography variant='body1' sx={{ lineHeight: 1.7 }}> {/* Adjusted variant */}
                      {feature.description}
                    </Typography>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default ChooseUsBanner;
