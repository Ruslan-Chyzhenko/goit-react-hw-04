import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.gridContainer}>
      {images.map(({ id, urls, alt_description, avg_color, image }) => (
        <ImageCard
          key={id}
          src={urls.small}
          alt={alt_description}
          avgColor={avg_color}
          openModal={openModal}
          imageData={image}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
