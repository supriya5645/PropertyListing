import React from "react";
import "../Css/SavedProperties.css";
const SavedProperties = ({ property }) => {
  return (
    <li className="property-item">
      <h4>{property.address}</h4>
      <p>Price: {property.price}</p>
      <p>Type: {property.type}</p>
      <p>
        <img src={property.image} alt={property.address} />
      </p>
    </li>
  );
};

export default SavedProperties;
