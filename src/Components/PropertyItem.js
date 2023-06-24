import React, { useContext } from "react";
import { PropertyContext } from "./PropertyContext";
import ContactHistory from "./ContactHistory";
import "../Css/PropertyItem.css";
const PropertyItem = ({ property }) => {
  const { saveProperty, contactAgent } = useContext(PropertyContext);

  const handleSaveProperty = () => {
    saveProperty(property.id);
    alert("Property saved!");
  };

  const handleContactAgent = () => {
    contactAgent(property.id, `I'm interested in ${property.address}`);
  };

  return (
    <li className="property-item">
      <h4>{property.address}</h4>
      <p>Price: {property.price}</p>
      <p>Type: {property.type}</p>
      <p>
        <img src={property.image} alt={property.address} />
      </p>
      <button onClick={handleSaveProperty}>Save</button>
      <button onClick={handleContactAgent}>Contact Agent</button>
      <ContactHistory propertyId={property.id} />
    </li>
  );
};

export default PropertyItem;
