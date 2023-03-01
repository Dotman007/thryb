import React from "react";
import { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import api from "../api/base";
import baseUrl from '../api/baseUrl'


const ContactSetting = () => {
  const [selected, setSelected] = useState("");
  const token = sessionStorage.getItem("token");
  const img = sessionStorage.getItem("img");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  useEffect(() => {
    switch (selected) {
      case "NG":
        setPhone(`+234${telephone}`);
        break;

      default:
        break;
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email && telephone) {
        let body = {
          email,
          phone,
        };
        setShowSpinner(true);

        body = JSON.stringify(body);
        let result = await fetch(
          `${baseUrl()}/ContactInformationSetting`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: body,
          }
        );
        result = await result;
        toast.success("Success!");
        setShowSpinner(false);
      }else{
        toast.error('All fields are required!')
      }
    } catch (error) {
      toast.error("An Error Occurred!");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("img");
      sessionStorage.removeItem("pages");
      navigate("/login");
    }
  };

  return (
    <div className='custom-card mb-3'>
      <form>
        <h6 className='mb-4'>Contact Information</h6>
        <div className='form-group position-relative px-3'>
          <input
            type='text'
            className='form_input_fields'
            placeholder='Email address'
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
        <div className='form-group position-relative mb-1 px-3 phone-input-setting'>
          <input
            className='form_input_fields tel-field'
            type='tel'
            name='telephone'
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
          <div className='position-absolute d-flex input-decor3 align-items-center'>
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              countries={["NG"]}
              selectButtonClassName='menu-flags-button'
              showSecondarySelectedLabel={false}
              showOptionLabel={false}
              fullWidth={false}
              showSecondaryOptionLabel={false}
              className='menu-flags'
            />
          </div>
        </div>
        <div className='form-group px-3'>
          {!showSpinner && <label htmlFor='Modify'></label>}
          {!showSpinner && (
            <input
              type='submit'
              className='btn btn-continue'
              value='Modify'
              onClick={(e) => {
                if (email && phone) {
                  handleSubmit(e);
                }
              }}
            />
          )}
          {showSpinner && <div className='spinner'></div>}
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default ContactSetting;
