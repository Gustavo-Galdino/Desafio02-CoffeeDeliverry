import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AddressProvider } from './context/AddressContext'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <ShoppingCartProvider>
          <AddressProvider>
            <Router />
          </AddressProvider>
        </ShoppingCartProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
