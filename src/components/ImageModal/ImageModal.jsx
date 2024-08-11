import Modal from "react-modal";

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

const ImageModal = ({ modalIsOpen, closeModal, imageData }) => {
  if (!imageData) return null;

  const { urls, alt_description, user, likes, description } = imageData;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      overlayClassName={css.overlay}
      contentLabel="Image Modal"
    >
      <img src={urls.regular} alt={alt_description} className={css.image} />
      <div className={css.details}>
        <h2>{description || alt_description}</h2>
        <p>Autor: {user.name}</p>
        <p>Likes: {likes}</p>
        {user.bio && <p>About: {user.bio}</p>}
        <a href={user.links.html} target="_blank" rel="noopener noreferrer">
          The Autor's Profile
        </a>
      </div>
      <button onClick={onRequestClose} className={css.closeBtn}>
        Close
      </button>
    </Modal>
  );
};

export default ImageModal;
