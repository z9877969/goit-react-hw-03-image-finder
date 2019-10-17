import React from "react";
// import PropTypes from "prop-types";
import SearchForm from "../SearchForm/SearchForm";
import Gallery from "../Gallery/Gallery";
import Modal from "../Modal/Modal";
import * as API from "../../services/gallery-API";

// const instance = axios.create({
//   baseURL: "https://pixabay.com/api/?image_type=photo&orientation=horizontal"
// });

// const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=${key}`;

class ImageFinder extends React.Component {
  state = {
    gallery: [],
    query: "",
    pageNumber: 1
  };

  componentDidMount = () => {
    // console.log(this.getRequest());
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { gallery } = this.state;
    if (gallery !== prevState.gallery) {
      this.setState({
        gallery
      });
    }
  };

  handlerSubmit = e => {
    e.preventDefault();
    console.dir(e.target);
    const { query, pageNumber } = this.state;
    const inputQuery = e.target.children[0].value;
    return API.fetchGallery(query, pageNumber).then(gallery =>
      this.setState(prev => ({
        gallery,
        query: inputQuery,
        pageNumber: 1
      }))
    );
  };

  render() {
    console.log(this.state);
    const { gallery } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.handlerSubmit} />
        <Gallery gallery={gallery} />
        <Modal />
      </div>
    );
  }
}

// ImageFinder.propTypes = {
//   // bla: PropTypes.string,
// };

export default ImageFinder;
