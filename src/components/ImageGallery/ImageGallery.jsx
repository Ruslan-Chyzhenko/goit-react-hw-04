import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ tasks, onDelete }) {
  return (
    <div className={css.gridContainer}>
      {tasks.map((task) => (
        <li className={css.item} key={task.id}>
          <Contact data={task} onDelete={onDelete} />
        </li>
      ))}
    </div>
  );
}
