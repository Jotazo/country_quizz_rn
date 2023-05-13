const parseCountries = (apiCountries) => {
  const recognizedCountries = apiCountries.filter(getRecognizedCountry);
  const onlyOneCapitalCountries = recognizedCountries.filter(
    getOnlyOneCapitalCountry
  );
  return onlyOneCapitalCountries.map(getMappedCountries);
};

const getRecognizedCountry = (apiCountry) => apiCountry.independent;

const getOnlyOneCapitalCountry = (apiCountry) =>
  apiCountry.capital.length === 1;

const getMappedCountries = (apiCountry) => {
  return {
    country: apiCountry.translations.spa.common,
    capital: apiCountry.capital?.[0],
    flag: apiCountry.flags.png,
  };
};

export default parseCountries;
