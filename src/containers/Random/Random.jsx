import React, { useContext, useState, useEffect, useRef } from "react";
import { Context } from "../../contexts/CountriesContext";
import { getRandom } from "../../helpers/randomHelper";
import { applyFilters } from "../../helpers/filterHelper";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Button } from "@material-ui/core";

import "leaflet/dist/leaflet.css";
import "./Random.css";

L.Icon.Default.imagePath = "/";

const RandomWrapper = () => {
  const [random, setRandom] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const { selectedCountry, filters, countries } = useContext(Context);

  const mapRef = useRef();
  const { current = {} } = mapRef;
  const { leafletElement: map } = current;

  const updateRandom = () => {
    const value = getRandom(filteredCountries);
    setRandom(value);

    map.setView(value.latlng, 6, {
      duration: 2,
    });
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
          <div className="random-card">
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
          </div>
          <Map ref={mapRef} center={selectedCountry.latlng} zoom={3}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {selectedCountry && (
              <Marker position={selectedCountry.latlng}>
                <Popup>
                  Hey, you are here{" "}
                  <span role="img" aria-label="hey">
                    👋
                  </span>
                </Popup>
              </Marker>
            )}
          </Map>
        </>
      )}
    </>
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
