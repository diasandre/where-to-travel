import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../contexts/CountriesContext";
import { getRandom } from "../../helpers/randomHelper";
import { applyFilters } from "../../helpers/filterHelper";
import Map from "../Map";
import MapCard from "../MapCard";

const MapWrapper = () => {
  const [random, setRandom] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const { selectedCountry, filters, countries } = useContext(Context);

  const updateRandom = () => {
    const value = getRandom(filteredCountries);
    setRandom(value);
  };

  useEffect(() => {
    const filteredCountries = applyFilters({
      selectedCountry,
      filters,
      countries,
    });

    setFilteredCountries(filteredCountries);
  }, [countries, filters, selectedCountry]);

  return (
    <>
      {selectedCountry && (
        <>
          <MapCard country={random} updateRandom={updateRandom} />
          <Map country={random} />
        </>
      )}
    </>
  );
};

export default MapWrapper;
