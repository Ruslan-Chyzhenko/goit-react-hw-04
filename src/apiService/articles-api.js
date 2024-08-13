import axios from "axios";

const API_KEY = "k8i1H239r5K4ALBVTFvwlJvdYEUFhownQy3kYDvve-o";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;

export const fetchImagesWithTopic = async (query, page = 1) => {
  const { data } = await axios.get(`search/photos`, {
    params: {
      query,
      page,
      per_page: 15,
      orientation: "landscape",
    },
  });
  return data;
};
