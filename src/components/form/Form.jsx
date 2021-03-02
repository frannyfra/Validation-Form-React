import React, { useState } from "react";
import FormInput from "./../../components/form/formInput/FormInput";
import Button from "./../button/Button";

import { ageChecker } from "./../../utilities/ageChecker";
import { emailValidation } from "../../utilities/emailValidation";
import { getUserAge, getDateOfBirth } from "../../utilities/datePicker";
import { textValidation } from "../../utilities/textValidation";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import PhoneInput, {
    isValidPhoneNumber,
    formatPhoneNumberIntl
} from "react-phone-number-input";
import "react-phone-number-input/style.css";



const Form = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    surname: "",
    email: "",
    dateOfBirth: ""
  });

  // dataPicker && age status
  const [startDate, setStartDate] = useState(new Date());
  const [userAge, setUserAge] = useState();
  const today = new Date();
  const minumDateTimeStamp = new Date().setDate(today.getDate() - 36135);

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
        <DatePicker
          dateFormat="dd/MM/yyy"
          isClearable
          minDate={new Date(minumDateTimeStamp)}
          maxDate={new Date()}
          onChange={handleBirthdayInput}
          scrollableMonthYearDropdown
          selected={startDate}
          showYearDropdown
        />
        <Button
          className="submit-button"
          name="Submit"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Form;
