import React, { useState } from "react";
import "./form.css";
import FormInput from "./../../components/form/formInput/FormInput";
import Button from "./../button/Button";
import UserCardInfo from "./../user-card-info/UserCardInfo";
import SubmitMessage from "./../submit-message/SubmitMessage";

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
  //Mobile phone number
  const [value, setValue] = useState();
  const [validValue, setValidValue] = useState(false);
  //errors states
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    surname: "",
    email: ""
  });
  // validation states
  const [valid, setValid] = useState(false);
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // info card
  const [userInfo, setUserInfo] = useState();

  const [isOpen, setIsOpen] = useState(false);

  const handleBirthdayInput = event => {
    setStartDate(event);
    const age = getUserAge(event);
    setUserAge(age);

    const dateOfBirth = getDateOfBirth(event);
    setUserInput(userInput => ({
      ...userInput,
      dateOfBirth
    }));
  };

  const handleOnChange = event => {
    const value = event.target.value;
    setUserInput({
      ...userInput,
      [event.target.name]: value
    });

    const nameValidation = textValidation(userInput.name);
    const surnameValidation = textValidation(userInput.surname);
    const emailAddressValidation = emailValidation(userInput.email);

    setErrorMessage(errorMessage => ({
      ...errorMessage,
      name: nameValidation,
      surname: surnameValidation,
      email: emailAddressValidation
    }));
  };

  const handlePhoneInput = event => {
    const formatNumber = formatPhoneNumberIntl(event);
    setValue(formatNumber);

    const checkValidNumber = isValidPhoneNumber(formatNumber);
    setValidValue(checkValidNumber);
  };

  const handleCheck = event => {
    event.preventDefault();

    if (
      errorMessage === "" ||
      (errorMessage.name === undefined &&
        errorMessage.surname === undefined &&
        errorMessage.email === null)
    ) {
      if (
        userInput.name &&
        userInput.surname &&
        userInput.email &&
        userInput.dateOfBirth &&
        value &&
        validValue === true
      ) {
        setValid(true);
      }
    }

    setUserInfo({
      name: userInput.name,
      surname: userInput.surname,
      phoneNumber: value,
      email: userInput.email,
      dateOfBirth: userInput.dateOfBirth,
      age: userAge
    });
    setChecked(true);
  };

  const handleSubmit = () => {
    if (valid) setSubmitted(true);
    setUserInput({
      ...userInput,
      userInput: ""
    });

    setIsOpen(true);
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
        {checked && userInput.name === "" ? (
          <span> Required field</span>
        ) : (
          <span>{errorMessage.name}</span>
        )}
        <FormInput
          name="surname"
          onChange={handleOnChange}
          placeholder="Surname"
          type="text"
          value={userInput.surname}
        />
        {checked && !userInput.surname ? (
          <span> Required field</span>
        ) : (
          <span>{errorMessage.surname}</span>
        )}
        <PhoneInput
          className="phoneInput"
          international={false}
          initialValueFormat="national"
          defaultCountry="GB"
          onChange={handlePhoneInput}
          value={value}
        />
        {checked && value === undefined && validValue === false ? (
          <span>Please enter a phone number</span>
        ) : checked && value !== undefined && validValue === false ? (
          <span>Invalid phone number</span>
        ) : (
          undefined
        )}
        <FormInput
          name="email"
          onChange={handleOnChange}
          placeholder="Email"
          type="email"
          value={userInput.email}
        />
        {checked && !userInput.email ? (
          <span> Required field</span>
        ) : (
          <span>{errorMessage.email}</span>
        )}
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
        <span className="react-span">
          Enter your date of Birth* - dd/mm/yyy
        </span>
        {userInput.dateOfBirth === startDate ? (
          <span>Birthday date must be different from today date</span>
        ) : null}
        <Button onClick={handleCheck} name="Confirm" />
      </form>
      {valid && checked ? (
        <div className="user-info-card-display">
          <UserCardInfo userInfo={userInfo} phoneNumber={value} />
          <Button
            className="submit-button"
            name="Submit"
            onClick={handleSubmit}
          />
        </div>
      ) : null}
      {submitted ? (
        <SubmitMessage
          age={userAge}
          dateOfBirth={userInput.dateOfBirth}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      ) : null}
    </div>
  );
};

export default Form;
