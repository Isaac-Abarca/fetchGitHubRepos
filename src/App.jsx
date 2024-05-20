/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Isaac-Abarca/repos');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const openModal = (repo) => {
    setSelectedRepo(repo);
  };

  const closeModal = () => {
    setSelectedRepo(null);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="repo-gallery">
      {repos.map(repo => (
        <RepoCard key={repo.id} repo={repo} openModal={openModal} />
      ))}
      {selectedRepo && <RepoModal repo={selectedRepo} closeModal={closeModal} />}
    </div>
  );
}

const truncateText = (text, maxLength) => {
  if (!text) return 'No description available';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

const RepoCard = ({ repo, openModal }) => (
  <div className="repo-card">
    <h2>{repo.name}</h2>
    <p className="description">{truncateText(repo.description, 50)}</p>
    <button onClick={() => openModal(repo)}>View More</button>
  </div>
);

const RepoModal = ({ repo, closeModal }) => (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={closeModal}>&times;</span>
      <h2>{repo.name}</h2>
      <p>{repo.description || 'No description available'}</p>
      <p><strong>Language:</strong> {repo.language || 'N/A'}</p>
      <p><strong>Stars:</strong> {repo.stargazers_count}</p>
      <p><strong>Forks:</strong> {repo.forks_count}</p>
      <p><strong>Created at:</strong> {new Date(repo.created_at).toLocaleDateString()}</p>
      <p><strong>Last updated:</strong> {new Date(repo.updated_at).toLocaleDateString()}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View Repository</a>
    </div>
  </div>
)



export default App
