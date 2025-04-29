import { Box, Typography, Container, Grid, Stack, keyframes } from '@mui/material' // Import keyframes
import { mottoImage } from '../assets' // Removed dentalOfficeBG import
import TealButton from './TealButton'
import YellowButton from './YellowButton'
import React from 'react'

// const HeroTheme = createTheme({
//   Box: {
//   },
//   typography: {
//     button: {
//       textTransform: 'none',
//       fontFamily: 'outfit',
//       fontSize: 18
//     }
//   }
// })

// Define the scrolling animation for seamless loop (revised)
const marquee = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); } /* Move exactly the width of one text block */
`;

function Hero() {
  return (
    <Box
      sx={{
        position: 'relative', // Add position relative to contain the absolute banner
        display: 'flex',
        pt: { xs: 4, md: 8 }, // Adjusted padding top for different screen sizes
        pb: { xs: 4, md: 8 }, // Added padding bottom
        bgcolor: '#FFFFFF', // Set background to white
        // Removed backgroundImage, backgroundSize, backgroundPosition
        // Removed position: 'relative' and '&::before' overlay styles
      }}
    >
      {/* Scrolling Banner */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '3rem', // Move banner up again
          left: 0,
          width: '100%',
          overflow: 'hidden', // Hide text outside the box
          // Removed bgcolor
          color: '#4BC6B9', // Changed text color to teal
          py: 0.5, // Reduced vertical padding
          zIndex: 10 // Ensure it's above other hero content
        }}
      >
        {/* Animated Flex Container */}
        <Box sx={{
          display: 'flex',
          width: 'fit-content', // Let content determine width initially
          animation: `${marquee} 60s linear infinite`, // Apply slow animation to container
        }}>
          {/* Text Block 1 */}
          <Typography
            variant="body1"
            component="span" // Use span as it's part of a flex container
            sx={{
              whiteSpace: 'nowrap',
              fontFamily: 'outfit',
              pr: 4, // Add some padding between repetitions
            }}
          >
            {/* Repeat text many times to ensure coverage */}
            Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;
          </Typography>
          {/* Text Block 2 (Identical Duplicate) */}
          <Typography
            variant="body1"
            component="span"
            sx={{
              whiteSpace: 'nowrap',
              fontFamily: 'outfit',
              pr: 4, // Add some padding between repetitions
            }}
            aria-hidden="true"
          >
            {/* Repeat text many times to ensure coverage */}
            Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;Your smile makes my day •&nbsp;
          </Typography>
        </Box>
      </Box>

      <Container maxWidth='lg' sx={{ pb: { xs: 8, md: 10 } }}> {/* Keep padding bottom to avoid overlap */}
        <Grid container alignItems='center' justifyContent='center' spacing={4}> {/* Added spacing between grid items */}
          <Grid item sm={12} md={6}>
            {/* Title text and button */}
            <Box
              sx={{
                display: 'flex',
                // bgcolor: '#FFFFFF', // Removed solid background, rely on overlay
                color: '#4E5283', // Keep text color
                maxWidth: '500px',
                // Adjusted padding for consistency
                p: { xs: 2, md: 4 }
              }}
            >

              <Stack spacing={3} justifyContent= 'flex-start'> {/* Increased spacing in stack */}
                <Box>
                  {/* Removed sx fontSize override - now controlled by theme */}
                  <Typography variant="h2">
                    Build a Healthy Smile Today
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5">
                    Zarate Studios brings you dental care that’s worth smiling about. Come visit our offices today!
                  </Typography>
                </Box>

                {/* Adjusted Grid for consistent button sizing */}
                <Grid container spacing={2} justifyContent='flex-start'>
                  <Grid item xs={12} sm={6}> {/* Stacks on xs, side-by-side sm and up */}
                    <YellowButton fullWidth>Request Appointment</YellowButton> {/* Apply fullWidth */}
                  </Grid>
                  <Grid item xs={12} sm={6}> {/* Stacks on xs, side-by-side sm and up */}
                    <TealButton fullWidth>Contact Us</TealButton> {/* Apply fullWidth */}
                  </Grid>
                </Grid>
                


              </Stack>

            </Box>
          </Grid>   


          <Grid item sm={12} md={6}>
            
            {/* Banner image */}
            <Box
              display={{ xs: 'none', md: 'block' }} // Hide image on small screens for better text focus
              component="img"
              src={mottoImage} // Use mottoImage
              alt={`Dental office motto`} // Update alt text
              sx={{
                maxWidth: '100%',
                height: 'auto', // Ensure image scales proportionally
                borderRadius: '8px' // Optional: add slight rounding to image corners
              }}
            />

          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero
