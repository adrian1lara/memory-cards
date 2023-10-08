import { Heading } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export default function Scores({ score, result }) {
    return (
        <>
            <Heading>
                Score: {score} / 7
            </Heading>
            <Heading>
                {result}
            </Heading>
        </>
    )
}



Scores.propTypes = {
    score: PropTypes.number.isRequired,
    result: PropTypes.string.isRequired,
}