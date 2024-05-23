/* eslint-disable react/prop-types */
import './RepoModal.css';

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
);

export default RepoModal;