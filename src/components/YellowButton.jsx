import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFC247',
      contrastText: '#4E5283'
    }
  },
  typography: {
    button: {
      textTransform: 'none',
      fontFamily: 'outfit',
      fontSize: 18
    }
  },
  shape: {
    borderRadius: 15
  }
})

function YellowButton({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" sx={{whiteSpace: 'nowrap'}}>{children}</Button>
    </ThemeProvider>
  )
}

export default YellowButton