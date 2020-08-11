import React, { useEffect, useState, useCallback } from "react";
import { listAll } from "./services/countryService";
import "./App.css";
import Header from "./containers/Header";
import { Paper } from "@material-ui/core";
import Search from "./containers/Search";
import {
  ContextProvider,
  contextDefaultValues,
} from "./contexts/CountriesContext";

const App = () => {
  const [values, setValues] = useState(contextDefaultValues);

  const setFromCountry = selectedCountry => {
    setValues({
      ...values,
      fromCountry: selectedCountry
    })
  }

  const fetchData = useCallback(async () => {
    const { data } = await listAll();
    setValues({
      ...values,
      countries: data,
    });
  }, [values]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="app">
      <Header />
      <ContextProvider value={{
        ...values,
        setFromCountry
      }}>
        <div className="container">
          <Paper variant="outlined" className="card">
            <Search />
          </Paper>
        </div>
      </ContextProvider>
    </div>
  );
};

export default App;
