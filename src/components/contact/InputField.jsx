import React from 'react';
import './InputField.css';

const InputField = ({ label, change, errormsg,  ...inputProps}) => {
  return(
    <div className='input-field'>
      <input className='input-field__input' onChange={change} {...inputProps} placeholder=' ' autoComplete='off' />
      <label className='input-field__label'>{label}</label>
      <p className='input-field__error'>{errormsg}</p>
    </div>
  );
}

export default InputField;
