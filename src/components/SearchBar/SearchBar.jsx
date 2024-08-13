import css from "./SearchBar.module.css";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return toast.error("Please enter a search query!");
    }
    onSearch(query);
    setQuery("");
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
          className={css.input}
          name="search"
          required
        />
        <button className={css.button} type="submit">
          <FiSearch size="16px" />
        </button>
      </form>
    </header>
  );
}
