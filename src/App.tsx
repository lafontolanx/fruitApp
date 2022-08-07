import { AppProvider } from './context/app'
import { Home } from './pages/home'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
  return (
    <AppProvider>
      <Home />
      <GlobalStyle />
    </AppProvider>
  )
}

export default App
