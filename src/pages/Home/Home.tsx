import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Box,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

import starWars from "../../assets/starWars.png";
import Header from "../../components/Header";
import { CharacterProps } from "../../interfaces";
import starWarsApi from "../../services/starWarsApi";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const [name, setName] = useState("");
  const [characters, setCharacters] = useState<CharacterProps[]>([]);

  const handleSearch = () => {
    starWarsApi
      .getCharacter(name)
      .then((resp) => {
        setCharacters(resp);
      })
      .catch(() => {});
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleKeyUp = (key: KeyboardEvent<HTMLDivElement>) => {
    if (!name) return;

    handleSearch();
  };

  const handleCharacterSelect = (character: CharacterProps) => {
    history.push({ pathname: "/details", state: { character } });
  };

  return (
    <Box className={classes.root}>
      <Header />

      <Box className={classes.content}>
        <img src={starWars} alt="starWars" className={classes.img} />

        <TextField
          value={name}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          label="Personagem"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            ),
          }}
          fullWidth
        />

        <Paper className={classes.charactersBox}>
          {characters.map((character, index) => {
            return (
              <Box
                key={index}
                className={classes.character}
                onClick={() => handleCharacterSelect(character)}
              >
                <Typography className={classes.characterText}>
                  {character.name}
                </Typography>
              </Box>
            );
          })}
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
