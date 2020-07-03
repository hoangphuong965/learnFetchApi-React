import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div>
      <div className="card" key={item.char_id}>
        <div className="card-inner">
          <div className="card-front">
            <img src={item.img} alt="" />
          </div>
          <div className="card-back">
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Actor name:</strong> {item.portrayed}
              </li>
              <li>
                <strong>Nick name:</strong> {item.nickname}
              </li>
              <li>
                <strong>Birtday:</strong> {item.birthday}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
