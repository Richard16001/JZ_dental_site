import { Box } from '@mui/material'

import { Hero, MissionStatement, Reviews, ServiceBanner1, ServiceCards, Footer, TESTING } from "../components"

import React from 'react'

function Home() {
  // Define consistent vertical spacing value
  const sectionSpacing = { py: { xs: 5, md: 8 } };

  return (
    <Box>
      {/* Wrap Hero in a Box with top padding to move it down */}
      <Box sx={{ pt: 4 }}>
        <Hero />
      </Box>
      {/* Add wrapper Box with padding for spacing */}
      <Box sx={sectionSpacing}>
        <MissionStatement />
      </Box>
      <Box sx={sectionSpacing}>
        <ServiceCards />
      </Box>
      <Box sx={sectionSpacing}>
        <Reviews />
      </Box>
      <Box sx={sectionSpacing}>
        <ServiceBanner1 />
      </Box>
      {/* Footer typically handles its own top spacing or is the last element */}
      <Footer />
    </Box>
  )
}

export default Home
