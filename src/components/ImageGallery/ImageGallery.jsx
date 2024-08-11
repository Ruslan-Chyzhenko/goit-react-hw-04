import ImageCard from "../ImageCard/ImageCard";
import { Grid, ImageCard } from "..";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ images, openModal }) => {
  return (
    <Grid className={css.gridContainer}>
      {images.map(({ id, src, alt, avg_color }) => (
        <ImageCard
          key={id}
          src={src}
          alt={alt}
          avgColor={avg_color}
          openModal={openModal}
        />
      ))}
    </Grid>
  );
};
