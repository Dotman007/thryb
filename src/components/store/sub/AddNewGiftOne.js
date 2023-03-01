import React from 'react'
import { useState, useEffect } from 'react';

const AddNewGiftOne = ({setStorePage,giftName,setGiftName,description,setDescription,price,setPrice, 
                        privacy,setPrivacy}) => {
  
  return (
    <>
            <div className='row mb-5'>
              <div className='col-xl-5 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info'>
                <div className='d-flex align-item-center ml-2 basic-info-inner'>
                  <div className='circle purple d-flex justify-content-center align-item-center'>
                    <span className='text-white'>1</span>
                  </div>
                  <h6 className='mt-2 ml-2'>Gift's Basic Details</h6>
                </div>
                <div className='d-flex mr-2'>
                  <div
                    className='circle white d-flex justify-content-center align-item-center m-2'
                    onClick={() => {
                      setStorePage("addnew-2");
                    }}
                  >
                    <span>2</span>
                  </div>
                  <div className='circle white d-flex justify-content-center align-item-center m-2'>
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-xl-5 col-md-8'>
                <div className='custom-card mb-3'>
                  <form className='add-user-form'>
                    <div className='form-group position-relative mt-4 mb-4 pl-3 pr-3'>
                      <label for='firstName'>Gift Name</label>
                      <input
                        className='form_input_fields'
                        type='text'
                        name='firstName'
                        placeholder='gift name'
                        value={giftName}
                        onChange={(e)=>setGiftName(e.currentTarget.value)}
                      />
                    </div>
                    <div className='form-group position-relative mb-4 pl-3 pr-3'>
                      <label htmlFor='talk'></label>
                      <textarea
                        className='form_textarea_fields pl-4 pt-3 w-100'
                        placeholder='Gift description'
                        name='talk'
                        value={description}
                        onChange={(e)=>setDescription(e.currentTarget.value)}
                      ></textarea>
                      </div>
                    <div className='form-group position-relative mb-4 px-3'>
                      <label for='firstName'>Price (in Token)</label>
                      <input
                        className='form_input_fields'
                        type='text'
                        name='firstName'
                        placeholder='e.g ₦3,405'
                        value={price}
                        onChange={(e)=>setPrice(e.currentTarget.value)}
                      />
                      <a
                        href='#'
                        id='passwordVisibility'
                        className='position-absolute input-decor2 d-flex align-items-center'
                        style={{ top: "13px" }}
                      >
                        <svg
                          width='1'
                          height='32'
                          viewBox='0 0 1 32'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect width='1' height='32' fill='#F2F2F2' />
                        </svg>
                        <span className='ml-4 font-sm f-weight-600 mr-2 text-dark'>
                          125 <br />
                          value
                        </span>
                      </a>
                    </div>
                    <div className='form-group position-relative mb-4 pl-3 pr-3'>
                      <label for='privacy'>Gift privacy</label>
                      <select
                        className='form_input_fields bg-transparent'
                        type='select'
                        name='privacy'
                        
                        onChange={(e)=>setPrivacy(e.currentTarget.value)}
                      >
                        <option value='public'>Public</option>
                        <option value='private'>Private</option>
                      </select>
                      <i className='fa fa-angle-down position-absolute form-select-dropdown'></i>
                    </div>
                    <div
                      className='form-group mt-4 px-3'
                      onClick={(e) => {
                        e.preventDefault();
                        setStorePage("addnew-2");
                      }}
                    >
                      <label for='submit'></label>
                      <input
                        type='submit'
                        className='btn btn-continue'
                        value='Continue'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
  )
}

export default AddNewGiftOne