import React, { createContext, useState } from "react";
import propertyData from "../propertyData.json";

const PropertyContext = createContext();

const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState(propertyData.properties);
  const [savedProperties, setSavedProperties] = useState({});
  const [contactHistory, setContactHistory] = useState({});

  const searchProperties = (criteria) => {
    const filteredProperties = propertyData.properties.filter((property) => {
      //   console.log(property);
      // Perform property search based on criteria
      // Modify the condition based on your specific search criteria
      return (
        property?.address
          ?.toLowerCase()
          ?.includes(
            criteria.location != ""
              ? criteria.location.toLowerCase()
              : undefined
          ) ||
        property?.type
          ?.toLowerCase()
          ?.includes(
            criteria.type != "" ? criteria.type.toLowerCase() : undefined
          ) ||
        property?.price
          ?.toString()
          ?.includes(
            criteria.price != "" ? criteria.price.toLowerCase() : undefined
          )
      );
    });
    console.log(filteredProperties);
    setProperties(filteredProperties);
  };

  const showMySavedProperties = () => {
    const savedProperties =
      JSON.parse(localStorage.getItem("savedProperties")) || {};
    setSavedProperties(savedProperties);
  };

  const saveProperty = (propertyId) => {
    const propertyToSave = propertyData.properties.find(
      (property) => property.id === propertyId
    );
    if (propertyToSave) {
      const savedProperties =
        JSON.parse(localStorage.getItem("savedProperties")) || {};
      savedProperties[propertyId] = propertyToSave;
      localStorage.setItem("savedProperties", JSON.stringify(savedProperties));
      setSavedProperties(savedProperties);
    }
  };

  const contactAgent = (propertyId, message) => {
    const property = propertyData.properties.find(
      (property) => property.id === propertyId
    );
    if (property) {
      const contact = {
        propertyId,
        date: new Date().toLocaleString(),
        message,
      };
      setContactHistory((prevState) => ({
        ...prevState,
        [propertyId]: [...(prevState[propertyId] || []), contact],
      }));
    }
  };

  const getContactHistory = (propertyId) => {
    return contactHistory[propertyId] || [];
  };

  return (
    <PropertyContext.Provider
      value={{
        properties,
        savedProperties,
        contactHistory,
        showMySavedProperties,
        saveProperty,
        contactAgent,
        getContactHistory,
        searchProperties,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export { PropertyContext, PropertyProvider };
