import React from "react";
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <>
          <char key={item.char_id}>{item.name}</char>
        </>
      ))}
    </section>
  );
};

export default CharacterGrid;
