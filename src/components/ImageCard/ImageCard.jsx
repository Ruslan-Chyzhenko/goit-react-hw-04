import { GridItem } from "..";
import css from "./ImageCard.module.css";

export const ImageCard = ({ src, alt, avgColor, openModal }) => {
  return (
    <GridItem>
      <div
        className={css.thumb}
        style={{
          backgroundColor: avgColor,
          borderColor: avgColor,
        }}
      >
        <img
          src={src.large}
          alt={alt}
          onClick={() => openModal(src.large, alt)}
        />
      </div>
    </GridItem>
  );
};
