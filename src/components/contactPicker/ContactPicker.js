import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option key='-1' value='' disabled='disabled' selected='selected'>Select a contact</option>
      {contacts.map(
        (value,index) => (
          <option key={index} value={value.name}>{value.name}</option>
        )
      )}
    </select>
  );
};
