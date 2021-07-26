import { Theme, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  content: {
    height: "100%",
    width: "100%",
    maxWidth: "600px",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
    width: "100%",
  },
}));
