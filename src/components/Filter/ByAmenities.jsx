import PropTypes from "prop-types";

export default function ByAmenities({
  uniqueAmenities,
  filter,
  handleCheckboxChange,
}) {
  return (
    <div className="box-collapse scrollFilter">
      <ul className="list-filter-checkbox">
        {uniqueAmenities.map((amenity) => (
          <li key={amenity}>
            <label className="cb-container">
              <input
                type="checkbox"
                checked={filter.amenities.includes(amenity)}
                onChange={handleCheckboxChange("amenities", amenity)}
              />
              <span className="text-sm-medium">{amenity}</span>
              <span className="checkmark" />
            </label>
            <span className="number-item">{amenity.length}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

ByAmenities.propTypes = {
  uniqueAmenities: PropTypes.arrayOf(PropTypes.string).isRequired,
  filter: PropTypes.shape({
    amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};
