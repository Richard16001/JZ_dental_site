import { Box, Typography } from '@mui/material'
import { InsuranceFAQ, Footer, BulletList } from "../components"
import React from 'react'

function Insurance() {
  return (
    <Box sx={{pt: 20}}>
      <Typography>
        Insurance
      </Typography>
      <BulletList />
      <InsuranceFAQ />
      <Footer />
    </Box>
  )
}

export default Insurance