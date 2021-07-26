import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Box, Button, Typography } from "@material-ui/core";
import { SearchOutlined, StarsOutlined } from "@material-ui/icons";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Box className={classes.root}>
      <Button
        variant={location.pathname !== "/favorites" ? "contained" : "text"}
        color={"primary"}
        className={classes.button}
        disableElevation
      >
        <Link to="/" className={classes.link}>
          <SearchOutlined className={classes.icon} />
          <Typography>Consultar</Typography>
        </Link>
      </Button>

      <Button
        variant={location.pathname === "/favorites" ? "contained" : "text"}
        color={"primary"}
        className={classes.button}
        disableElevation
      >
        <Link to="/favorites" className={classes.link}>
          <StarsOutlined className={classes.icon} />
          <Typography>Favoritos</Typography>
        </Link>
      </Button>
    </Box>
  );
};

export default Header;
