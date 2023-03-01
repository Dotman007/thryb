import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ page, setPage, showModal, setShowModal, loginFunction }) => {
  let navigate = useNavigate();
  return (
    <div
      className='form-group mt-4'
      onClick={(e) => {
        e.preventDefault();
          loginFunction();
      }}
    >
      <button
        type='submit'
        className='btn btn-login'
        data-toggle='modal'
        data-target='#exampleModal'
      >
        Login
      </button>
    </div>
  );
};

export default Button;
