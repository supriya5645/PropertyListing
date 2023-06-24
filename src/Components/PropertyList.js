import React, { useContext, useState } from "react";
import { PropertyContext } from "./PropertyContext";
import PropertyItem from "./PropertyItem";
import SavedProperties from "./SavedProperties";
import "../Css/PropertyList.css";

const PropertyList = () => {
  const { properties, savedProperties, showMySavedProperties } =
    useContext(PropertyContext);
  const [showSavedProperties, setShowSavedProperties] = useState(false);
  const [showAllProperties, setShowAllProperties] = useState(true);

  const handleShowSavedProperties = () => {
    setShowSavedProperties(true);
    showMySavedProperties();
    setShowAllProperties(false);
  };

  const handleShowAllProperties = () => {
    setShowSavedProperties(false);
    setShowAllProperties(true);
  };

  return (
    <div className="property-listings-container">
      <h3>Property Listings</h3>
      <button
        className="show-saved-properties-btn"
        onClick={handleShowSavedProperties}
      >
        Show Saved Properties
      </button>
      <button
        className="show-all-properties-btn"
        onClick={handleShowAllProperties}
      >
        Show All Properties
      </button>
      {showSavedProperties && Object.keys(savedProperties).length > 0 && (
        <div>
          <h4>Saved Properties:</h4>
          <ul className="property-list">
            {Object.values(savedProperties).map((property) => (
              <SavedProperties key={property.id} property={property} />
            ))}
          </ul>
        </div>
      )}
      {showAllProperties && (
        <div>
          <h4>All Properties:</h4>
          <ul className="property-list">
            {properties.map((property) => (
              <PropertyItem key={property.id} property={property} />
            ))}
          </ul>
        </div>
      )}

      {showSavedProperties}
    </div>
  );
};

export default PropertyList;
