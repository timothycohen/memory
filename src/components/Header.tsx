export default function Header(props: {
  roundsWon: number;
  correctGuesses: number;
  numberOfCards: number;
  mostCorrect: number;
}) {
  return (
    <div className="px-5 py-2 bg-white">
      <div className="flex">
        <div className="grow">
          <h1 className="text-4xl font-bold">Memory</h1>
          <p className="">Choose all {props.numberOfCards} cards, but not more than once!</p>
        </div>
        <div className="self-center sm:mt-auto text-left shrink-0">
          <p className="">Rounds Won: {props.roundsWon}</p>
          <p>Most Correct: {props.mostCorrect}</p>
          <p>
            Correct: {props.correctGuesses} / {props.numberOfCards}
          </p>
        </div>
      </div>
    </div>
  );
}
