import { MouseEvent, useEffect, useState } from 'react';
import Card from './Card';
import { ryan as deckOfCards, getRandomCardsFromDeck, shuffleCards } from '../utils/cards';

function CardGrid(props: {
  numberOfCards: number;
  correctGuesses: number;
  setCorrectGuesses: (n: number) => void;
  roundsWon: number;
  setRoundsWon: (n: number) => void;
  mostCorrect: number;
  setMostCorrect: (n: number) => void;
  roundsLost: number;
  setRoundsLost: (n: number) => void;
}) {
  const [cards, setCards] = useState(getRandomCardsFromDeck(deckOfCards, props.numberOfCards));
  const [cardsPicked, setCardsPicked] = useState<string[] | []>([]);

  const handleClick = (e: MouseEvent<HTMLImageElement>) => {
    if (cardsPicked.find((cardSrc) => cardSrc === e.currentTarget.src)) {
      props.setRoundsLost(props.roundsLost + 1);
      resetGame();
      return;
    }
    props.setCorrectGuesses(props.correctGuesses + 1);
    setCardsPicked([...cardsPicked, e.currentTarget.src]);
  };

  useEffect(() => {
    if (props.correctGuesses > props.mostCorrect) props.setMostCorrect(props.correctGuesses);
    if (props.correctGuesses === cards.length) {
      props.setRoundsWon(props.roundsWon + 1);
      resetGame();
    } else {
      setCards(shuffleCards(cards));
    }
  }, [props.correctGuesses]);

  const resetGame = () => {
    setCardsPicked([]);
    props.setCorrectGuesses(0);
    setCards(getRandomCardsFromDeck(deckOfCards, props.numberOfCards));
  };

  return (
    <div>
      <div className="grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 py-3">
        {cards.map((cardSrc) => (
          <Card onClick={handleClick} key={cardSrc} src={cardSrc} />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
