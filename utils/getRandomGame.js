const MAX_COUNTRIES = 4;
const LETTERS = ["A", "B", "C", "D"];

const getRandomGame = (countries) => {
  const randomGame = [];
  let auxIndex = 0;

  while (randomGame.length < MAX_COUNTRIES) {
    const country = getRandomCountry(countries, randomGame);
    country.letter = LETTERS[auxIndex];
    country.isCorrect = false
    randomGame.push(country);
    auxIndex++;
  }

  const isCorrectIndex = Math.floor(Math.random() * MAX_COUNTRIES)

  randomGame[isCorrectIndex].isCorrect = true

  return randomGame;
};

const getRandomCountry = (countries, game) => {
  const maxLength = countries.length;
  const randomIndex = Math.floor(Math.random() * maxLength);
  const randomCountry = countries[randomIndex];

  const countryAlreadyAdded =
    game.findIndex((country) => country.country === randomCountry.country) !==
    -1;

  if (countryAlreadyAdded) return getRandomCountry(countries, game);

  return randomCountry;
};

export default getRandomGame;
