import React from "react";

const FormInput =({name, onChange, placeholder, type, value}) => {
    return (
      <div className="form-input-container"> 
          <input
            className="floating-label-field"
            id={placeholder}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            type={type}
          />
      <label htmlFor={placeholder} className="floating-label"></label>
        </div>
    )
}

export default FormInput;