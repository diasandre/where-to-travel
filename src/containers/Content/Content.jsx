import React, { useContext } from "react";
import Search from "../Search";
import Filter from "../Filter";
import "./Content.css";
import { Button } from "@material-ui/core";
import { Context } from "../../contexts/CountriesContext";

const Content = () => {
  const { goToRandom } = useContext(Context);
  return (
    <>
      <div className="search-filter">
        <Search />
        <Filter />
        <Button
          variant="contained"
          color="primary"
          className="search-button"
          onClick={goToRandom}
        >
          GO
        </Button>
      </div>
    </>
  );
};

export default Content;
