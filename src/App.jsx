import Game from './components/Game'
import { Box, Center, Heading } from '@chakra-ui/react'
function App() {

  return (
    <Box minH={'100vh'} bg={'#0F0F0F'}>
      <header>
        <Center>
        <Heading color={'white'} mt={4} as={'h1'} >
          One Piece Memory Game
        </Heading>
        </Center>
      </header>
      <Box
        mt={4}
        >
        <Game />
      </Box>
    </Box>
  )
}

export default App
