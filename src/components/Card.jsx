import { Box, Center, Image, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export default function Card({ handleClick, character }) {

    return (
        <>
            <Box p={{ base: 2, md: 4 }}
            m={2}
            borderRadius='lg'
            cursor='pointer'
            onClick={() => handleClick(character)}
            _hover={{
                boxShadow: 'lg',
                transform: 'scale(1.05)'

            }}
            transition='all 0.3s ease-in-out'
            bg={'#232D3F'}
            border={'none'}
            >
            <Image  
            boxSize={{ base: '150px', md: '220px' }}
            src={character.src}
            alt={character.name}
            borderRadius={'sm'}
             />
            <Center>
                <Text color={'white'} mt={2}
                fontSize={{ base: 'md', md: 'lg' }}
                textTransform={'uppercase'}
                fontWeight={'medium'}
                letterSpacing={'wider'}
                >{character.name}</Text>
            </Center>
            
            </Box>
        </>
    )
}

Card.propTypes = {
    character: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
}
