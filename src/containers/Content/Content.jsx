import React from "react";
import Search from "../Search";
import Filter from "../Filter";
import "./Content.css";
import { Button } from "@material-ui/core";
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
