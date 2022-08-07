import { ThemeProvider } from '@mui/material'
import { AppProvider } from './context/app'
import { Home } from './pages/home'
import { GlobalStyle } from './styles/GlobalStyle'
import { theme } from './styles/theme'

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  )
}

export default App
