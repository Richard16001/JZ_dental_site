import { Box } from '@mui/material'

import { Hero, MissionStatement, ServiceCards, ServiceBanner1 } from "../components"

import React from 'react'

function Home() {
  return (
    <Box>
      <Hero />
      <MissionStatement />
      <ServiceCards />
      <ServiceBanner1 />
    </Box>
  )
}

export default Home