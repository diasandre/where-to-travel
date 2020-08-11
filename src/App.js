import React, { useEffect, useState, useCallback } from "react";
import { listAll } from "./services/countryService";
import "./App.css";
import Header from "./containers/Header";
import { Paper, CircularProgress } from "@material-ui/core";
import Search from "./containers/Search";
import {
  ContextProvider,
  contextDefaultValues,
  STATE,
} from "./contexts/CountriesContext";
import Filter from "./containers/Filter";

const App = () => {
  const [values, setValues] = useState(contextDefaultValues);

  const isLoading = values.state === STATE.LOADING;

  const setFromCountry = (selectedCountry) => {
    setValues({
      ...values,
      fromCountry: selectedCountry,
    });
  };

  const fetchData = useCallback(async () => {
    const { data = [] } = await listAll();
    setValues({
      ...contextDefaultValues,
      state: STATE.OK,
      countries: data,
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="app">
      <ContextProvider
        value={{
          ...values,
          setFromCountry,
        }}
      >
        <Header />
        <div className="container">
          <Paper variant="outlined" className="card">
            {!isLoading ? (
              <>
                <Search />
                <Filter />
              </>
            ) : (
              <CircularProgress />
            )}
          </Paper>
        </div>
      </ContextProvider>
    </div>
  );
};

export default App;
