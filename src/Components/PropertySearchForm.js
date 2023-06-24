import React, { useState } from "react";
import { PropertyContext } from "./PropertyContext";
import "../Css/PropertySearchForm.css";

const PropertySearchForm = () => {
  const { searchProperties } = React.useContext(PropertyContext);
  const [searchCriteria, setSearchCriteria] = useState({
    location: "",
    price: "",
    type: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    searchProperties(searchCriteria);
  };

  return (
    <div className="property-search-form">
      <h3>Property Search</h3>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchCriteria.location}
          onChange={(e) =>
            setSearchCriteria({ ...searchCriteria, location: e.target.value })
          }
          placeholder="Location"
        />
        <input
          type="number"
          value={searchCriteria.price}
          onChange={(e) =>
            setSearchCriteria({ ...searchCriteria, price: e.target.value })
          }
          placeholder="Price"
        />
        <input
          type="text"
          value={searchCriteria.type}
          onChange={(e) =>
            setSearchCriteria({ ...searchCriteria, type: e.target.value })
          }
          placeholder="Type"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default PropertySearchForm;
