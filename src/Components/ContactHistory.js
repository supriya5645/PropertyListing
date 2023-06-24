import React from "react";
import { PropertyContext } from "./PropertyContext";
// import "../styles/ContactHistory.css";

const ContactHistory = ({ propertyId }) => {
  const { getContactHistory } = React.useContext(PropertyContext);
  const contactHistory = getContactHistory(propertyId);

  return (
    <div className="contact-history-container">
      <h4>Contact History</h4>
      <ul>
        {contactHistory.map((contact, index) => (
          <li key={index}>
            <p>Date: {contact.date}</p>
            <p>Message: {contact.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactHistory;
