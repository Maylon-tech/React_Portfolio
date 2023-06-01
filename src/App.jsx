import { theme } from './utils/Theme'
import { MainBody } from "./GlobalStyles"
import { ThemeProvider } from "styled-components"

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <MainBody />
     <h1>Nemoto Dev portfolio</h1>
    </ThemeProvider>
  )
}

export default App
