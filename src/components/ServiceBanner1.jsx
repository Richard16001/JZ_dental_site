import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

function ServiceBanner1() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center'
        
      }}
    >
      <Grid container spacing={5}>
        <Grid>
          <Card>
            <CardContent>
              <Typography>
                hello
              </Typography>
            </CardContent>
          </Card>
        </Grid> 
      </Grid>

    </Box>
  )
}

export default ServiceBanner1