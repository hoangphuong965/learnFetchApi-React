import React, { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");

    const onChange

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Charters"
          autoFocus
          value={text}
          onChange={(e) => onchange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
