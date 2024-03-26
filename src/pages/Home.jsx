import { Box } from '@mui/material'

import { Hero, MissionStatement, ServiceCards } from "../components"

import React from 'react'

function Home() {
  return (
    <Box>
      <Hero />
      <MissionStatement />
      <ServiceCards />
    </Box>
  )
}

export default Home