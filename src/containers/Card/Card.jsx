import React, { useContext } from "react";
import { Paper } from "@material-ui/core";
import { Context } from "../../contexts/CountriesContext";
import { STATES } from "../../constants/statesConstants";
import AirplaneLoader from "../AirplaneLoader";
import Header from "../Header";
import Content from "../Content";

const Card = () => {
  const { actualState } = useContext(Context);

  const isLoading = actualState === STATES.LOADING;

  return (
    <Paper variant="outlined" className="card">
      {isLoading ? (
        <AirplaneLoader />
      ) : (
        <div className="content">
          <Header />
          <Content />
        </div>
      )}
    </Paper>
  );
};

export default Card;
