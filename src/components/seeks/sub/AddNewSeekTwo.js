import React from "react";
import { useNavigate } from "react-router-dom";
import InterestedPersonSeekInput from "./singleseek/InterestedPersonSeekInput";

const AddNewSeekTwo = ({
  page,
  setPage,
  seeksPage,
  setSeeksPage,
  interestedPersonInputs,
  setInterestedPersonInputs,
  setInterestedPersonKeyInfo,
  interestedPersonKeyInfo,
}) => {
  const navigate = useNavigate();

  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <div className='row mb-3'>
          <div className='col-12 mt-5'>
            <div className='d-flex align-item-center'>
              <ul className='d-flex'>
                <li
                  className='mr-2'
                  onClick={(e) => {
                    setPage("login");
                    navigate("/");
                  }}
                >
                  <i className='fa fa-home'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>Home</span>
                </li>
                <li className='mr-2' onClick={() => setSeeksPage("mgt")}>
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    Thrybe Seek
                  </span>
                </li>
                <li className='mr-2' onClick={() => setSeeksPage("addnew-1")}>
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    <strong>Create New</strong>
                  </span>
                </li>
              </ul>
            </div>
            <div className='mt-4 d-flex align-items-center'>
              <h5>Create a new Thrybe Seek</h5>
            </div>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-xl-5 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info'>
            <div className='d-flex align-item-center ml-2 basic-info-inner'>
              <div className='circle purple d-flex justify-content-center align-items-center'>
                <i
                  className='fa fa-check text-white'
                  onClick={() => setSeeksPage("addnew-1")}
                ></i>
              </div>
              <div
                className='circle num2 purple d-flex justify-content-center align-item-center ml-2'
                onClick={() => setSeeksPage("addnew-2")}
              >
                <span>2</span>
              </div>
              <h6 className='mt-2 ml-2'>Seeker's Details</h6>
            </div>
            <div className='d-flex mr-2'>
              <div
                className='circle white d-flex justify-content-center align-item-center m-2'
                onClick={() => setSeeksPage("addnew-3")}
              >
                <span>3</span>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-5 col-lg-6 col-md-8'>
            <div className='custom-card'>
              <form className='add-user-form'>
                <h5 htmlFor='userBio' className='mb-3 f-weight-600 px-3 mt-3'>
                  What the seek is looking for
                </h5>

                <div className='poster-div py-3 h-auto font-sm2 mb-5'>
                  Mauris convallis, leo eget dignissim semper, orci ipsum
                  maximus dolor.
                </div>
                <p className='font-sm mb-5'>
                  Kindly highlight key details about yourself using the box
                  below. e.g: Blood Genotype, Disabilities, special needs etc.
                  (NOTE: You can add as many as possible)
                </p>
                {interestedPersonInputs.map((item, index) => (
                  <InterestedPersonSeekInput
                    key={index}
                    index={index}
                    interestedPersonKeyInfo={interestedPersonKeyInfo}
                    setInterestedPersonKeyInfo={setInterestedPersonKeyInfo}
                  />
                ))}
                <div
                  className='px-3'
                  onClick={(e) => {
                    e.preventDefault();
                    setInterestedPersonInputs([
                      ...interestedPersonInputs,
                      interestedPersonInputs.length + 1,
                    ]);
                  }}
                >
                  <button className='btn btn-add-more'>Add more</button>
                </div>
                <div
                  className='form-group mt-4 px-3'
                  onClick={(e) => {
                    e.preventDefault();
                    setSeeksPage("addnew-3");
                  }}
                >
                  <label htmlFor='submit'></label>
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
      </div>
    </div>
  );
};

export default AddNewSeekTwo;
