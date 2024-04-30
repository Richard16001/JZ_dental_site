import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4BC6B9',
      contrastText: '#FFFFFF'
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

function TealButton({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" sx={{whiteSpace: 'nowrap'}}>{children}</Button>
    </ThemeProvider>
  )
}

export default TealButton