import { MouseEvent } from 'react';

export default function Card(props: {
  src: string;
  onClick: (e: MouseEvent<HTMLImageElement>) => void;
}) {
  const cardName = props.src.slice(0, -3);
  return (
    <img
      onClick={props.onClick}
      className="card h-56 w-40 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 rounded-lg shadow-lg"
      src={props.src}
      alt={`card ${cardName}`}
    />
  );
}
