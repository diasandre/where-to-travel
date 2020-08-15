const { BORDER, SAME_CURRENCY } = require("../constants/filterConstants");

export const applyFilters = ({
  selectedCountry,
  filters = [],
  countries = [],
}) => {
  let filteredCountries = countries;

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
  return countries.filter((country) =>
    country.currencies.some((currency) => currencies.includes(currency.code))
  );
};
