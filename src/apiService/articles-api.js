import axios from "axios";

const API_KEY = { KEY };
axios.defaults.baseURL = "https://unsplash.com/developers/";
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
