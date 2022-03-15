import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));
