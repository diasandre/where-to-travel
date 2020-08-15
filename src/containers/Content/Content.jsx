import React, { useContext } from "react";
import Search from "../Search";
import Filter from "../Filter";
import "./Content.css";
import { Button } from "@material-ui/core";
import { Context } from "../../contexts/CountriesContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Content = () => {
  const { push } = useHistory();
  return (
    <>
      <div className="search-filter">
        <Search />
        <Filter />
        <Button
          onClick={() => push("/show-map")}
          variant="contained"
          color="primary"
          className="search-button"
        >
          GO
        </Button>
      </div>
    </>
  );
};

export default Content;
