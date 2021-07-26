import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Box, Button, Typography } from "@material-ui/core";

import Header from "../../components/Header";
import { useFavorites } from "../../hooks";
import { CharacterProps } from "../../interfaces";
import useStyles from "./styles";

const Favorites = () => {
  const classes = useStyles();
  const history = useHistory();
  const { getFavorites, removeFavorite } = useFavorites();
  const [favorites, setFavorites] = useState(getFavorites());

  const handleClickDetails = (character: CharacterProps) => {
    history.push({ pathname: "/details", state: { character } });
  };

  const handleClickRemove = (name: string) => {
    removeFavorite(name);
    setFavorites(getFavorites());
  };

  return (
    <Box className={classes.root}>
      <Header />

      <Box className={classes.content}>
        <Typography variant="h4">Personagens Salvos</Typography>

        {favorites.map((favorite, index) => {
          return (
            <Box
              key={index}
              mt={3}
              display="flex"
              justifyContent="space-between"
            >
              <Typography variant="h5">{favorite.name}</Typography>

              <Box display="flex">
                <Button
                  variant="contained"
                  disableElevation
                  onClick={() => handleClickDetails(favorite)}
                >
                  Ver detalhes
                </Button>

                <Box ml={2}>
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={() => handleClickRemove(favorite.name)}
                  >
                    Apagar
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Favorites;
