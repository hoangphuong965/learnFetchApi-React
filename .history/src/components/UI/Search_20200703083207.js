import React, { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Charters"
          autoFocus
          value={text}
          onChange={}
        />
      </form>
    </section>
  );
};

export default Search;
