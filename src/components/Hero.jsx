import { Box, Typography, Container, Grid, createTheme, Stack} from '@mui/material'
import { bannerGirl } from '../assets'
import TealButton from './TealButton'
import YellowButton from './YellowButton'
import React from 'react'

// const HeroTheme = createTheme({
//   Box: {
//   },
//   typography: {
//     button: {
//       textTransform: 'none',
//       fontFamily: 'outfit',
//       fontSize: 18
//     }
//   }
// })


function Hero() {
  return (
    <Box
      sx={{
        display: 'flex',
        pt: 8
      }}
    >
      <Container maxWidth='lg'>
        <Grid container alignItems='center' justifyContent='center'>   
          <Grid item sm={12} md={6}>
            {/* Title text and button */}
            <Box
              sx={{
                display: 'flex',
                bgcolor: '#FFFFFF',
                color: '#4E5283',
                maxWidth: '500px',
                pt: 6,
                pl: 3,
                pr: 3,
                pb: 4
              }}
            >

              <Stack spacing={2} justifyContent= 'flex-start'>
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
                
                <Grid container spacing={0} justifyContent='flex-start' display='flex'>
                  <Grid item xs={6}>
                    <YellowButton>Request Appointment </YellowButton>
                  </Grid>
                  <Grid item xs={6} sx={{pl: 2}}>
                    <TealButton>Contact Us</TealButton>
                  </Grid>
                </Grid>
                


              </Stack>

            </Box>
          </Grid>   


          <Grid item sm={12} md={6}>
            
            {/* Banner image */}
            <Box 
              display={{}}
              component="img" 
              src={bannerGirl} 
              alt={`banner girl`} 
              sx={{ 
                maxWidth: '100%'
              }}
            />
              
          </Grid>  
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero