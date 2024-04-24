import { Box, Card, CardContent, Grid, Typography, Stack } from '@mui/material'

import { staffProfile } from '../assets'

import YellowButton from './YellowButton'

import React from 'react'

function StaffCards() {
  return (
    <Box 
      sx={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        pt: 8,
        pb: 8
      }}
    >
      <Stack 
        spacing={6}
        sx={{
          display: 'flex',
          pl: 20,
          pr: 20
        }}
      >
        <Card 
          sx={{
            display: 'flex',
            bgcolor: '#D6E7EB'
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
                    Lead Dentist
                  </Typography>

                  <Typography variant='h3'>
                    Bruce Kroger
                  </Typography>


                  <Typography variant='h5'>

                    Dr. Bruce Kroger is a dedicated and experienced dentist committed to providing exceptional dental care to his patients. With a passion for oral health and a focus on patient satisfaction, Dr. Kroger offers a comprehensive range of dental services tailored to meet the unique needs of each individual. With years of experience in the field, he combines expertise with a gentle touch to ensure comfortable and effective treatments for patients of all ages.

                    Dr. Kroger is known for his compassionate approach and commitment to staying current with the latest advancements in dentistry. He takes the time to listen to his patients, understand their concerns, and develop personalized treatment plans to achieve optimal oral health outcomes. Whether it's routine cleanings, restorative procedures, or cosmetic treatments, Dr. Kroger provides attentive care and strives to exceed his patients' expectations at every visit.

                  </Typography>

                </Stack>

                <YellowButton>Book Now</YellowButton>

              </CardContent>
            </Grid>
          </Grid>
        </Card>


        <Card 
          sx={{
            display: 'flex',
            bgcolor: '#D6E7EB'
          }}
        >

          
          <Grid container>
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
                    Lead Dentist
                  </Typography>
                  <Typography variant='h3'>
                    Bruce Kroger
                  </Typography>
                  <Typography variant='h5'>

                    Dr. Bruce Kroger is a dedicated and experienced dentist committed to providing exceptional dental care to his patients. With a passion for oral health and a focus on patient satisfaction, Dr. Kroger offers a comprehensive range of dental services tailored to meet the unique needs of each individual. With years of experience in the field, he combines expertise with a gentle touch to ensure comfortable and effective treatments for patients of all ages.

                    Dr. Kroger is known for his compassionate approach and commitment to staying current with the latest advancements in dentistry. He takes the time to listen to his patients, understand their concerns, and develop personalized treatment plans to achieve optimal oral health outcomes. Whether it's routine cleanings, restorative procedures, or cosmetic treatments, Dr. Kroger provides attentive care and strives to exceed his patients' expectations at every visit.
                  </Typography>
                </Stack>

                <YellowButton>Book Now</YellowButton>
                
              </CardContent>
            </Grid>

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
            
          </Grid>
        </Card>




      </Stack>
    </Box>
  )
}



export default StaffCards