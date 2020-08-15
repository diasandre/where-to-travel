import {
  LOADING,
  STATUS_OK,
  UPDATE_SELECTED_COUNTRY,
  UPDATE_FILTERS,
} from "../constants/reducerActionsConstants";
import { STATES } from "../constants/statesConstants";

export const INITIAL_STATE = {
  actualState: LOADING,
  countries: [],
  selectedCountry: null,
  filteredCountries: [],
  filters: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STATUS_OK: {
      return {
        ...state,
        countries: action.countries,
        actualState: STATES.OK,
      };
    }
    case UPDATE_SELECTED_COUNTRY: {
      return { ...state, selectedCountry: action.selectedCountry };
    }
    case UPDATE_FILTERS: {
      return { ...state, filters: action.filters };
    }
    default:
      return state;
  }
};
