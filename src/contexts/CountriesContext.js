import React from "react";
import { INITIAL_STATE } from "../reducers/dataReducer";

export const Context = React.createContext(INITIAL_STATE);

export const ContextProvider = Context.Provider;
export const ContextConsumer = Context.Consumer;
