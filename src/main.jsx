import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Define the custom theme with fonts and sizes
const theme = createTheme({
  typography: {
    // Use Poppins (as Nexa substitute) for headings
    h1: { fontFamily: '"Poppins", sans-serif', fontSize: '2.5rem' }, // ~30pt
    h2: { fontFamily: '"Poppins", sans-serif', fontSize: '2.5rem' }, // ~30pt
    h3: { fontFamily: '"Poppins", sans-serif', fontSize: '2.5rem' }, // ~30pt
    // Use Poppins for sub-headers
    h4: { fontFamily: '"Poppins", sans-serif', fontSize: '1.66rem' }, // ~20pt
    h5: { fontFamily: '"Poppins", sans-serif', fontSize: '1.66rem' }, // ~20pt
    h6: { fontFamily: '"Poppins", sans-serif', fontSize: '1.66rem' }, // ~20pt
    // Use Open Sans for body text and other elements
    fontFamily: '"Open Sans", sans-serif', // Default font
    fontSize: 16, // Base font size for 1rem calculation (default is 14) - 12pt is ~16px
    body1: { fontFamily: '"Open Sans", sans-serif', fontSize: '1rem' }, // ~12pt (relative to root 16px)
    body2: { fontFamily: '"Open Sans", sans-serif', fontSize: '1rem' }, // ~12pt
    subtitle1: { fontFamily: '"Open Sans", sans-serif', fontSize: '1rem' }, // ~12pt
    subtitle2: { fontFamily: '"Open Sans", sans-serif', fontSize: '1rem' }, // ~12pt
    caption: { fontFamily: '"Open Sans", sans-serif' }, // Keep default size or set to 1rem
    overline: { fontFamily: '"Open Sans", sans-serif' }, // Keep default size or set to 1rem
    button: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '1rem', // ~12pt
      textTransform: 'none'
    },
  },
  // Add responsive font sizes (optional but recommended)
  // This overrides the above sizes based on breakpoints
  // Example: Make h1 smaller on mobile
  // typography: {
  //   h1: {
  //     fontSize: '2.5rem', // Base size (~30pt)
  //     '@media (max-width:600px)': {
  //       fontSize: '2rem', // Smaller on mobile
  //     },
  //   },
  //   // ... other responsive overrides
  // },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
