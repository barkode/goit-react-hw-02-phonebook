import PropType from 'prop-types';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <>
      <h3>Find abonent by Name</h3>
      <input
        type="text"
        name="filter"
        title="To find abonent enter they name"
        placeholder="Searching ....."
        value={filter}
        onChange={onFilterChange}
      ></input>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropType.string.isRequired,
  onFilterChange: PropType.func.isRequired,
};
