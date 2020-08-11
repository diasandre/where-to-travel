import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Context } from "../../contexts/CountriesContext";

const Search = () => {
  const { countries, setFromCountry } = useContext(Context);
  return (
    <Autocomplete
      id="countries"
      options={countries.sort((a, b) => -b.name[0].localeCompare(a.name[0]))}
      getOptionLabel={(option) => option.name}
      onChange={(event, selectedOption) => setFromCountry(selectedOption)}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Where are you from?" variant="outlined" />
      )}
    />
  );
};

export default Search;
