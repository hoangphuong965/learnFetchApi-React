import React, { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");

  const handel = () =>{

  }

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Charters"
          autoFocus
          value={text}
          onChange={this.handel}
        />
      </form>
    </section>
  );
};

export default Search;
