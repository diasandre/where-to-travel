import React, { useEffect, useReducer, useCallback } from "react";
import { listAll } from "./services/countryService";
import "./App.css";
import Header from "./containers/Header";
import { Paper, CircularProgress, ThemeProvider } from "@material-ui/core";
import { ContextProvider } from "./contexts/CountriesContext";
import Content from "./containers/Content";
import { theme } from "./Theme";
import AirplaneLoader from "./containers/AirplaneLoader";
import { applyFilters } from "./helpers/filterHelper";
import dataReducer, { INITIAL_STATE } from "./reducers/dataReducer";
import {
  UPDATE_SELECTED_COUNTRY,
  UPDATE_FILTERS,
  STATUS_OK,
  UPDATE_FILTERED_COUNTRIES,
  LOADING,
} from "./constants/reducerActionsConstants";
import { STATES } from "./constants/statesConstants";

const components = {
  LOADING: CircularProgress,
  OK: Content,
  RANDOM_LOADING: AirplaneLoader,
};

const App = () => {
  const [state, dispatch] = useReducer(dataReducer, INITIAL_STATE);

  const { actualState, selectedCountry, filters, countries } = state;

  const setFromCountry = (selectedCountry) => {
    dispatch({
      type: UPDATE_SELECTED_COUNTRY,
      selectedCountry,
    });
  };

  const setFilters = (newFilters) => {
    dispatch({
      type: UPDATE_FILTERS,
      filters: newFilters,
    });
  };

  const goToRandom = () => {
    dispatch({
      type: LOADING,
      state: STATES.RANDOM_LOADING,
    });

    const filteredCountries = applyFilters({
      selectedCountry,
      filters,
      countries,
    });

    dispatch({
      type: UPDATE_FILTERED_COUNTRIES,
      filteredCountries,
    });
  };

  const fetchData = useCallback(async () => {
    const { data = [] } = await listAll();
    dispatch({
      type: STATUS_OK,
      countries: data,
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const Component = components[actualState];

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <ContextProvider
          value={{
            ...state,
            setFromCountry,
            goToRandom,
            setFilters,
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
