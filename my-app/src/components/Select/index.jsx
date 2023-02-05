const Select = ({ options = [], onSelect, defaultOption }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {options.map((option) => (
        <option key={option.text} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export { Select };
