import { Box, Card, CardContent, Grid, Typography, Stack } from '@mui/material'

import React from 'react'

function ChooseUsBanner() {
  return (
    <Box 
      sx={{
        pb: 8
      }}
    >
      <Box
        sx={{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          border: 1,
          bgcolor: '#75C1C5',
          pt: 8,
          pb: 8,
          pl: 6,
          pr: 6
        }}
      >
        <Stack spacing={5}>
          <Typography variant='h3' sx={{textAlign: 'center'}}>
            Why Choose Us?
          </Typography>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <Stack spacing={2}>
                <Typography variant='h4'>
                  High-Quality Care
                </Typography>

                <Typography variant='h5'>
                  You deserve high-quality care. At our practice, we prioritize excellence in every aspect of your treatment, from our skilled professionals to our state-of-the-art facilities. Your trust in us is paramount, and we are committed to providing the finest care to ensure your comfort, and satisfaction.
                </Typography>
              </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={2}>
              <Typography variant='h4'>
                Fast Service
              </Typography>

              <Typography variant='h5'>
                Experience the best of both worlds with our fast and quality service. We strive to deliver efficient care without compromising on excellence. From prompt appointments to streamlined procedures, trust us to provide swift and top-notch service that exceeds your expectations.              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={2}>
              <Typography variant='h4'>
                Inviting Atmosphere
              </Typography>

                <Typography variant='h5'>
                  Feel the warmth of our welcoming and friendly atmosphere. From the moment you arrive, our team is dedicated to making you feel like part of our dental family. With genuine smiles and personalized attention, we ensure that every visit is comfortable, enjoyable, and leaves you looking forward to your next appointment.              </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack spacing={2}>
                <Typography variant='h4'>
                  Transparency
                </Typography>

                <Typography variant='h5'>
                  Transparency is our commitment to you. We believe in open communication and honesty every step of the way, ensuring you are fully informed about your treatment options, costs, and expectations. With transparent policies and clear explanations, you can trust us to provide reliable information about your dental care.              </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>


    </Box>
  )
}

export default ChooseUsBanner