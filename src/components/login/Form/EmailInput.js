import React from "react";
import { useState } from "react";

const EmailInput = ({ email, setEmail }) => {
  return (
    <div className='form-group position-relative'>
      <input
        type='text'
        className='form_input_fields'
        placeholder='Username'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className='position-absolute d-flex input-decor align-items-center'>
        <img
          src='./assets/images/Mail-black-icon.svg'
          className='img-fluid'
          alt='mail'
        />
        <div className='pl-4'>
          <img
            src='./assets/images/black-line-vert.svg'
            className='img-fluid'
            alt='vert-line'
          />
        </div>
      </div>
    </div>
  );
};
export default EmailInput;
