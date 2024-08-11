import axios from "axios";

// axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

// export const fetchArticlesWithTopic = async (topic) => {
//   const response = await axios.get(`/search?query=${topic}`);
//   return response.data.hits;
// };

const API_KEY = "563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74";
axios.defaults.baseURL = "https://unsplash.com/developers/";
axios.defaults.headers.common["Authorization"] = API_KEY;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);

  return data;
};
