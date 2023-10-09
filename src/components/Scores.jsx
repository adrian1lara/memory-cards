import { Heading, Box, VisuallyHidden } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export default function Scores({ score, result }) {
    return (
        <Box 
            mt={4}
            p={4}
            bg={'#232D3F'}
            borderRadius={'lg'}
            maxW={'fit-content'}
            m={'auto'}
        >
            <Heading color={'white'}>
                Score: {score} / 7
            </Heading>
            <VisuallyHidden>
                <Heading>
                    {result}
                </Heading>
            </VisuallyHidden>
        </Box>
    )
}



Scores.propTypes = {
    score: PropTypes.number.isRequired,
    result: PropTypes.string.isRequired,
}