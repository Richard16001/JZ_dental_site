import * as React from 'react'



import { Box, Stack, Typography, Container, Grid, Link, IconButton } from '@mui/material'

import FacebookIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/X'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      Jane Zarate.All RIghts Reserved&nbsp;
      {new Date().getFullYear()}
    </Typography>
  )
}

function Footer() {
  return (


    <Box sx={{pt: 6}}>
      <Box sx={{dispaly: 'flex', bgcolor: '#4BC6B9', py: 10, px: 16, whiteSpace: 'nowrap'}}>
        <Grid container spacing={12} sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Grid item xs={12} sm={6} lg={4}>
            <Stack spacing={4} sx={{display: 'flex'}}>
              <Box>
                <Typography variant="h5">
                  Office Locations
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">
                  Milpitas Office
                </Typography>
                <Typography variant="body1">
                  1763 Landess Avenue,
                </Typography>
                <Typography variant="body1">
                  Milpitas, CA 95035
                </Typography>
                <Typography variant="body1">
                  (408) 719-8295
                </Typography>
                <Typography variant="body1">
                  (408) 650-6969
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5">
                  Santa Clara Office
                </Typography>
                <Typography variant="body1">
                  4767 Lafayette Street,
                </Typography>
                <Typography variant="body1">
                  Santa Clara, CA 95054
                </Typography>
                <Typography variant="body1">
                  (408) 727-0722
                </Typography>
                <Typography variant="body1">
                  (408) 505-2325
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Stack spacing={2} sx={{display: 'flex'}}>
              <Box sx={{}}>
                <Typography variant="h5">
                  Office Hours 
                </Typography>
              </Box>
              <Box sx={{}}>
                <Typography variant="body1">
                  Mon: 9:00 am - 6:00 pm
                </Typography>
                <Typography variant="body1">
                  Tue: 9:00 am - 6:00 pm
                </Typography>
                <Typography variant="body1">
                  Wed: 9:00 am - 6:00 pm
                </Typography>
                <Typography variant="body1">
                  Thu: Closed
                </Typography>
                <Typography variant="body1">
                  Fri: 9:00 am - 6:00 pm
                </Typography>
                <Typography variant="body1">
                  Sat: 9:00 am - 3:00 pm
                </Typography>
                <Typography variant="body1">
                  Sun: Closed
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <Stack spacing={4}>
              <Box>
                <Typography variant="h5">
                  Menu
                </Typography>
              </Box>
              <Box >
                <Link href="#">
                  <Typography variant='body1'>
                    About Us  
                  </Typography>
                </Link>
                <Link href="#">
                  <Typography variant='body1'>
                    Services 
                  </Typography>
                </Link>
                <Link href="#">
                  <Typography variant='body1'>
                    Insurance
                  </Typography>
                </Link>
                <Link href="#">
                  <Typography variant='body1'>
                    Locations
                  </Typography>
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Grid container xs={12} sm={6} sx={{bgcolor: '#319B90', px: 16, py: 1}}>
        <Grid item>
          <Copyright />
        </Grid>
        <Grid item sx={{alignItems: 'right'}}>
              {/* Work ON SOCIAL MEDIA */}
        </Grid>
      </Grid>
    </Box>


    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     gap: { xs: 4, sm: 8 },
    //     // py: { xs: 8, sm: 10 },
    //     textAlign: { sm: 'center', md: 'left' },
    //   }}
    // >

    //   <Box
    //     sx={{
    //       display: 'flex',
    //       flexDirection: { xs: 'column', sm: 'row' },
    //       width: '100%',
    //       justifyContent: 'space-between',
    //     }}
    //   >

    //     <Box
    //       sx={{
    //         display: 'flex',
    //         flexDirection: 'column',
    //         gap: 4,
    //         minWidth: { xs: '100%', sm: '60%' },
    //       }}
    //     >
    //       <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
    //         <Typography variant="h6">
    //           Milpitas Office
    //         </Typography>
    //         <Typography variant="body1">
    //           1763 Landess Avenue,
    //         </Typography>
    //         <Typography variant="body1">
    //           Milpitas, CA 95035
    //         </Typography>
    //         <Typography variant="body1">
    //           (408) 719-8295 | (408) 650-6969
    //         </Typography>
    //       </Box>

    //       <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
    //         <Typography variant="h6">
    //           Santa Clara Office
    //         </Typography>
    //         <Typography variant="body1">
    //           4767 Lafayette Street,
    //         </Typography>
    //         <Typography variant="body1">
    //           Santa Clara, CA 95054
    //         </Typography>
    //         <Typography variant="body1">
    //             (408) 727-0722 | (408) 505-2325
    //         </Typography>
    //       </Box>
    //     </Box>

    //     <Box
    //       sx={{
    //         display: { xs: 'none', sm: 'flex' },
    //         flexDirection: 'column',
    //         gap: 1,
            
    //       }}
    //     >
    //       <Typography variant="h6">
    //         Our Hours
    //       </Typography>
    //       <Typography variant="body1">
    //         Monday: 9am - 6pm
    //       </Typography>
    //       <Typography variant="body1">
    //         Tuesday: 9am - 6pm
    //       </Typography>
    //       <Typography variant="body1">
    //         Wednesday: 9am - 6pm
    //       </Typography>
    //       <Typography variant="body1">
    //         Thursday: Closed
    //       </Typography>
    //       <Typography variant="body1">
    //         Friday: 9am - 6pm
    //       </Typography>
    //       <Typography variant="body1">
    //         Saturday: 9am - 3pm
    //       </Typography>
    //       <Typography variant="body1">
    //         Sunday: Closed
    //       </Typography>
    //     </Box>

    //     <Box
    //       sx={{
    //         display: { xs: 'none', sm: 'flex' },
    //         flexDirection: 'column',
    //         gap: 1,
    //       }}
    //     >
    //       <Typography variant="h6">
    //         Menu
    //       </Typography>
    //       <Link href="#">
    //         About us
    //       </Link>
    //       <Link href="#">
    //         Insurance
    //       </Link>
    //       <Link href="#">
    //         Locations
    //       </Link>
    //     </Box>

    //     <Box
    //       sx={{
    //         display: { xs: 'none', sm: 'flex' },
    //         flexDirection: 'column',
    //         gap: 1,
    //       }}
    //     >
    //       <Typography variant="h6">
    //         Dental Procedures
    //       </Typography>
    //       <Link href="#">
    //         Cosmetic Procedures
    //       </Link>
    //       <Link href="#">
    //         Surgical Procedures
    //       </Link>
    //       <Link href="#">
    //         Orthodontic Procedures
    //       </Link>
    //     </Box>

    //   </Box>

    //   <Box
    //     sx={{
    //       display: 'flex',
    //       justifyContent: 'space-between',
    //       pt: { xs: 4, sm: 8 },
    //       width: '100%',
    //       borderTop: '1px solid',
    //       borderColor: 'divider',
    //     }}
    //   >
    //     <Box>
    //       <Copyright />
    //     </Box>
    //     <Stack
    //       direction="row"
    //       justifyContent="left"
    //       spacing={1}
    //       useFlexGap
    //       sx={{
    //         color: 'text.secondary',
    //       }}
    //     >
    //       <IconButton
    //         color="inherit"
    //         href="https://github.com/mui"
    //         aria-label="GitHub"
    //         sx={{ alignSelf: 'center' }}
    //       >
    //         <FacebookIcon />
    //       </IconButton>
    //       <IconButton
    //         color="inherit"
    //         href="https://twitter.com/MaterialUI"
    //         aria-label="X"
    //         sx={{ alignSelf: 'center' }}
    //       >
    //         <TwitterIcon />
    //       </IconButton>
    //       <IconButton
    //         color="inherit"
    //         href="https://www.linkedin.com/company/mui/"
    //         aria-label="LinkedIn"
    //         sx={{ alignSelf: 'center' }}
    //       >
    //         <LinkedInIcon />
    //       </IconButton>
    //     </Stack>
    //   </Box>
    // </Box>
  )
}

export default Footer