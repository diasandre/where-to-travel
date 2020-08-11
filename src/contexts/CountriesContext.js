import React from "react";

export const STATE = {
  LOADING: "LOADING",
  OK: "OK",
  RANDOM_LOADING: "RANDOM_LOADING"
}

export const contextDefaultValues = {
  state: STATE.LOADING,
  countries: [],
  fromCountry: null,
};

export const Context = React.createContext(contextDefaultValues);

export const ContextProvider = Context.Provider;
export const ContextConsumer = Context.Consumer;
