import PropType from 'prop-types';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      <p>Find abonent by Name</p>
      <input
        type="text"
        name="filter"
        title="To find abonent enter they name"
        placeholder="Searching ....."
        value={filter}
        onChange={onFilterChange}
      ></input>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropType.string.isRequired,
  onFilterChange: PropType.func.isRequired,
};
