import { Box, Image, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export default function Card({ handleClick, character }) {

    return (
        <>
            <Box p={4}
            onClick={() => handleClick(character)}
            >
            <Image  
            boxSize="250px"
            src={character.src}
            alt={character.name} />
            <Text>{character.name}</Text>
            </Box>
        </>
    )
}

Card.propTypes = {
    character: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
}
