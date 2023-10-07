import { Box, Center, Image, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export default function Card({ handleClick, character }) {

    return (
        <>
            <Box p={{ base: 2, md: 4 }}
            borderWidth='1px'
            borderRadius='lg'
            cursor='pointer'
            onClick={() => handleClick(character)}
            >
            <Image  
            boxSize={{ base: '150px', md: '250px' }}
            src={character.src}
            alt={character.name} />
            <Center>
                <Text>{character.name}</Text>
            </Center>
            
            </Box>
        </>
    )
}

Card.propTypes = {
    character: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
}
