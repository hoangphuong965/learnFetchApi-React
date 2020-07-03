import React from "react";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <>
          <h1 key={item.char}>{item.name}</h1>
          <img src={item.img} alt="" className="card img"/>
        </>
      ))}
    </section>
  );
};

export default CharacterGrid;
