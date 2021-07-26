import { Theme, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    margin: theme.spacing(8),
  },
  img: {
    height: "100px",
    marginBottom: theme.spacing(10),
  },
  charactersBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  character: {
    "& :hover": {
      cursor: "pointer",
      background: theme.palette.primary.light,
    },
  },
  characterText: {
    padding: theme.spacing(3),
  },
}));
