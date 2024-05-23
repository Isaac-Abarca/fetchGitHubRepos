const truncateText = (text, maxLength) => {
  if (!text) return "No description available";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export default truncateText;
