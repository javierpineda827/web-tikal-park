import PropTypes from "prop-types";

export default function ByActivities({
  uniqueActivities,
  filter,
  handleCheckboxChange,
}) {
  return (
    <div className="box-collapse scrollFilter">
      <ul className="list-filter-checkbox">
        {uniqueActivities.map((activity) => (
          <li key={activity}>
            <label className="cb-container">
              <input
                type="checkbox"
                checked={filter.activities.includes(activity)}
                onChange={handleCheckboxChange("activities", activity)}
              />
              <span className="text-sm-medium">{activity}</span>
              <span className="checkmark" />
            </label>
            <span className="number-item">{activity.length}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

ByActivities.propTypes = {
  uniqueActivities: PropTypes.arrayOf(PropTypes.string).isRequired,
  filter: PropTypes.shape({
    activities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};
