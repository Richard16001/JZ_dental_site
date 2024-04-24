import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

function ServiceBanner1() {
  return (
    <Box
      sx={{
        position: 'relative',
        padding: 10,
      }}
    >
      <Box
        sx={{
          pb: 3,
          pl: 2,
          pr: 2, 
          pt: 6
        }}
      >
        <Grid container spacing={5}>
          <Grid item sx={12} md={6} lg={3}>
            <Typography variant ="h4">
              Consultation
            </Typography>
            <Typography variant="body1">
              Need help selecting our services? Schedule an in-depth consultation. 
            </Typography>
          </Grid>

          <Grid item sx={12} md={6} lg={3}>
            <Typography variant ="h4">
              Transparent
            </Typography>
            <Typography variant="body1">
              Trust us to provide you with fast and transparent service for reliable quotes
            </Typography>
          </Grid>

          <Grid item sx={12} md={6} lg={3}>
            <Typography variant ="h4">
              Modern Facilities
            </Typography>
            <Typography variant="body1">
              Modern facilities that use state-of-the-art technology deliver services to smile about.
            </Typography>
          </Grid>

          <Grid item sx={12} md={6} lg={3}>
            <Typography variant ="h4">
              Family Dentistry
            </Typography>
            <Typography variant="body1">
              Welcome to our family dentistry practice, where smiles of all ages are welcome. 
            </Typography>
          </Grid>

        </Grid>
      </Box>

    </Box>
  )
}

export default ServiceBanner1