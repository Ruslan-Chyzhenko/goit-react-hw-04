import css from "./ImageCard.module.css";

const ImageCard = ({ src, alt, avgColor, openModal, imageData }) => {
  return (
    <li className={css.gridItem}>
      <div
        className={css.thumb}
        style={{
          backgroundColor: avgColor,
          borderColor: avgColor,
        }}
      >
        <img
          src={src}
          alt={alt}
          onClick={() => openModal(imageData)}
          className={css.image}
        />
      </div>
    </li>
  );
};

export default ImageCard;
