import React, { useState } from "react";
import FormInput from "./../../components/form/formInput/FormInput";

const Form = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    surname: "",
    email: "",
    dateOfBirth: ""
  });

  const handleBirthdayInput = () => {};

  const handleOnChange = () => {
    return;
  };

  const handlePhoneInput = () => {};

  const handleCheck = () => {
    return;
  };

  const handleSubmit = () => {
    return;
  };

  return (
    <div className="main-container">
      <form className="form-container" autoComplete="off">
        <FormInput
          name="name"
          onChange={handleOnChange}
          placeholder="Name"
          type="text"
          value={userInput.name}
        />
        <FormInput
          name="surname"
          onChange={handleOnChange}
          placeholder="Surname"
          type="text"
          value={userInput.surname}
        />
        <FormInput
          name="email"
          onChange={handleOnChange}
          placeholder="Email"
          type="email"
          value={userInput.email}
        />
        <button
          className="submit-button"
          name="Submit"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Form;
