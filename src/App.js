import React, { useEffect, useReducer, useCallback } from "react";
import { listAll } from "./services/countryService";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import { ContextProvider } from "./contexts/CountriesContext";
import { theme } from "./Theme";
import dataReducer, { INITIAL_STATE } from "./reducers/dataReducer";
import {
  UPDATE_SELECTED_COUNTRY,
  UPDATE_FILTERS,
  STATUS_OK,
} from "./constants/reducerActionsConstants";
import MapWrapper from "./containers/MapWrapper";
import { Router, Switch, Route } from "react-router-dom";
import SearchCard from "./containers/SearchCard";
import { createBrowserHistory } from "history";
import { STATES } from "./constants/statesConstants";

const history = createBrowserHistory();

const App = () => {
  const [state, dispatch] = useReducer(dataReducer, INITIAL_STATE);

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

  return (
    <ThemeProvider theme={theme}>
      <ContextProvider
        value={{
          ...state,
          isLoading: state.actualState === STATES.LOADING,
          setFromCountry,
          setFilters,
        }}
      >
        <div className="app">
          <Router history={history}>
            <Switch>
              <Route path="/show-map">
                <MapWrapper />
              </Route>
              <Route path="/">
                <SearchCard />
              </Route>
            </Switch>
          </Router>
        </div>
      </ContextProvider>
    </ThemeProvider>
  );
};

export default App;
