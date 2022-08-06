import { useState } from 'react'
import { Home } from './pages/home'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
  const [count, setCount] = useState(0)

  return <>
    <Home />
    <GlobalStyle />
  </>
  
}

export default App
