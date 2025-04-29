import { Box } from '@mui/material';
import { dentalOfficeBG } from '../assets'; 
import React from 'react';

function InsuranceHero() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        pt: 8 // Adjust padding top as needed, matching other heroes
      }}
    >
      {/* Banner image */}
      <Box
        component="img"
        src={dentalOfficeBG}
        alt="Dental office background"
        sx={{
          width: '100%'
        }}
      />
    </Box>
  );
}

export default InsuranceHero;
