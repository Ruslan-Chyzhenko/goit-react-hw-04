import { useState, useEffect } from "react";
import { fetchImagesWithTopic } from "../../apiService/articles-api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import css from "../App/App.module.css";
import ImageModal from "../ImageModal/ImageModal";

const notify = () => toast("Here is your toast.");

export default function App() {
  let subtitle;
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchImages = async () => {
      try {
        setLoading(true);
        const data = await fetchImagesWithTopic(searchQuery, page);
        setImages((prevImages) => {
          return page === 1 ? data.results : [...prevImages, ...data.results];
        });
        setShowBtn(data.total_pages && data.total_pages !== page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery, page]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageData) => {
    setSelectedImage(imageData);
    setIsOpen(true);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={css.appContainer}>
      <h1 className={css.mainTitle}>Gallery</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {showBtn && (
        <LoadMoreBtn onClick={loadMoreImages} className={css.loadMoreBtn} />
      )}
      <ImageModal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        imageData={selectedImage}
      />
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
}
