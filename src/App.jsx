/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import RepoGallery from '../src/components/RepoGallery/RepoGallery';
import RepoModal from '../src/components/RepoModal/RepoModal';
import Loading from '../src/components/Loading/Loading';
import Error from '../src/components/Error/Error';
import { fetchRepos } from '../src/services/api';
import SearchBar from '../src/components/SearchBar/SearchBar';
import './App.css';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [username, setUsername] = useState('Isaac-Abarca');
  const [inputValue, setInputValue] = useState('Isaac-Abarca');

  const getRepos = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchRepos(username);
      setRepos(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRepos(username);
  }, [username]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setUsername(inputValue);
  };

  const openModal = (repo) => {
    setSelectedRepo(repo);
  };

  const closeModal = () => {
    setSelectedRepo(null);
  };

  return (
    <div className="app">
      <SearchBar 
        inputValue={inputValue} 
        handleInputChange={handleInputChange} 
        handleSearch={handleSearch} 
      />
      {loading && <Loading />}
      {error && <Error error={error} />}
      {!loading && !error && (
        <RepoGallery repos={repos} openModal={openModal} />
      )}
      {selectedRepo && <RepoModal repo={selectedRepo} closeModal={closeModal} />}
    </div>
  );
};

export default App;