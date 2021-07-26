import React, { FC, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Typography,
} from "@material-ui/core";
import { StarsOutlined } from "@material-ui/icons";
import moment from "moment";

import { Header, Snackbar } from "../../components";
import { useFavorites } from "../../hooks";
import {
  CharacterRouteProps,
  FilmProps,
  SnackbarProps,
} from "../../interfaces";
import starWarsApi from "../../services/starWarsApi";
import useStyles from "./styles";

const Details: FC<CharacterRouteProps> = (props) => {
  const classes = useStyles();
  const { saveFavorite } = useFavorites();
  const [loading, setLoading] = useState(true);
  const [film, setFilm] = useState<FilmProps>();
  const [films, setFilms] = useState<FilmProps[]>([]);
  const character = props.location.state.character;
  const [snackbar, setSnackbar] = useState<SnackbarProps>({});

  const handleSaveClick = () => {
    saveFavorite(character);

    setSnackbar({
      open: true,
      message: "Personagem salvo nos favoritos",
      type: "success",
      onClose: () => setSnackbar({ open: false }),
    });
  };

  useEffect(() => {
    setLoading(true);

    character.films.forEach((filmUrl, index) => {
      const splitUrl = filmUrl.split("/");
      const filmId = splitUrl[splitUrl.length - 2];

      starWarsApi.getFilm(filmId).then((film) => {
        setFilm(film);
      });

      if (index === character.films.length - 1) {
        setLoading(false);
      }
    });
  }, [character.films]);

  useEffect(() => {
    if (!film) return;

    const arrayFilms: FilmProps[] = films;

    arrayFilms.push(film);
    setFilms(arrayFilms);

    // eslint-disable-next-line
  }, [film]);

  return (
    <Box className={classes.root}>
      <Header />

      <Box className={classes.content}>
        {loading ? (
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgress size={100} />
          </Box>
        ) : (
          <Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h5">{character.name}</Typography>

              <Box display="flex">
                <Button variant="contained" size="small" disableElevation>
                  <Link to="/" className={classes.link}>
                    <Typography style={{ fontSize: "14px" }}>
                      Cancelar
                    </Typography>
                  </Link>
                </Button>

                <Box ml={2}>
                  <Button
                    onClick={handleSaveClick}
                    variant="contained"
                    color="primary"
                    size="small"
                    disableElevation
                  >
                    <StarsOutlined />
                    Salvar
                  </Button>
                </Box>
              </Box>
            </Box>

            <Divider />

            <Box mt={5}>
              <Typography variant="h5">Informações</Typography>

              <Box
                mt={3}
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  mr={2}
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-end"
                >
                  <Typography component="div">
                    <Box fontWeight="fontWeightBold">Altura</Box>
                  </Typography>
                  <Typography component="div">
                    <Box fontWeight="fontWeightBold">Peso</Box>
                  </Typography>
                  <Typography component="div">
                    <Box fontWeight="fontWeightBold">Genero</Box>
                  </Typography>
                </Box>

                <Box>
                  <Typography>{character.mass}Kg</Typography>
                  <Typography>{character.height}</Typography>
                  <Typography>{character.gender}</Typography>
                </Box>
              </Box>
            </Box>

            <Box mt={5}>
              <Typography variant="h5">Filmes</Typography>

              <Box
                mt={3}
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                {films.map((film, index) => {
                  return (
                    <Box
                      key={index}
                      width="100%"
                      display="flex"
                      justifyContent="center"
                    >
                      <Box
                        mr={2}
                        display="flex"
                        justifyContent="flex-end"
                        width="100%"
                      >
                        <Typography component="div">
                          <Box fontWeight="fontWeightBold">
                            {moment(film.release_date).year()}
                          </Box>
                        </Typography>
                      </Box>

                      <Box width="100%">
                        <Typography>{film.title}</Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      <Snackbar {...snackbar} />
    </Box>
  );
};

export default Details;
