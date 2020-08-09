import React, { useEffect } from "react";
import { searchCountryByName } from "./services/countryService";
import "./App.css";
import Header from "./containers/Header";
import { Paper } from "@material-ui/core";
import Search from "./containers/Search";

const App = () => {
  const fetchInitial = async (value) => {
    const { data } = await searchCountryByName(value);
    console.log(data);
  };

  useEffect(() => {
    fetchInitial("brazil");
  }, []);

  return (
    <div className="App">
      <Header />
      <Paper variant="outlined">
        <Search />
      </Paper>
    </div>
  );
};

export default App;
