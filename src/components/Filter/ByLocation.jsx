import PropTypes from "prop-types";

export default function ByLocation({
  uniqueLocations,
  filter,
  handleCheckboxChange,
}) {
  return (
    <div className="box-collapse scrollFilter">
      <ul className="list-filter-checkbox">
        {uniqueLocations.map((location) => (
          <li key={location}>
            <label className="cb-container">
              <input
                type="checkbox"
                checked={filter.locations.includes(location)}
                onChange={handleCheckboxChange("locations", location)}
              />
              <span className="text-sm-medium">{location}</span>
              <span className="checkmark" />
            </label>
            <span className="number-item">{location.length}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

ByLocation.propTypes = {
  uniqueLocations: PropTypes.arrayOf(PropTypes.string).isRequired,
  filter: PropTypes.shape({
    locations: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};
