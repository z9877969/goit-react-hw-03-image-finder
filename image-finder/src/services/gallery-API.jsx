import axios from "axios";

const key = "13965574-3ae6669f35304ffc6cddc1b72";

export const fetchGallery = (query, pageNumber) => {
  return axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${pageNumber}&per_page=12&key=${key}`
    )
    .then(response => response.data.hits)
    .catch(err => console.log(err));
};
