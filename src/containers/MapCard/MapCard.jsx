import React from "react";
import { Paper, Button } from "@material-ui/core";
import logo from "../../logo.png";
import "./MapCard.css";
import { useHistory } from "react-router-dom";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ReplayIcon from "@material-ui/icons/Replay";

const MapCard = ({ country, updateRandom }) => {
  const { push } = useHistory();
  return (
    <Paper variant="outlined" className="random-card">
      {country ? (
        <>
          <h3>{country.name}</h3>
          <img src={country.flag} width="250" height="170" alt="flag" />
          <div className="buttons">
            <Button
              onClick={() => push("/")}
              variant="contained"
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
            <Button
              onClick={updateRandom}
              variant="contained"
              endIcon={<ReplayIcon />}
              className="tryagain-btn"
            >
              Try again
            </Button>
          </div>
        </>
      ) : (
        <>
          <img src={logo} alt="logo" />
          <Button onClick={updateRandom} variant="contained">
            Let`s fly
          </Button>
        </>
      )}
    </Paper>
  );
};

export default MapCard;
