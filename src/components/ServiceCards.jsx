import { Box, Card, CardContent, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Grid } from '@mui/material'
import TealButton from './TealButton';


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
        position: 'relative',
        padding: 10,
      }}
    >
      <Grid container spacing={5}>

        <Grid item sx={12} md={6} lg={3}>
          <Card sx={{pb: 3, pl: 2, pr: 2, pt: 6}}>
            <CardContent>
              {/* card image */}
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
              <Typography variant ="h4">
                Dental Procedures
              </Typography>
              <Typography variant="body1">
                Check out our Cleanings, Exams, and X-rays.
              </Typography>
              
              <Box sx={{justifyContent: 'center', pt: 2}}>
                <TealButton>Learn More</TealButton>
              </Box>

            </CardContent>
          </Card>
        </Grid>

        <Grid item sx={12} md={6} lg={3}>
          <Card>
            <CardContent>
              {/* card image */}
              <Box 
                component="img" 
                src={purpleCardS} 
                alt={`purple card`} 
                sx={{ 
                  display: "flex",
                  justifyContent: "center",
                  maxHeight: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  padding: 3
                }}
              />

              <Typography variant ="h4">
                Cosmetic Procedures
              </Typography>
              <Typography variant="body1">
                Check out our Teeth Whitening Services.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sx={12} md={6} lg={3}>
          <Card>
            <CardContent>
              
              <Box 
                component="img" 
                src={redCardS} 
                alt={`red card`} 
                sx={{ 
                  display: "flex",
                  justifyContent: "center",
                  maxHeight: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  padding: 3
                }}
              />


              <Typography variant ="h4">
                Surgical Procedures
              </Typography>
              <Typography variant="body1">
                Check out our Extractions, Fillings, and Root Canals.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sx={12} md={6} lg={3}>
          <Card>
            <CardContent>


              <Box 
                component="img" 
                src={whiteCardS} 
                alt={`white card`} 
                sx={{ 
                  display: "flex",
                  justifyContent: "center",
                  maxHeight: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  padding: 3
                }}
              />


              <Typography variant ="h4">
                Orthodontic Procedures 
              </Typography>
              <Typography variant="body1">
                Check out our Invisalign services. 
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box>
  )
}

export default ServiceCards