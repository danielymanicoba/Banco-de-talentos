import { CharCard } from "../CharCard";

export const CharacterList = ({ characters }) => {
  
  const list = characters.results?.map((char) => (
    <CharCard
      name={char.name}
    />
  ));

  return <ul>{list}</ul>;
};