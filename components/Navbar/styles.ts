import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const drawerWidth = 0;

export default makeStyles((theme: Theme) => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints?.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
    marginLeft: "10px",
  },
  image: {
    marginRight: "10",
  },
  grow: {
    flexGrow: 1,
  },
}));
