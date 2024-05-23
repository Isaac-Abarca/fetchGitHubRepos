/* eslint-disable react/prop-types */
import './RepoCard.css';
import truncateText from '../../utils/truncateText';

const RepoCard = ({ repo, openModal }) => (
  <div className="repo-card">
    <h2>{repo.name}</h2>
    <p className="description">{truncateText(repo.description, 50)}</p>
    <button onClick={() => openModal(repo)}>View More</button>
  </div>
);

export default RepoCard;