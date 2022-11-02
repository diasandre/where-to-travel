const { BORDER, SAME_CURRENCY } = require("../constants/filterConstants");

export const applyFilters = ({
  selectedCountry = null,
  filters = [],
  countries = [],
}) => {
  if (selectedCountry == null) return [];

  let filteredCountries = countries.filter(
    (country) => country.alpha3Code !== selectedCountry.alpha3Code
  );

  if (filters.includes(BORDER))
    filteredCountries = applyBorderFilter(
      selectedCountry.alpha3Code,
      filteredCountries
    );

  if (filters.includes(SAME_CURRENCY))
    filteredCountries = applySameCurrencyFilter(
      selectedCountry.currencies.map((item) => item.code),
      filteredCountries
    );

  return filteredCountries;
};

const applyBorderFilter = (countryInitials, countries) => {
  return countries.filter((country) =>
    country.borders.includes(countryInitials)
  );
};

const applySameCurrencyFilter = (currencies, countries) => {
  return countries.filter((country) => {
    if (country.currencies == null) return false
    return country.currencies.some((currency) => currencies.includes(currency.code))
  });
};
