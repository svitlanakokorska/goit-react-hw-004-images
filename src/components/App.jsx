import { useState, useEffect } from 'react';
import getSearch from 'services/pixabay-api';
import '../index.css';
import Searchbar from './Searchbar/Searchbar';
import Section from './Section/Section';
import ImageGallery from './ImageGallery/ImageGallery';
import ButtonLoadMore from './ButtonLoadMore/ButtonLoadMore';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';


const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastPage, setLastPage] = useState(0);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState({
    showModal: false,
    largeImageURL: '',
  });
  const [noResults, setNoResults] = useState(false);

  const handleChange = event => {
    setInputValue(event.target.value);
  };
  const ButtonClear = () => {
    setInputValue('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue === '') {
      alert('Please enter your query');
      return;
    }

    if (query === inputValue) return;
    setImages([]);
    setQuery(inputValue);
    setPage(1);
  };

  const clickLoad = () => {
    setPage(prevState => prevState + 1);
  };

  const togleModal = () => {
    setModal(prevState => ({ ...prevState, showModal: !prevState.showModal }));
  };

  const openModal = largeImageURL => {
    setModal(prevState => ({ ...prevState, largeImageURL }));
    togleModal();
  };

  useEffect(() => {
    if (page === 0) return;

    const getFunc = async searchQuery => {
      setIsLoading(true);
      setError(null);
      setNoResults(false);

      try {
        const response = await getSearch(searchQuery, page);
        setImages(prevState => [...prevState, ...response.hits]);
        setLastPage(Math.ceil(response.totalHits / 12));
        response.totalHits === 0 && setNoResults(true);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getFunc(query);
  }, [page, query]);

  return (
    <div className="App">
      <Searchbar
        onSubmit={handleSubmit}
        onChange={handleChange}
        ButtonClear={ButtonClear}
        inputValue={inputValue}
              />
      <Section>
        {error && 
          <p className="alertStyle">Something went wrong: {error.message}</p>
        }
        {noResults && <p className="alertStyle">No results found</p>}

        {isLoading && <Loader />}

        <ImageGallery images={images} onImageClick={openModal} />
      </Section>

      {page < lastPage && !isLoading ? (
        <ButtonLoadMore label="Load more" clickLoad={clickLoad} />
      ) : (
        <div style={{ height: 40 }}></div>
      )}

      {modal.showModal && 
        <Modal onClose={togleModal} largeImageURL={modal.largeImageURL} />
      }
    </div>
  );
};

export default App;
