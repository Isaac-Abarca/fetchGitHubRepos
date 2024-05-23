/* eslint-disable react/prop-types */
import RepoCard from '../RepoCard/RepoCard';
import './RepoGallery.css';

const RepoGallery = ({ repos, openModal }) => (
  <div className="repo-gallery">
    {repos.map(repo => (
      <RepoCard key={repo.id} repo={repo} openModal={openModal} />
    ))}
  </div>
);

export default RepoGallery;