import React, { useEffect, useRef, useContext, useCallback } from "react";
import { Context } from "../../contexts/CountriesContext";
import { TileLayer, Map as LeafletMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "./Map.css";

L.Icon.Default.imagePath = "/";

const OPEN_STREET_MAP_URL =
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const Map = ({ country }) => {
  const { selectedCountry } = useContext(Context);

  const mapRef = useRef();

  const updateMarkers = useCallback(() => {
    if (country != null) {
      const { current = {} } = mapRef;
      const { leafletElement: map } = current;
      map.setView(country.latlng, 6, {
        duration: 2,
      });
    }
  }, [mapRef, country]);

  useEffect(() => {
    updateMarkers();
  }, [updateMarkers]);

  return (
    <LeafletMap ref={mapRef} center={selectedCountry.latlng} zoom={3}>
      <TileLayer
        url={OPEN_STREET_MAP_URL}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {selectedCountry && (
        <Marker position={selectedCountry.latlng}>
          <Popup>
            Hey, you are here
            <span role="img" aria-label="hey">
              👋
            </span>
          </Popup>
        </Marker>
      )}
      {country && <Marker position={country.latlng} />}
    </LeafletMap>
  );
};

export default Map;
