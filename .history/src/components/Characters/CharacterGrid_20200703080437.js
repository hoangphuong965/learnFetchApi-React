import React from "react";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <>
          <h1>{item.name}</h1>
          <img src={item.img} alt=""/>
        </>
      ))}
    </section>
  );
};

export default CharacterGrid;
