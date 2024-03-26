import { Box, Typography, Container, Grid, createTheme } from '@mui/material';
import { dentalOfficeBG } from '../assets';
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

function MissionStatement() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        pt: 3
      }}
    >
      {/* Banner image */}
      <Box 
        component="img" 
        src={dentalOfficeBG} 
        alt={`dental office`} 
        sx={{ 
          maxWidth: '100%'
        }}
      />

      {/* Title text and button */}
      <Box
         sx={{
          borderColor: '#000000',
          border: 1,
          padding: 6,
          display: 'flex',
          position: 'absolute',
          top: '60%',
          right: '10%',
          transform: 'translateY(-50%)',
          bgcolor: '#FFFFFF',
          color: '#4E5283',
          maxWidth: '400px',
         }}
      >

        <Stack spacing={2}>
          <Box>
            <Typography variant="h4">
              Mission Statement
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5">
            "We want empowering individuals to achieve optimal oral health through education, prevention, and personalized care, fostering confidence and well-being in every smile."
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">
              "Creating healthier, happier smiles with compassionate care."
            </Typography>
          </Box>
        </Stack>

      </Box>
      
    </Box>
  )
}

export default MissionStatement