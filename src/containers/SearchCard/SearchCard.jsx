import React, { useContext } from "react";
import { Paper, Button } from "@material-ui/core";
import { Context } from "../../contexts/CountriesContext";
import AirplaneLoader from "../../components/AirplaneLoader";
import Header from "../Header";
import Search from "../Search";
import Filters from "../Filters";
import { useHistory } from "react-router-dom";
import "./SearchCard.css";

const SearchCard = () => {
  const { isLoading } = useContext(Context);
  const { push } = useHistory();
  return (
    <Paper variant="outlined" className="card">
      {isLoading ? (
        <AirplaneLoader />
      ) : (
        <div className="content">
          <Header />
          <div className="search-filter">
            <Search />
            <Filters />
            <Button
              onClick={() => push("/show-map")}
              variant="contained"
              color="primary"
              className="search-button"
            >
              GO
            </Button>
          </div>
        </div>
      )}
    </Paper>
  );
};

export default SearchCard;
