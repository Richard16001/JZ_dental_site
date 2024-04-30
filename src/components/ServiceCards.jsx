import { Box, Card, CardContent, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Grid } from '@mui/material'
import TealButton from './TealButton'


import { blueCardS, purpleCardS, redCardS, whiteCardS } from '../assets';

import React from 'react'

const cardTheme = createTheme({
  palatte: {
    primary: {
      main: '#D6E7EB'
    },
    secondary: {
      main: '#4E5283'
    },
    typography: {

    }
  }
})

function ServiceCards() {
  return (
    <Box
      sx={{
        // display: 'flex',
        position: 'relative',
        padding: 10,
      }}
    >
      <Grid container spacing={5}>

        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{pl: 2, pr: 2, pt: 6, height: '95%', bgcolor: '#D6E7EB'}}>
            <CardContent>
              <Box 
                component="img" 
                src={blueCardS} 
                alt={`blue card`} 
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  maxHeight: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  pb: 5
                }}
              />
              <Typography variant ="h4" >
                Dental Procedures
              </Typography>
              <Typography variant="body1" sx={{border: 1, height: '50px'}}>
                Check out our Cleanings, Exams, and X-rays.
              </Typography>
              
              <Box sx={{justifyContent: 'center', pt: 2}}>
                <TealButton>Learn More</TealButton>
              </Box>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{pl: 2, pr: 2, pt: 6, height: '95%', bgcolor: '#D6E7EB'}}>
            <CardContent>
              <Box 
                component="img" 
                src={purpleCardS} 
                alt={`purple card`} 
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  maxHeight: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  pb: 5
                }}
              />
              <Typography variant ="h4">
                Cosmetic Procedures
              </Typography>
              <Typography variant="body1" sx={{border: 1, height: '50px'}}>
                Check out our Teeth Whitening Services.
              </Typography>
              
              <Box sx={{justifyContent: 'center', pt: 2}}>
                <TealButton>Learn More</TealButton>
              </Box>

            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{pl: 2, pr: 2, pt: 6, height: '95%', bgcolor: '#D6E7EB'}}>
            <CardContent>
              <Box 
                component="img" 
                src={redCardS} 
                alt={`red card`} 
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  maxHeight: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  pb: 5
                }}
              />
              <Typography variant ="h4">
                Surgical Procedures
              </Typography>
              <Typography variant="body1" sx={{border: 1, height: '50px'}}>
                Check out our Extractions, Fillings, and Root Canals.
              </Typography>
              
              <Box sx={{justifyContent: 'center', pt: 2}}>
                <TealButton>Learn More</TealButton>
              </Box>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{pl: 2, pr: 2, pt: 6, height: '95%', bgcolor: '#D6E7EB'}}>
            <CardContent>
              <Box 
                component="img" 
                src={whiteCardS} 
                alt={`white card`} 
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  maxHeight: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  pb: 5
                }}
              />
              <Typography variant ="h4">
                Orthodontic Procedures
              </Typography>
              <Typography variant="body1" sx={{border: 1, height: '70px'}}>
                Check out our Invisalign services.                                     
              </Typography>
              
              <Box sx={{justifyContent: 'center', pt: 2}}>
                <TealButton>Learn More</TealButton>
              </Box>

            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box>
  )
}

export default ServiceCards