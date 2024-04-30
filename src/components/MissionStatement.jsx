import { Box, Typography, Container, Grid, createTheme, Stack, Card, CardContent, CardMedia } from '@mui/material';
import { dentalOfficeBG } from '../assets';

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

      <Box sx={{bgcolor: '#4BC6B9', padding: 10}}>
        <Grid container spacing={6} sx={{padding: 12}}>
          <Grid item md={12} lg={7} sx={{}}>
            <Stack spacing={4}>
              <Typography variant='h2'>
                Our Guaranteed Promise 
              </Typography>
              <Typography variant='h4'>
                "We want empowering individuals to achieve optimal oral health through education, prevention, and personalized care, fostering confidence and well-being in every smile."
              </Typography>

              <Typography variant="subtitle1">
                  "Creating healthier, happier smiles with compassionate care."
                </Typography>
            </Stack>
          </Grid>

          <Grid item md={12} lg={5} sx={{justifyContent: 'center'}}>
            <Card sx={{border: 3, borderColor: '#FFC247', padding: 4}}>
              <CardContent>
                <CardMedia 
                  component="img" 
                  src={dentalOfficeBG} 
                  alt={`dental office`} 
                  sx={{ 
                    display: 'flex',
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    pb: 4
                  }}
                />
                <Typography variant='h5'>
                  We're a dentistry that puts your family first. You can count on us to deliver the best care for your family!
                </Typography>

                
              </CardContent>
            </Card>
          </Grid>
        
        </Grid>
      </Box>
    
      {/* <Box
        sx={{
          display: 'flex',
        }}
      > 
        <Grid 
          container
          spacing={4}
          sx={{
            display: 'flex',
          }}
        >
          <Grid item={8} sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Box 
              sx={{
                borderColor: '#000000',
                border: 1,
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                bgcolor: '#FFFFFF',
                color: '#4E5283',
                padding: 6,
                maxWidth: '500px'
              }}
            >
              <Stack spacing={2}>
                <Typography variant="h4">
                  Our Guaranteed Promise 
                </Typography>
                <Typography variant="h5">
                  "We want empowering individuals to achieve optimal oral health through education, prevention, and personalized care, fostering confidence and well-being in every smile."
                </Typography>
                <Typography variant="subtitle1">
                  "Creating healthier, happier smiles with compassionate care."
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item={4}>
            hello
          </Grid>
        </Grid>
      </Box> */}

      {/* <Grid 
        container
        sx={{
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          display: 'flex'
        }}
      >
        <Grid item xs={8}>
          <Box>
            <Stack spacing={2} display='flex'
              sx={{
                borderColor: '#000000',
                border: 1,
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                bgcolor: '#FFFFFF',
                color: '#4E5283',
              }}
            >
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
        </Grid>

        <Grid item xs={4}>
          <Box>
            <Stack spacing={2} display='flex'
              sx={{
                borderColor: '#000000',
                border: 1,
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                bgcolor: '#FFFFFF',
                color: '#4E5283',
              }}
            >
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
        </Grid>
      </Grid> */}
      
    </Box>
  )
}

export default MissionStatement