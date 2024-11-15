import { useState } from "react";

const usePropertyFilter = (propertiesData) => {
  const [filter, setFilter] = useState({
    names: [],
    amenities: [],
    locations: [],
    priceRange: [0, 500],
    ratings: [],
    propertyType: [],
  });
  const [sortCriteria, setSortCriteria] = useState("name");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const uniqueNames = [
    ...new Set(propertiesData.map((property) => property.name)),
  ];
  const uniqueAmenities = [
    ...new Set(propertiesData.map((property) => property.amenities)),
  ];
  const uniqueLocations = [
    ...new Set(propertiesData.map((property) => property.location)),
  ];
  const uniqueRatings = [
    ...new Set(propertiesData.map((property) => property.rating)),
  ];
  const uniquePropertyTypes = [
    ...new Set(propertiesData.map((property) => property.propertyType)),
  ];

  const filteredProperties = propertiesData.filter(
    (property) =>
      (filter.names.length === 0 || filter.names.includes(property.name)) &&
      (filter.amenities.length === 0 ||
        filter.amenities.includes(property.amenities)) &&
      (filter.locations.length === 0 ||
        filter.locations.includes(property.location)) &&
      property.price >= filter.priceRange[0] &&
      property.price <= filter.priceRange[1] &&
      (filter.ratings.length === 0 ||
        filter.ratings.includes(property.rating)) &&
      (filter.propertyType.length === 0 ||
        filter.propertyType.includes(property.propertyType))
  );

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortCriteria === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortCriteria === "price") {
      return a.price - b.price;
    } else if (sortCriteria === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProperties = sortedProperties.slice(startIndex, endIndex);

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

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
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
      amenities: [],
      locations: [],
      priceRange: [0, 500],
      ratings: [],
      propertyType: [],
    });
    setSortCriteria("name");
    setItemsPerPage(10);
    setCurrentPage(1);
  };

  return {
    filter,
    sortCriteria,
    itemsPerPage,
    currentPage,
    uniqueNames,
    uniqueAmenities,
    uniqueLocations,
    uniqueRatings,
    uniquePropertyTypes,
    filteredProperties,
    sortedProperties,
    totalPages,
    startIndex,
    endIndex,
    paginatedProperties,
    handleCheckboxChange,
    handleSortChange,
    handlePriceRangeChange,
    handleItemsPerPageChange,
    handlePageChange,
    handlePreviousPage,
    handleNextPage,
    handleClearFilters,
  };
};

export default usePropertyFilter;
