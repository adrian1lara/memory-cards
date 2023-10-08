import Game from './components/Game'
import { Box, Heading } from '@chakra-ui/react'

function App() {

  return (
    <>
      <header>
        <Heading>
          Memory Cards
        </Heading>
      </header>
      <Box
        mt={4}
      >
        <Game />
      </Box>

    </>
  )
}

export default App
