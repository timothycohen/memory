import { useRef, useState } from 'react';
import useDidUpdate from './hooks/useDidUpdate';
import CardGrid from './components/CardGrid';
import Confetti from './components/Confetti';
import Header from './components/Header';
import Status from './components/Status';

export default function App() {
  const [roundsWon, setRoundsWon] = useState(0);
  const [roundsLost, setRoundsLost] = useState(0);
  const [mostCorrect, setMostCorrect] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const numberOfCards = 12;
  const confetti = useRef<any>(null);
  const [status, setStatus] = useState<null | { status: 'loss' | 'win'; msg: string }>(null);

  // handle win
  useDidUpdate(() => {
    if (confetti['current'] === null) return;
    confetti.current.handlerFire();
    setStatus({ status: 'win', msg: 'woot!' });
    setTimeout(() => setStatus(null), 2500);
  }, [roundsWon]);

  // handle loss
  useDidUpdate(() => {
    setStatus({ status: 'loss', msg: 'Oh no :(' });
    setTimeout(() => setStatus(null), 2500);
  }, [roundsLost]);

  return (
    <div className="app bg-gradient-to-br from-gray-700 via-gray-900 to-black">
      <Confetti ref={confetti} />
      <Header
        mostCorrect={mostCorrect}
        roundsWon={roundsWon}
        correctGuesses={correctGuesses}
        numberOfCards={numberOfCards}
      />
      {status && <Status status={status} />}
      <CardGrid
        roundsWon={roundsWon}
        setRoundsWon={setRoundsWon}
        mostCorrect={mostCorrect}
        setMostCorrect={setMostCorrect}
        roundsLost={roundsLost}
        setRoundsLost={setRoundsLost}
        numberOfCards={numberOfCards}
        correctGuesses={correctGuesses}
        setCorrectGuesses={setCorrectGuesses}
      />
    </div>
  );
}
