import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../contexts/CountriesContext";
import { getRandom } from "../../helpers/randomHelper";
import { applyFilters } from "../../helpers/filterHelper";
import Map from "../Map";
import { Button, Paper } from "@material-ui/core";
import "./MapWrapper.css";

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
          <Paper variant="outlined" className="random-card">
            {random ? (
              <>
                <RandomItem country={random} />
                <Button
                  onClick={() => updateRandom()}
                  variant="contained"
                  color="primary"
                >
                  Try again
                </Button>
              </>
            ) : (
              <Button
                onClick={() => updateRandom()}
                variant="contained"
                color="primary"
              >
                Let`s fly
              </Button>
            )}
          </Paper>
          <Map country={random} />
        </>
      )}
    </>
  );
};

const RandomItem = ({ country }) => {
  return (
    <>
      <h3>{country.name}</h3>
      <img src={country.flag} width="250px" alt="flag" />
    </>
  );
};

export default MapWrapper;
