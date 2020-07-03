import React, { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");

//   handel = () => {
//       console.log("hello")
//   };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Charters"
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
