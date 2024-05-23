/* eslint-disable react/prop-types */
import './SearchBar.css';

const SearchBar = ({ inputValue, handleInputChange, handleSearch }) => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;