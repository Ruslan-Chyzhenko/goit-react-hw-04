import { useState, useEffect } from "react";
import { fetchImagesWithTopic } from "../../apiService/articles-api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import css from "../App/App.module.css";

const notify = () => toast("Here is your toast.");

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const data = await fetchImagesWithTopic("react", 1);
        setImages(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setPage(1);
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchImagesWithTopic(query, 1);
      setImages(data.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (page === 1) return;

    async function fetchMoreImages() {
      try {
        setLoading(true);
        const data = await fetchImagesWithTopic(searchQuery, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMoreImages();
  }, [page, searchQuery]);

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageData) => {
    setSelectedImage(imageData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={css.container}>
      <h1>Gallery</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {images.length > 0 && <LoadMoreBtn onClick={loadMoreImages} />}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageData={selectedImage}
      />
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
}
