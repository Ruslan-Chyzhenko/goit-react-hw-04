import { useState, useEffect } from "react";
import { fetchArticlesWithTopic } from "../../apiService/articles-api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import css from "../App/App.module.css";

const notify = () => toast("Here is your toast.");

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        // 2. Використовуємо HTTP-функцію
        const data = await fetchArticlesWithTopic("react");
        setArticles(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  // // loading Contacts from the LocalStorage
  // useEffect(() => {
  //   const savedTasks = JSON.parse(localStorage.getItem("contacts")) || [];
  //   setTasks(savedTasks);
  // }, []);

  // // saved Contacts in the LocalStorage
  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(tasks));
  // }, [tasks]);

  // const addTask = (newTask) => {
  //   setTasks((prevTasks) => {
  //     return [...prevTasks, newTask];
  //   });
  // };

  // const deleteTask = (taskId) => {
  //   setTasks((prevTasks) => {
  //     return prevTasks.filter((task) => task.id !== taskId);
  //   });
  // };

  // const visibleTasks = tasks.filter((task) =>
  //   task.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div className={css.container}>
      <h1>Gallery</h1>
      <LoadMoreBtn />
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {articles.length > 0 && <ImageGallery items={images} />}
      {/* <ContactForm onAdd={addTask} /> */}
      {/* <SearchBox value={filter} onFilter={setFilter} /> */}
      <ImageGallery tasks={visibleTasks} onDelete={deleteTask} />
      <Loader />
      <ErrorMessage />
      <ImageModal />
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
}
