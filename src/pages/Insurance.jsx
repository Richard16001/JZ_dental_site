import { Box } from '@mui/material'
import { LocationsHero, InsuranceFAQ, Footer, BulletList, Reviews, ServiceBanner1 } from "../components" // Import LocationsHero, remove InsuranceHero
import React from 'react'

function Insurance() {
  // Define consistent vertical spacing value
  const sectionSpacing = { py: { xs: 5, md: 8 } };

  return (
    <Box>
      <LocationsHero title="Insurance & Financing" subtitle="Learn about the insurance plans we accept and financing options." /> {/* Use LocationsHero */}
      {/* Add wrapper Box with padding for spacing */}
      <Box sx={sectionSpacing}>
        <BulletList /> {/* Consider if this needs styling or placement adjustments */}
      </Box>
      <Box sx={sectionSpacing}>
        <InsuranceFAQ />
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

export default Insurance
