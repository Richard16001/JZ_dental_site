import { Box, Card, CardContent, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Grid } from '@mui/material'


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

        <Grid>
          <Card>
            <CardContent>
              {/* card image */}
              <Box 
                component="img" 
                src={blueCardS} 
                alt={`blue card`} 
                sx={{ 
                  maxWidth: '50%',
                  justifyContent: 'center',
                  padding: 3
                }}
              />
              <Typography variant ="h4">
                Dental Procedures
              </Typography>
              <Typography variant="body1">
                Check out our Cleanings, Exams, and X-rays.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant ="h4">
                Cosmetic Procedures
              </Typography>
              <Typography variant="body1">
                Check out our Teeth Whitening Services.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant ="h4">
                Surgical Procedures
              </Typography>
              <Typography variant="body1">
                Check out our Extractions, Fillings, and Root Canals.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card>
            <CardContent>
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