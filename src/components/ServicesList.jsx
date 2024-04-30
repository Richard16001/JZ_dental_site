import { Box, Card, Container, CardContent, Grid, Typography, Stack } from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';

import { staffProfile } from '../assets'

import YellowButton from './YellowButton'

import React from 'react'

function ServicesList() {
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        // bgcolor: '#75C1C5',
        pt: 8,
        pb: 8
      }}
    >
      <Container>
        <Stack 
          spacing={2}
          sx={{
            display: 'flex',
          }}
        >
          <Card 
            elevation={0}
            sx={{
              display: 'flex',
              // bgcolor: '#D6E7EB'
              
            }}
          >

            <Grid container>
              <Grid item xs={12} sm={6}>
                <Box 
                  component="img" 
                  src={staffProfile} 
                  alt={`staff profile pic`} 
                  sx={{ 
                    display: 'flex',
                    width: '100%',
                    height: '100%'
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CardContent
                  sx={{
                    padding: 6
                  }}
                >

                  <Stack 
                    spacing={2}
                    sx={{
                      pb: 2
                    }}  
                  >

                    <Typography variant='h3'>
                      Dental Cleanings
                    </Typography>


                    <Typography variant='h5'>

                      Professional dental cleanings are essential at any practice. Our skilled hygienists provide thorough cleanings, removing plaque, tartar, and bacteria buildup for healthier teeth and gums. With gentle care and education on proper oral hygiene practices, our cleanings promote improved gum health and reduce dental issues. Schedule your appointment today for a brighter, healthier smile.
                    </Typography>

                  </Stack>

                  <YellowButton>Book Now</YellowButton>

                </CardContent>
              </Grid>
            </Grid>
          </Card>


          <Card 
            elevation={0}
            sx={{
              display: 'flex',
              // bgcolor: '#D6E7EB'
            }}
          >

            <Grid container>
              <Grid item xs={12} sm={6}>
                <Box 
                  component="img" 
                  src={staffProfile} 
                  alt={`staff profile pic`} 
                  sx={{ 
                    display: 'flex',
                    width: '100%',
                    height: '100%'
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CardContent
                  sx={{
                    padding: 6
                  }}
                >

                  <Stack 
                    spacing={2}
                    sx={{
                      pb: 2
                    }}  
                  >

                    <Typography variant='h4'>
                      Dental Cleanings
                    </Typography>


                    <Typography variant='h5'>
                      Professional dental cleanings are essential at any practice. Our skilled hygienists provide thorough cleanings, removing plaque, tartar, and bacteria buildup for healthier teeth and gums. With gentle care and education on proper oral hygiene practices, our cleanings promote improved gum health and reduce dental issues. Schedule your appointment today for a brighter, healthier smile.
                    </Typography>

                  </Stack>

                  <YellowButton>Book Now</YellowButton>

                </CardContent>
              </Grid>
            </Grid>
          </Card>



        </Stack>
      </Container>
    </Box>
  )
}



export default ServicesList