import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
      firstName: "John",
      lastName: "Henry"
  });

// ln 10 - 22 handle(First or Last)NameChange functions can be combined, so especially if there are more fields, the code can be less verbose
  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value
  //   });
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     lastName: event.target.value
  //   });
  // }

  function handleChange(event) {
    // name is the KEY in the formData object we are trying to update
    const name = event.target.name;
    let value = event.target.value;

    // use "checked" property of checkboxes instead of "value"
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit = { handleSubmit }>
      <input 
      type="text" 
      name="firstName"
      onChange={handleChange} 
      value={formData.firstName} 
      />
      <input 
      type="text"
      name="lastName" 
      onChange={handleChange} 
      value={formData.lastName} 
      />
      <input
      type="checkbox"
      name="admin"
      onChange="handleChange"
      checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
