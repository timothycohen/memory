const urlHead = 'https://upload.wikimedia.org/wikipedia/commons/';

const clubs = [
  urlHead + 'e/eb/AC.svg',
  urlHead + '6/69/2C.svg',
  urlHead + '7/70/3C.svg',
  urlHead + '2/25/4C.svg',
  urlHead + '6/6d/5C.svg',
  urlHead + '6/62/6C.svg',
  urlHead + '6/68/7C.svg',
  urlHead + '9/94/8C.svg',
  urlHead + '6/63/9C.svg',
  urlHead + 'c/c7/10C.svg',
  urlHead + '1/11/JC.svg',
  urlHead + '9/9e/QC.svg',
  urlHead + 'e/e1/KC.svg',
];

const diamonds = [
  urlHead + '6/6d/AD.svg',
  urlHead + 'f/fb/2D.svg',
  urlHead + '5/57/3D.svg',
  urlHead + 'c/c7/4D.svg',
  urlHead + 'd/d9/5D.svg',
  urlHead + 'c/cf/6D.svg',
  urlHead + '5/5a/7D.svg',
  urlHead + '8/80/8D.svg',
  urlHead + '0/09/9D.svg',
  urlHead + '8/83/10D.svg',
  urlHead + '3/33/JD.svg',
  urlHead + '6/63/QD.svg',
  urlHead + '0/06/KD.svg',
];

const hearts = [
  urlHead + '8/87/AH.svg',
  urlHead + '9/9d/2H.svg',
  urlHead + '3/3a/3H.svg',
  urlHead + '6/6f/4H.svg',
  urlHead + '0/03/5H.svg',
  urlHead + 'a/a2/6H.svg',
  urlHead + 'e/e1/7H.svg',
  urlHead + '3/34/8H.svg',
  urlHead + 'e/e0/9H.svg',
  urlHead + '8/8a/10H.svg',
  urlHead + '1/15/JH.svg',
  urlHead + 'd/d2/QH.svg',
  urlHead + 'e/e5/KH.svg',
];

const spades = [
  urlHead + '2/27/AS.svg',
  urlHead + 'd/de/2S.svg',
  urlHead + 'c/ce/3S.svg',
  urlHead + 'c/cc/4S.svg',
  urlHead + 'a/ac/5S.svg',
  urlHead + '1/1f/6S.svg',
  urlHead + 'a/a1/7S.svg',
  urlHead + '3/36/8S.svg',
  urlHead + '3/31/9S.svg',
  urlHead + '1/16/10S.svg',
  urlHead + 'd/d9/JS.svg',
  urlHead + '3/35/QS.svg',
  urlHead + '5/5c/KS.svg',
];

export const deckOfCards = [...clubs, ...diamonds, ...hearts, ...spades];

export const getRandomCardsFromDeck = (deck: string[], num: number): string[] => {
  return shuffleCards(deck).slice(0, num);
};

export const shuffleCards = (cards: string[]): string[] => {
  const array = [...cards];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const ryan = [
  'https://c.tenor.com/UgiskSNPjysAAAAC/ryan-please.gif',
  'https://c.tenor.com/k_mmQArqQUkAAAAC/kakao-friend-throw.gif',
  'https://c.tenor.com/tWa-Q3X7UHYAAAAC/ryan-good-dogfrodo.gif',
  'https://c.tenor.com/GrfFKV30PYgAAAAC/ryan-typing.gif',
  'https://c.tenor.com/I8jlmraOPPsAAAAC/ryan-kakaofriends.gif',
  'https://c.tenor.com/8Y2kuHy3ZUEAAAAM/ryan-kakao-friend.gif',
  'https://c.tenor.com/mxfc1AcjDdEAAAAC/kakao-talk-ryan.gif',
  'https://c.tenor.com/s5z8wQaUrnUAAAAM/ryan-kakao.gif',
  'https://c.tenor.com/0oqQVlhMayoAAAAM/kakao-talk-ryan.gif',
  'https://c.tenor.com/4f3sXHxof1sAAAAM/kakao-talk-ryan.gif',
  'https://c.tenor.com/EAZmrjqID5oAAAAM/kakao-kakao-talk.gif',
  'https://c.tenor.com/oLSEesHX0Y8AAAAC/ryan-lazy.gif',
];
