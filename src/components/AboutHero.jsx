import { Box, Typography, Container } from '@mui/material';
import { groupPhoto } from '../assets'; // Import groupPhoto
import React from 'react';

function AboutHero() {
  return (
    <Box
      sx={{
        position: 'relative', // Keep relative for positioning children
        // Removed display, alignItems, justifyContent, pt, pb, overflow
        '&::before': { // Add light overlay back for text readability
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.6)', // Light overlay
          zIndex: 1,
        }
      }}
    >
      {/* Image (now part of normal flow) */}
      <Box
        component="img"
        src={groupPhoto} // Use groupPhoto
        alt={`Dental team group photo`} // Update alt text
        sx={{
          display: 'block', // Ensure it takes block space
          width: '100%', // Responsive width
          height: 'auto', // Maintain aspect ratio
          // Removed absolute positioning, objectFit, zIndex
        }}
      />
      {/* Title Text (Overlaid and Centered) */}
      <Container maxWidth="md" sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        textAlign: 'center'
      }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            color: '#FFFFFF', // Change text back to white for contrast
            fontWeight: 'bold',
            textShadow: '1px 1px 3px rgba(0,0,0,0.5)', // Add shadow back
            // Removed sx fontSize override
          }}
        >
          About Us
        </Typography>
      </Container>
    </Box>
  )
}

export default AboutHero
