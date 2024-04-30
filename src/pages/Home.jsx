import { Box } from '@mui/material'

import { Hero, MissionStatement, Reviews, ServiceBanner1, ServiceCards, Footer, TESTING } from "../components"

import React from 'react'

function Home() {
  return (
    <Box>
      <Hero />
      <MissionStatement />
      <ServiceCards />
      <Reviews />
      <ServiceBanner1 />
      <TESTING />
      <Footer />
    </Box>
  )
}

export default Home