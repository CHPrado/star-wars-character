import { CharacterProps } from "../../interfaces";

const useFavorites = () => {
  const getFavorites = () => {
    return (
      (JSON.parse(
        localStorage.getItem("favorite-characters") as string
      ) as CharacterProps[]) || []
    );
  };

  const saveFavorite = (character: CharacterProps) => {
    const favorites = getFavorites();

    if (
      !favorites.some((elem) => {
        return JSON.stringify(character) === JSON.stringify(elem);
      })
    ) {
      favorites.push(character);
    }

    localStorage.setItem("favorite-characters", JSON.stringify(favorites));
  };

  const removeFavorite = (name: string) => {
    let characters = getFavorites();

    characters = characters.filter((character) => {
      return character.name !== name;
    }) as CharacterProps[];

    localStorage.setItem("favorite-characters", JSON.stringify(characters));
  };

  return {
    getFavorites,
    saveFavorite,
    removeFavorite,
  };
};

export default useFavorites;
