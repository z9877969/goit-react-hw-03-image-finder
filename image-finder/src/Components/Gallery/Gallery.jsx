import React from "react";
// import PropTypes from "prop-types";
import PhotoCard from "../PhotoCard/PhotoCard";
import style from "./gallery.module.css";

const Gallery = gallery => (
  <div>
    <ul className={style.gallery}>
      {gallery.length > 0 &&
        gallery.map(galleryItem => (
          <li key={galleryItem.id}>
            <PhotoCard item={galleryItem} />
          </li>
        ))}
    </ul>
    <button type="button" className={style.button}>
      Load more
    </button>
  </div>
);

// Gallery.propTypes = {
//   // bla: PropTypes.string,
// };

// Gallery.defaultProps = {
//   // bla: 'test',
// };

export default Gallery;
