interface CharacterProps {
  name: string;
  height: string;
  mass: string;
  gender: string;
  films: string[];
}

interface CharacterResponseProps {
  results: CharacterProps[];
}

export type { CharacterProps, CharacterResponseProps };
