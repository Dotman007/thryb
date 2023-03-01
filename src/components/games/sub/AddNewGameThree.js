import React, {useEffect} from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import baseUrl from '../../api/baseUrl'

const AddNewGameThree = ({page,
  setPage,
  gamesPage,
  setGamesPage,
  answers,
  colorOption,
  name,
  description,
  icon,
  setIcon,
  gameType,
  questionImage,
  setQuestionImage,
  falseAnswers,
  mainAnswer,
  question}) => {
    const navigate= useNavigate();
    const token = sessionStorage.getItem("token");
    const [showSpinner, setShowSpinner]= useState(false);

     useEffect(() => {
    if (
      typeof icon === "object"
    ) {
      handleIconConversion();
    }
  },[gamesPage]);

     useEffect(() => {
    if (
      typeof questionImage === "object"
    ) {
      handleImageConversion();
    }
  },[gamesPage]);

  const handleImageConversion = () => {
    var file = questionImage;
    var reader = new FileReader();
    reader.onloadend = function () {
      setQuestionImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleIconConversion = () => {
    var file = icon;
    var reader = new FileReader();
    reader.onloadend = function () {
      setIcon(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if ( answers,name,description,icon,questionImage,falseAnswers,mainAnswer,question) {
        setShowSpinner(true);
        let body = {
          name,
          description,
          gameTypeId : gameType,
          icon,
          color: colorOption,
          questionImage,
          question,
          mainAnswer,
          falseAnswers: falseAnswers.map(item => item.value)
        };
        body = JSON.stringify(body);
        
        let result = await fetch(
          `${baseUrl()}/CreateGame`,
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
       setTimeout(()=>{
        setGamesPage('mgt')
       }, 1000);
      }else{
        toast.error('All fields are required!')
      }
    } catch (error) {
      setShowSpinner(false);
      toast.error("An Error Occurred!");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("img");
      sessionStorage.removeItem("pages");
      navigate("/login");
    }
  };


  return (
    <>
            <div className='row mb-5'>
              <div className='col-md-6 d-flex align-item-center mt-3 basic-info'>
                <div className='d-flex align-item-center ml-2 basic-info-inner'>
                  <div
                    className='circle purple d-flex justify-content-center align-item-center mb-2'
                    onClick={() => {
                      setGamesPage("addnew-1");
                    }}
                  >
                    <i
                      className='fa fa-check mt-1 f-weight-500'
                      aria-hidden='true'
                    ></i>
                  </div>
                  <div
                    className='circle purple d-flex justify-content-center align-item-center mb-2 ml-1'
                    onClick={() => {
                      setGamesPage("addnew-2");
                    }}
                  >
                    <i
                      className='fa fa-check mt-1 f-weight-500'
                      aria-hidden='true'
                    ></i>
                  </div>
                  <div className='circle purple d-flex justify-content-center align-item-center mb-2 ml-1'>
                    <span>3</span>
                  </div>
                  <h6 className='mt-2 ml-2'>Preview</h6>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='custom-card col-md-6 ml-3'>
                <form action=''>
                  <div className='form-group position-relative mt-4 mb-4 pl-3 pr-3'>
                    <div className='row'>
                      <div className='col-12'>
                        <div>
                          <img
                            src={icon}
                            className='img-fluid gift-img add'
                            style={{ width: "100%" }}
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-2 mb-4 px-3'>
                    <h5 className='f-weight-600 mb-2'>{name}</h5>
                  </div>
                  <div className='mt-4 mb-2 px-3'>
                    <div className='mb-4'>
                      <h5 className='font-sm2 f-weight-800 mt-2'>
                        <u>
                          <strong>Description</strong>
                        </u>
                      </h5>
                      <p className='font-sm'>
                        {description}
                      </p>
                    </div>
                  </div>
                  <div className='px-3 mb-4'>
                    <div className='custom-card'>
                      <p className='f-weight-600'>Question</p>
                      <h6 className='f-weight-600 mt-3'>
                        {question}
                      </h6>
                      <div className='table-responsive mt-3'>
                        <table className='table table-borderless table-addGame'>
                          <tbody>
                            <tr>
                              <td>Main Answer</td>
                              <td className='text-right'>{mainAnswer}</td>
                            </tr>
                            {falseAnswers.map((item, index) =>(
                              <tr key={index}>
                                <td>False Answer {index +1}</td>
                                <td className='text-right'>{item.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className='px-3'>
                    <div className='form-row'>
                      <div className='col-lg-6 mb-3'>
                        <div className='form-group'>
                          <button className='btn btn-continue font-sm'>
                            Back
                          </button>
                        </div>
                      </div>
                      <div className='col-lg-6 mb-3'>
                        <div className='form-group'>
                          {!showSpinner && <input
                            type='submit'
                            className='btn btn-continue'
                            value='Continue'
                            onClick={(e)=>{
                              handleSubmit(e);
                            }}
                          />}
                        {showSpinner && <div className='spinner'></div>}  
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <ToastContainer />
            </div>
          </>
  )
}

export default AddNewGameThree