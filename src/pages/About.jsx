import { Box, Typography } from '@mui/material'

import { AboutBanner, AboutHero, ChooseUsBanner, Footer, Reviews, StaffCards } from '../components'

import React from 'react'

function About() {
  return (
    <Box>
      <AboutHero />
      <AboutBanner />
      <StaffCards />
      <ChooseUsBanner />
      <Reviews />
      <Footer />
    </Box>
  )
}

export default About