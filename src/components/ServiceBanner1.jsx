import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';



import React from 'react'

function ServiceBanner1() {
  return (
    <Box
      sx={{
        position: 'relative',
        pt: 6,
        pb: 6
      }}
    >
      <Box
        sx={{
          bgcolor: '#D6E7EB',
          padding: 10
        }}
      >
        
        <Grid container spacing={8} sx={{textAlign: 'center'}}>

          
          <Grid item xs={12} md={6} lg={3}>
            <BookmarkIcon sx={{fontSize: 64}}/>
            <Typography variant ="h4">
              Consultation
            </Typography>
            <Typography variant="body1">
              Need help selecting our services? Schedule an in-depth consultation. 
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <BookmarkIcon sx={{fontSize: 64}}/>
            <Typography variant ="h4">
              Transparent
            </Typography>
            <Typography variant="body1">
              Trust us to provide you with fast and transparent service for reliable quotes
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <BookmarkIcon sx={{fontSize: 64}}/>
            <Typography variant ="h4">
              Modern Facilities
            </Typography>
            <Typography variant="body1">
              Modern facilities that use state-of-the-art technology deliver services to smile about.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <BookmarkIcon sx={{fontSize: 64}}/>
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