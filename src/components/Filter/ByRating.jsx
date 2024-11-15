export default function ByRating({
  uniqueRatings,
  filter,
  handleCheckboxChange,
}) {
  return (
    <>
      <div className="box-collapse scrollFilter">
        <ul className="list-filter-checkbox">
          {uniqueRatings.map((rating) => (
            <li key={rating}>
              <label className="cb-container">
                <input
                  type="checkbox"
                  checked={filter.ratings.includes(rating)}
                  onChange={handleCheckboxChange("ratings", rating)}
                />
                {rating} stars
                <span className="text-sm-medium">
                  <img
                    src="/imgs/template/icons/star-yellow.svg"
                    alt="Travila"
                  />
                  <img
                    src="/imgs/template/icons/star-yellow.svg"
                    alt="Travila"
                  />
                  <img
                    src="/imgs/template/icons/star-yellow.svg"
                    alt="Travila"
                  />
                  <img
                    src="/imgs/template/icons/star-yellow.svg"
                    alt="Travila"
                  />
                  <img
                    src="/imgs/template/icons/star-yellow.svg"
                    alt="Travila"
                  />
                </span>
                <span className="checkmark" />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
