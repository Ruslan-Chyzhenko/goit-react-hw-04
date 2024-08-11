import css from "./SearchBar.module.css";

export default SearchBar = ({ onSabmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;

    // Якщо текстове поле порожнє, виводимо повідомлення
    // і припиняємо виконання функції.
    if (form.elements.topic.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }

    // У протилежному випадку викликаємо пропс
    // і передаємо йому значення поля
    onSabmit(topic);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

// export default function SearchBox({ value, onFilter }) {
//   return (
//     <div className={css.searchBoxContainer}>
//       <p className={css.labelSearch}>Find contacts by name</p>
//       <input
//         type="text"
//         className={css.searchInput}
//         value={value}
//         onChange={(e) => onFilter(e.target.value)}
//       />
//     </div>
//   );
// }
