import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, closeModal, imageData }) => {
  if (!imageData) return null;

  const {
    urls = {},
    alt_description = "",
    user = {},
    likes = 0,
    description = "",
  } = imageData;

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      className={css.modal}
      style={customStyles}
      overlayClassName={css.overlay}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
    >
      <img
        src={urls.regular || ""}
        alt={description || alt_description}
        className={css.image}
      />
      <div className={css.details}>
        <h2>{description || alt_description}</h2>
        <p>Autor: {user.name || "Unknown"}</p>
        <p>Likes: {likes}</p>
        {user.bio && <p>About: {user.bio}</p>}
        <a
          href={user.links?.html || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          The Autor's Profile
        </a>
      </div>
      <button onClick={closeModal} className={css.closeBtn}>
        Close
      </button>
    </Modal>
  );
};

export default ImageModal;
