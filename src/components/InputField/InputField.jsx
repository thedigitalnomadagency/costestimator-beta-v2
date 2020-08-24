import React from 'react';

//styling
import { InputFieldWrapper } from './InputField.styles';

export default ({
  type,
  name,
  id,
  placeholder,
  label,
  handleChange,
  value,
}) => {
  return (
    <InputFieldWrapper>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="text-input"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </InputFieldWrapper>
  );
};
