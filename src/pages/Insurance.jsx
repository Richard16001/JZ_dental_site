import { Box, Typography } from '@mui/material'
import { InsuranceFAQ, Footer } from "../components"
import React from 'react'

function Insurance() {
  return (
    <Box sx={{pt: 20}}>
      <Typography>
        Insurance
      </Typography>
      <InsuranceFAQ />
      <Footer />
    </Box>
  )
}

export default Insurance