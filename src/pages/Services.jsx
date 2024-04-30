import { Box, Typography } from '@mui/material'
import React from 'react'

import { ServicesHero, ServicesBanner, ServiceBanner1, ServicesList, Reviews, Footer} from '../components'

function Services() {
  return (
    <Box>
      <ServicesHero />
      <ServicesBanner />
      <ServicesList />
      <Reviews />
      <ServiceBanner1 />
      <Footer />
    </Box>
  )
}

export default Services