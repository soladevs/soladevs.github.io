import React from 'react';

const ContactInfo = ({ icon, text }) => {
  return (
    <div className="ContactInfo">
      <span className="icon">{icon}</span>
      <p>{text}</p>
    </div>
  );
};

export default ContactInfo;
