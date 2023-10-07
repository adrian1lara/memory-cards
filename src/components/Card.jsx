import PropTypes from 'prop-types'
import  '../styles/Card.css'

export default function Card({ handleClick, character }) {

    return (
        <>
            <div
            onClick={() => handleClick(character)}
            >
            <img src={character.src} alt={character.name} />
            <p>{character.name}</p>
            </div>
        </>
    )
}

Card.propTypes = {
    character: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
}
