import React, { useEffect, useState, useCallback } from "react";
import { listAll } from "./services/countryService";
import "./App.css";
import Header from "./containers/Header";
import { Paper, CircularProgress, ThemeProvider } from "@material-ui/core";
import {
  ContextProvider,
  contextDefaultValues,
  STATE,
} from "./contexts/CountriesContext";
import Content from "./containers/Content";
import { theme } from "./Theme";
import AirplaneLoader from "./AirplaneLoader/AirplaneLoader";

const components = {
  LOADING: CircularProgress,
  OK: Content,
  RANDOM_LOADING: AirplaneLoader,
};

const App = () => {
  const [values, setValues] = useState(contextDefaultValues);

  const { state } = values;

  const setFromCountry = (selectedCountry) => {
    setValues({
      ...values,
      fromCountry: selectedCountry,
    });
  };

  const goToRandom = () => {
    setValues({
      ...values,
      state: STATE.RANDOM_LOADING,
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

  const Component = components[state];

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <ContextProvider
          value={{
            ...values,
            setFromCountry,
            goToRandom,
          }}
        >
          <Header />
          <div className="container">
            <Paper variant="outlined" className="card">
              <Component />
            </Paper>
          </div>
        </ContextProvider>
      </div>
    </ThemeProvider>
  );
};

export default App;
