import { Box } from '@mui/material';
import React from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.css'

import { NavBar } from "./components"
import { About, Home, Insurance, Locations, Services } from "./pages"


function App() {
  return (
    <Box>

      <NavBar />

      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </Box>

    </Box>
  )
}

export default App
