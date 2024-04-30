import { Box, Container } from '@mui/material'
import { dentalStaff } from '../assets';
import React from 'react'

function ServicesHero() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        pt: 8
      }}
    >
      {/* Banner image */}
      <Box 
        component="img" 
        src={dentalStaff} 
        alt={`dental staff`} 
        sx={{ 
         
          width: '100%'
        }}
      />
      
    </Box>
  )
}

export default ServicesHero