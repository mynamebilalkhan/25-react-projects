const Suggestions = ({ data, onSuggestionClick }) => {
  return (
    <div>
      <ul className="suggestions-dropdown">
        {data?.map((user, index) => (
          <li onClick={onSuggestionClick} key={index}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
