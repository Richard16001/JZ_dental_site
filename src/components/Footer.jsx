import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import { bannerGirl } from '../assets';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      Jane Zarate.All RIghts Reserved&nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
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
              (408) 719-8295 | (408) 650-6969
            </Typography>
          </Box>

          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Typography variant="h6">
              Santa Clara Office
            </Typography>
            <Typography variant="body1">
              4767 Lafayette Street,
            </Typography>
            <Typography variant="body1">
              Santa Clara, CA 95054
            </Typography>
            <Typography variant="body1">
                (408) 727-0722 | (408) 505-2325
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
            
          }}
        >
          <Typography variant="h6">
            Our Hours
          </Typography>
          <Typography variant="body1">
            Monday: 9am - 6pm
          </Typography>
          <Typography variant="body1">
            Tuesday: 9am - 6pm
          </Typography>
          <Typography variant="body1">
            Wednesday: 9am - 6pm
          </Typography>
          <Typography variant="body1">
            Thursday: Closed
          </Typography>
          <Typography variant="body1">
            Friday: 9am - 6pm
          </Typography>
          <Typography variant="body1">
            Saturday: 9am - 3pm
          </Typography>
          <Typography variant="body1">
            Sunday: Closed
          </Typography>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="h6">
            Menu
          </Typography>
          <Link href="#">
            About us
          </Link>
          <Link href="#">
            Insurance
          </Link>
          <Link href="#">
            Locations
          </Link>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="h6">
            Dental Procedures
          </Typography>
          <Link href="#">
            Cosmetic Procedures
          </Link>
          <Link href="#">
            Surgical Procedures
          </Link>
          <Link href="#">
            Orthodontic Procedures
          </Link>
        </Box>

      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/mui"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://twitter.com/MaterialUI"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/company/mui/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}