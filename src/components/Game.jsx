import Card from './Card'
import characters from '../characters'
import GameOver from './GameOver';
import { useState, useEffect } from 'react'
import { Wrap, Box, Center } from '@chakra-ui/react';
import Scores from './Scores';

export default function Game() {
    const [allCharacters] = useState(characters);
    const [shownCharacter, setShownCharacter] = useState([]);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState('');
    const [clickCounter, setClickCounter] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const availableCharacters = allCharacters.filter(character => !character.clicked);
    
        let shuffleCharacters;
    
        if (availableCharacters.length >= 3) {
            shuffleCharacters = shuffleArray(availableCharacters).slice(0, 3);
        } else {
            const shuffledAllCharacters = shuffleArray(allCharacters);
            shuffleCharacters = shuffledAllCharacters.slice(0, 3);
        }
        setShownCharacter(shuffleCharacters);
    
    }, [allCharacters, clickCounter]);

    useEffect(() => {
        if (score === 7) {
            setResult('win');
            setIsOpen(true);
        } else if(result === 'lose') {
            setResult('lose');
            setIsOpen(true);
        }
    }, [score, result]);

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
        setClickCounter(0);
        setIsOpen(false);
        characters.forEach(character => {
            character.clicked = false;
        });

        const availableCharacters = allCharacters.filter(character => !character.clicked);

        if (availableCharacters.length > 3) {
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
            <Scores score={score} result={result}/>
            <Center>
            <Box mt={4}
                p={1}
                >
                <Wrap
                    justify="center"
                >
                    {shownCharacter.map(character => (
                        <Card
                            key={character.id}
                            handleClick={handleCardClick}
                            character={character}
                        />
                    ))}
                </Wrap>
            </Box>
            </Center>
            <GameOver isOpen={isOpen} result={result} handleRestart={handleRestart}/>
        </>
    )
}
