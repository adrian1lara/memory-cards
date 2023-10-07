import Card from './Card'
import characters from '../characters'
import { useState, useEffect } from 'react'
import '../styles/Card.css'

export default function Game() {
    const [allCharacters] = useState(characters);
    const [shownCharacter, setShownCharacter] = useState([]);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState('');
    const [clickCounter, setClickCounter] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const availableCharacters = allCharacters.filter(character => !character.clicked);
    
        let shuffleCharacters;
    
        if (availableCharacters.length >= 3) {
            shuffleCharacters = shuffleArray(availableCharacters).slice(0, 3);
        } else {
            // Si no hay suficientes personajes no clickeados, obtenemos tres al azar
            const shuffledAllCharacters = shuffleArray(allCharacters);
            shuffleCharacters = shuffledAllCharacters.slice(0, 3);
        }
    
        setShownCharacter(shuffleCharacters);
    
    }, [allCharacters, clickCounter]);

    const stateRoundResult = (character) => {
        if(character.clicked) {
            return 'lose';
        } else {
            return 'win';
        }
    }

    const handleScore = () => {
        setScore(score + 1);
    }

    const handleCardClick = (character) => {
        if (isClicked) {
            return;
        }
        setIsClicked(true);
        let turnResult = stateRoundResult(character);
        setResult(turnResult);
        character.clicked = true;
        if (turnResult !== 'lose') {
            handleScore();
            setIsClicked(false);
        }

        setClickCounter(clickCounter + 1);
    }

    const handleRestart = () => {
        setScore(0);
        setShownCharacter([]);
        setResult('');
        setIsClicked(false);
        characters.forEach(character => {
            character.clicked = false;
        });

        const availableCharacters = allCharacters.filter(character => !character.clicked);

        if (availableCharacters.length >= 3) {
            const shuffleCharacters = shuffleArray(availableCharacters).slice(0, 3);
            setShownCharacter(shuffleCharacters);
        }
    }

    const shuffleArray = (array) => {
        const shuffled = array.slice();

        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled;
    }

    return (
        <>
            <h1>Memory Cards</h1>
            <p>Score: {score}</p>
            <div className='card-container'>
                {shownCharacter.map(character => (
                    <Card
                        key={character.id}
                        handleClick={handleCardClick}
                        character={character}
                    />
                ))}
            </div>
            {result !== '' && (
                <p>{result}</p>
            )}
            {result === 'win' && score === 7 && (
                <button onClick={handleRestart}>Restart</button>
            )}
            {result === 'lose' && (
                <button onClick={handleRestart}>Restart</button>
            )}
        </>
    )
}
