import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Box, Button, Typography } from "@material-ui/core";

import { Header, Snackbar } from "../../components";
import { useFavorites } from "../../hooks";
import { CharacterProps, SnackbarProps } from "../../interfaces";
import useStyles from "./styles";

const Favorites = () => {
  const classes = useStyles();
  const history = useHistory();
  const { getFavorites, removeFavorite } = useFavorites();
  const [favorites, setFavorites] = useState(getFavorites());
  const [snackbar, setSnackbar] = useState<SnackbarProps>({});

  const handleClickDetails = (character: CharacterProps) => {
    history.push({ pathname: "/details", state: { character } });
  };

  const handleClickRemove = (name: string) => {
    removeFavorite(name);
    setFavorites(getFavorites());

    setSnackbar({
      open: true,
      message: "Personagem removido dos favoritos",
      type: "success",
      onClose: () => setSnackbar({ open: false }),
    });
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

      <Snackbar {...snackbar} />
    </Box>
  );
};

export default Favorites;
