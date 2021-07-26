import axios from "axios";

import { CharacterResponseProps, FilmProps } from "../interfaces";

const api = axios.create({
  baseURL: "https://swapi.dev/api/",
});

const starWarsApi = {
  async getCharacter(name: string) {
    return await api
      .get<CharacterResponseProps>("people", { params: { search: name } })
      .then((resp) => {
        return resp?.data?.results;
      });
  },

  async getFilm(id: string) {
    return await api.get<FilmProps>(`films/${id}`).then((resp) => {
      return resp?.data;
    });
  },
};

export default starWarsApi;
