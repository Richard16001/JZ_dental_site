import { Box, Typography } from '@mui/material'
import { InsuranceFAQ, Footer, BulletList } from "../components"
import React from 'react'

function Insurance() {
  return (
    <Box>
      <BulletList />
      <InsuranceFAQ />
      <Footer />
    </Box>
  )
}

export default Insurance