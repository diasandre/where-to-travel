import { createMuiTheme } from "@material-ui/core/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
import red from "@material-ui/core/colors/red";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[500],
    },
    secondary: {
      main: red[600],
    },
  },
});
