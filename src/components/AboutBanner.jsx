import { Box, Container,Grid, Stack, Typography } from '@mui/material'

import React from 'react'

function AboutBanner() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        pt: 8
      }}
    >

      {/* Title text and subtext */}
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          bgcolor: '#D6E7EB',
          color: '#4E5283',
          justifyContent: 'center',
          pb: 4,
          pt: 4,          
          width: '100%'
        }}
      >
        <Grid 
          container spacing={10}
          sx={{
            pl: 20,
            pr: 20
          }}
        >
          <Grid item lg={6}>
            <Stack spacing={2}>
              <Box 
                sx={{
                  justifyContent: 'center',
                  width: '600px'
                }}
              >
                <Typography variant="h2">
                  About Us
                </Typography>
              </Box>
              <Box
                sx={{
                  justifyContent: 'center',
                  width: '600px'
                }}
              >
                <Typography variant="h5">
                  Welcome to our office, where our dedicated team is committed to providing you with exceptional dental care and personalized attention. At our office, we understand the importance of a healthy and beautiful smile, and we strive to exceed your expectations at every visit. Our experienced dentists, skilled hygienists, and compassionate staff work together to create a welcoming and comfortable environment for patients of all ages.                
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item lg={6}>
            <Box 
              sx={{
                width: '600px',
              }}
            >
              <Typography variant="h5">
                With our dental office staff guarantee, you can trust that you're in good hands every step of the way. From the moment you walk through our doors, we prioritize your comfort and well-being. Our friendly front desk receptionists are here to assist you with scheduling appointments, answering questions about insurance coverage, and ensuring a seamless check-in process. Throughout your appointment, our dedicated dental assistants and hygienists provide gentle and thorough care, using the latest technology and techniques to achieve optimal oral health. Experience the difference at our office, where your smile is our top priority.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
    
  )
}

export default AboutBanner