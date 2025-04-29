import { Box, Typography } from '@mui/material'
import React from 'react'

import { LocationsHero, ServicesBanner, ServiceBanner1, ServicesList, Reviews, Footer} from '../components' // Import LocationsHero, remove ServicesHero

function Services() {
  // Define consistent vertical spacing value
  const sectionSpacing = { py: { xs: 5, md: 8 } };

  return (
    <Box>
      <LocationsHero title="Our Services" subtitle="Explore the comprehensive dental care we offer." /> {/* Use LocationsHero */}
      {/* Add wrapper Box with padding for spacing */}
      <Box sx={sectionSpacing}>
        <ServicesBanner />
      </Box>
      <Box sx={sectionSpacing}>
        <ServicesList />
      </Box>
      <Box sx={sectionSpacing}>
        <Reviews />
      </Box>
      <Box sx={sectionSpacing}>
        <ServiceBanner1 />
      </Box>
      {/* Footer typically handles its own top spacing */}
      <Footer />
    </Box>
  )
}

export default Services
