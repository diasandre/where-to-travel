import React from "react";

export const contextDefaultValues = {
  countries: [],
  fromCountry: null,
};

export const Context = React.createContext(contextDefaultValues);

export const ContextProvider = Context.Provider;
export const ContextConsumer = Context.Consumer;
