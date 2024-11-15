import { useState } from "react";

const useTourFilter = (toursData) => {
  const [filter, setFilter] = useState({
    names: [],
    activities: [],
    languages: [],
    attractions: [],
    priceRange: [0, 500],
    durationRange: [0, 30],
    ratings: [],
    groupSize: [],
  });
  const [sortCriteria, setSortCriteria] = useState("name");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const uniqueNames = [...new Set(toursData.map((tour) => tour.name))];
  const uniqueActivities = [
    ...new Set(toursData.map((tour) => tour.activities)),
  ];
  const uniqueLanguages = [...new Set(toursData.map((tour) => tour.language))];
  const uniqueAttractions = [
    ...new Set(toursData.map((tour) => tour.attraction)),
  ];
  const uniqueRatings = [...new Set(toursData.map((tour) => tour.rating))];
  const uniqueDurations = [...new Set(toursData.map((tour) => tour.duration))];
  const uniqueGroupSizes = [
    ...new Set(toursData.map((tour) => tour.groupSize)),
  ];

  const filteredTours = toursData.filter(
    (tour) =>
      (filter.names.length === 0 || filter.names.includes(tour.name)) &&
      (filter.activities.length === 0 ||
        filter.activities.includes(tour.activities)) &&
      (filter.languages.length === 0 ||
        filter.languages.includes(tour.language)) &&
      (filter.attractions.length === 0 ||
        filter.attractions.includes(tour.attraction)) &&
      tour.price >= filter.priceRange[0] &&
      tour.price <= filter.priceRange[1] &&
      tour.duration >= filter.durationRange[0] &&
      tour.duration <= filter.durationRange[1] &&
      (filter.ratings.length === 0 || filter.ratings.includes(tour.rating)) &&
      (filter.groupSize.length === 0 ||
        filter.groupSize.includes(tour.groupSize))
  );

  const sortedTours = [...filteredTours].sort((a, b) => {
    if (sortCriteria === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortCriteria === "price") {
      return a.price - b.price;
    } else if (sortCriteria === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedTours.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTours = sortedTours.slice(startIndex, endIndex);

  const handleCheckboxChange = (field, value) => (e) => {
    const checked = e.target.checked;
    setFilter((prevFilter) => {
      const values = prevFilter[field];
      if (checked) {
        return { ...prevFilter, [field]: [...values, value] };
      } else {
        return {
          ...prevFilter,
          [field]: values.filter((item) => item !== value),
        };
      }
    });
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  const handlePriceRangeChange = (values) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      priceRange: values,
    }));
  };

  const handleDurationRangeChange = (e) => {
    const { value, name } = e.target;
    setFilter((prevFilter) => {
      const durationRange = [...prevFilter.durationRange];
      durationRange[name === "minDuration" ? 0 : 1] = parseFloat(value);
      return {
        ...prevFilter,
        durationRange,
      };
    });
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClearFilters = () => {
    setFilter({
      names: [],
      activities: [],
      languages: [],
      attractions: [],
      priceRange: [0, 500],
      durationRange: [0, 30],
      ratings: [],
      groupSize: [],
    });
    setSortCriteria("name");
    setItemsPerPage(10);
    setCurrentPage(1);
  };

  const startItemIndex = (currentPage - 1) * itemsPerPage + 1;
  const endItemIndex = Math.min(
    startItemIndex + itemsPerPage - 1,
    sortedTours.length
  );

  return {
    filter,
    sortCriteria,
    itemsPerPage,
    currentPage,
    uniqueNames,
    uniqueActivities,
    uniqueLanguages,
    uniqueAttractions,
    uniqueRatings,
    uniqueDurations,
    uniqueGroupSizes,
    filteredTours,
    sortedTours,
    totalPages,
    startIndex,
    endIndex,
    paginatedTours,
    handleCheckboxChange,
    handleSortChange,
    handlePriceRangeChange,
    handleDurationRangeChange,
    handleItemsPerPageChange,
    handlePageChange,
    handlePreviousPage,
    handleNextPage,
    handleClearFilters,
    startItemIndex,
    endItemIndex,
  };
};

export default useTourFilter;
