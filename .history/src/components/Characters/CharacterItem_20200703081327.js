import React from "react";

const CharacterItem = ({ item }) => {
  return <div>
    <div className="card">
        <div className="card-inner">
            <div className="card-front">
                <img src={item.img} alt=""/>
            </div>
            <div className="card-back">
                <h1>{</h1>
            </div>
        </div>
    </div>
    
  </div>;
};

export default CharacterItem;
