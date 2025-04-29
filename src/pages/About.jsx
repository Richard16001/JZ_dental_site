import { Box, Typography } from '@mui/material'

import { AboutBanner, AboutHero, ChooseUsBanner, Footer, Reviews, StaffCards } from '../components'

import React from 'react'

function About() {
  // Define consistent vertical spacing value
  const sectionSpacing = { py: { xs: 5, md: 8 } };

  return (
    <Box>
      <AboutHero />
      {/* Add wrapper Box with padding for spacing */}
      <Box sx={sectionSpacing}>
        <AboutBanner />
      </Box>
      <Box sx={sectionSpacing}>
        <StaffCards />
      </Box>
      <Box sx={sectionSpacing}>
        <ChooseUsBanner />
      </Box>
      <Box sx={sectionSpacing}>
        <Reviews />
      </Box>
      {/* Footer typically handles its own top spacing */}
      <Footer />
    </Box>
  )
}

export default About
