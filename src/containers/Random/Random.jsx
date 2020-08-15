import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../contexts/CountriesContext";
import AirplaneLoader from "../AirplaneLoader";
import { getRandom } from "../../helpers/randomHelper";

const RandomWrapper = () => {
  const [random, setRandom] = useState(null);
  const { filteredCountries } = useContext(Context);

  const isLoading = random == null;

  useEffect(() => {
    const value = getRandom(filteredCountries);
    setRandom(value);
  }, [filteredCountries]);

  return (
    <>{isLoading ? <AirplaneLoader /> : <RandomItem country={random} />}</>
  );
};

const RandomItem = ({ country }) => {
  return (
    <>
      <p>{country.name}</p>
      <img src={country.flag} width="200" alt="flag" />
    </>
  );
};

export default RandomWrapper;
