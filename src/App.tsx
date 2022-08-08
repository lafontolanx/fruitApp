import { ThemeProvider } from '@mui/material'
import { AppProvider } from './context/app'
import { AppRoutes } from './routes/index.routes'
import { GlobalStyle } from './styles/GlobalStyle'
import { theme } from './styles/theme'

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <AppRoutes />
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  )
}

export default App
