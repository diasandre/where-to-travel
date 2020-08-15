import React, { useContext } from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import PublicIcon from "@material-ui/icons/Public";
import ScheduleIcon from "@material-ui/icons/Schedule";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BorderClearIcon from "@material-ui/icons/BorderClear";

import "./Filter.css";
import { Tooltip } from "@material-ui/core";
import { Context } from "../../contexts/CountriesContext";

const Filter = () => {
  const { filters, setFilters } = useContext(Context);

  const handleFilters = (newFilters) => {
    if (newFilters !== filters) setFilters(newFilters);
  };

  return (
    <div className="filter-group">
      <ToggleButtonGroup
        value={filters}
        onChange={(_, newFilters) => handleFilters(newFilters)}
        aria-label="text formatting"
      >
        <ToggleButton value="border" aria-label="border-filter">
          <Tooltip title="Countries have borders">
            <BorderClearIcon />
          </Tooltip>
        </ToggleButton>

        <ToggleButton value="same-currency" aria-label="same-currency-filter">
          <Tooltip title="Countries have the same currency">
            <AttachMoneyIcon />
          </Tooltip>
        </ToggleButton>

        <ToggleButton
          value="close-timezone"
          aria-label="close-timezone-filter"
          disabled
        >
          <Tooltip title="Countries have a similar timezone">
            <ScheduleIcon />
          </Tooltip>
        </ToggleButton>

        <ToggleButton
          value="another-continent"
          aria-label="another-continent"
          disabled
        >
          <Tooltip title="Country from another continent">
            <PublicIcon />
          </Tooltip>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default Filter;
