import { getCountries } from "../services/countries";
import getRandomGame from "../utils/getRandomGame";
import parseCountries from "../utils/parseCountries";

export const createCountriesSlice = (set, get) => ({
  countries: [],
  countriesSelected: [],
  randomGame: null,
  successfulAnswer: null,
  answerSelected: null,
  getCountries: async () => {
    const apiCountries = await getCountries();
    const parsedCountries = parseCountries(apiCountries);
    set({ countries: parsedCountries });
  },
  addCountrySelected: (country) => {
    const countriesSelected = get().countriesSelected;
    countriesSelected.push(country);
    set({ countriesSelected });
  },
  createRandomGame: () => {
    const countriesSelected = get().countriesSelected;
    const allCountries = get().countries;
    const countriesFiltered = allCountries.filter((country) => {
      const countryFounded = countriesSelected.find(
        (countrySelected) => countrySelected.country === country.country
      );
      return !countryFounded;
    });
    const randomGameCreated = getRandomGame(countriesFiltered);

    const successfulAnswer = randomGameCreated.find(
      (country) => country.isCorrect
    );

    set({ successfulAnswer });
    set({ randomGame: randomGameCreated });
    set({ answerSelected: null });
    get().startTime();
  },
  setAnswerSelected: (answerSelected) => set({ answerSelected }),
});
