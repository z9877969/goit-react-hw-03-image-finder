import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import Modal from '../Modal/Modal';
import fetchGallery from '../../services/gallery-API';

class ImageFinder extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    gallery: [],
    query: '',
    pageNumber: 1,
    pageHeight: 0,
    id: '',
    isModalOpen: false,
  };

  galleryItems = React.createRef();

  componentDidMount = () => {
    document.addEventListener('keydown', this.handlerCloseModal);
    document.addEventListener('click', this.handlerCloseModal);
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { gallery, pageNumber } = this.state;
    if (gallery !== prevState.gallery && pageNumber === 1) {
      this.setPageHeight(this.getPageHeight());
    }
  };

  getPageHeight = () => {
    const { current } = this.galleryItems;
    return (
      current.childNodes[0].clientHeight +
      current.childNodes[1].clientHeight -
      20
    );
  };

  setPageHeight = pageHeight => this.setState({ pageHeight });

  scrollToNewItems = () => {
    const { pageHeight } = this.state;
    window.scrollTo({
      top: pageHeight,
      behavior: 'smooth',
    });
    this.setState({
      pageHeight: this.getPageHeight(),
    });
  };

  getItemById = id => {
    const { gallery } = this.state;

    return gallery.find(item => String(item.id) === String(id));
  };

  handlerSubmit = e => {
    e.preventDefault();
    const pageNumber = 1;
    const inputQuery = e.target.children[0].value;

    return fetchGallery(inputQuery, pageNumber).then(gallery => {
      this.setState({
        gallery,
        query: inputQuery,
        pageNumber: 1,
        pageHeight: this.getPageHeight(),
      });
    });
  };

  handlerAddNewItems = () => {
    const { query, pageNumber } = this.state;
    const nextPageNumber = pageNumber + 1;

    return fetchGallery(query, nextPageNumber)
      .then(gallery =>
        this.setState(prev => ({
          gallery: [...prev.gallery, ...gallery],
          pageNumber: nextPageNumber,
        })),
      )
      .then(() => this.scrollToNewItems())
      .catch(err => err);
  };

  handlerGetItemId = ({ target }) => {
    return this.setState({
      id: target.closest('li').id,
      isModalOpen: true,
    });
  };

  handlerCloseModal = e => {
    const { isModalOpen, id } = this.state;

    return e.target.dataset.id === 'modal' ||
      e.key === 'esc' ||
      e.key === 'Escape'
      ? this.setState({
          isModalOpen: false,
          id: '',
        })
      : this.setState({
          isModalOpen,
          id,
        });
  };

  render() {
    const { gallery, id, isModalOpen } = this.state;

    return (
      <div ref={this.galleryItems}>
        <SearchForm onSubmit={this.handlerSubmit} />
        <Gallery
          gallery={gallery}
          onButtonLoad={this.handlerAddNewItems}
          onGetItemId={this.handlerGetItemId}
        />

        {isModalOpen && <Modal id={id} getItemById={this.getItemById} />}
      </div>
    );
  }
}

export default ImageFinder;
