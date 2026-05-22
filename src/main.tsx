import { StrictMode } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})


createRoot(document.getElementById('root')!).render(
<ThemeProvider theme={darkTheme}>
  <StrictMode>
    <App />
  </StrictMode>,
  </ThemeProvider>
)