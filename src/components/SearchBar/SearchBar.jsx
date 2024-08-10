import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchBoxContainer}>
      <p className={css.labelSearch}>Find contacts by name</p>
      <input
        type="text"
        className={css.searchInput}
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
