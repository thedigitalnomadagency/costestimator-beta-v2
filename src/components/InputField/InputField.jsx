import React from 'react';

//styling
import { InputFieldWrapper } from './InputField.styles';

export default ({ placeholder }) => {
  return (
    <InputFieldWrapper>
      <input type="text" placeholder={placeholder} className="input-field" />
    </InputFieldWrapper>
  );
};
