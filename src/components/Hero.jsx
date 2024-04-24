import { Box, Typography, Container, Grid, createTheme } from '@mui/material'
import { bannerGirl } from '../assets'
import { Stack } from '@mui/material'
import React from 'react'

const HeroTheme = createTheme({
  Box: {
  },
  typography: {
    button: {
      textTransform: 'none',
      fontFamily: 'outfit',
      fontSize: 18
    }
  }
})


function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        pt: 8
      }}
    >
      {/* Banner image */}
      <Box 
        component="img" 
        src={bannerGirl} 
        alt={`banner girl`} 
        sx={{ 
          maxWidth: '100%'
        }}
      />
      {/* Title text and button */}
      <Box
         sx={{
          display: 'flex',
          position: 'absolute',
          top: '60%',
          left: '10%',
          transform: 'translateY(-50%)',
          bgcolor: '#FFFFFF',
          color: '#4E5283',
          maxWidth: '500px'
         }}
      >

        <Stack spacing={2}>
          <Box>
            <Typography variant="h2">
              Build a Healthy Smile Today
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5">
              Zarate Studios brings you dental care that’s worth smiling about. Come visit our offices today!
            </Typography>
          </Box>
        </Stack>

      </Box>
      
    </Box>
  )
}

export default Hero