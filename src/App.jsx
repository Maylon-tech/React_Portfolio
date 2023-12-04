import { theme } from './utils/Theme'
import { Container, MainBody } from "./styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import Showcase from './components/Showcase'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Container>
          <Showcase />
        </Container>
      </MainBody>
    </ThemeProvider>
  )
}

export default App
