import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ tasks, onDelete }) {
  return (
    <div className={css.gridContainer}>
      {tasks.map((task) => (
        <li className={css.item} key={task.id}>
          <ImageCard data={task} onDelete={onDelete} />
        </li>
      ))}
    </div>
  );
}
