import { Theme, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    marginBottom: theme.spacing(10),
    background: theme.palette.primary.dark,
  },
  button: {
    width: "150px",
    marginRight: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
    width: "100%",
  },
}));
