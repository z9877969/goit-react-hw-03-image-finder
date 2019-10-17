import React from "react";
// import PropTypes from "prop-types";
import style from "./photoCard.module.css";

const PhotoCard = item => (
  <div className={style.photoCard}>
    <img src={item.pageURL} alt="" />

    <div className={style.stats}>
      <p className={style.statsItem}>
        <i className="material-icons">thumb_up</i>
        1108
      </p>
      <p className={style.statsItem}>
        <i className="material-icons">visibility</i>
        320321
      </p>
      <p className={style.statsItem}>
        <i className="material-icons">comment</i>
        129
      </p>
      <p className={style.statsItem}>
        <i className="material-icons">cloud_download</i>
        176019
      </p>
    </div>

    {/* <!-- Кнопка для открытия модалки с большим изображением, появляется при наведении --> */}
    <button type="button" className={style.fullscreenButton}>
      <i className="material-icons">zoom_out_map</i>
    </button>
  </div>
);

// PhotoCard.propTypes = {
//   // bla: PropTypes.string,
// };

// PhotoCard.defaultProps = {
//   // bla: 'test',
// };

export default PhotoCard;
