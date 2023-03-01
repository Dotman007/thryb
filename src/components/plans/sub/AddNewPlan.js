import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {fetchDataWithAxios} from '../../../config/fetchDataWithAxios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import baseUrl from '../../api/baseUrl'
const AddNewPlan = ({ page, setPage, plansPage, setPlansPage }) => {
  const navigate = useNavigate();
  const [planTypes,setPlanTypes]= useState([]);
  const [name, setName]= useState('');
  const [planTypeId, setPlanTypeId]= useState(1);
  const [amount, setAmount]= useState('');
  const [status, setStatus]= useState(true);
  const [description, setDescription]= useState('');
  const [colorOption, setColorOption]= useState('#842a83');
  const [showSpinner, setShowSpinner]= useState(false);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    const fetchThrybeTalks = async () => {
      try {
        const response = await fetchDataWithAxios("get", "/GetPlanTypes");
        setPlanTypes(response.data);
        setPlanTypeId(response.data[0].id)
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchThrybeTalks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name && amount && description && colorOption && planTypeId) {
        let body = {
          name,
          amount,
          description,
          colorOption,
          planTypeId,
          status
        };
        setShowSpinner(true);
        body = JSON.stringify(body);
        console.log(body);
        let result = await fetch(
            `${baseUrl()}/AddPlan`,
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
    <div className='main-content plans'>
      <div className='container-fluid'>
        <div className='row mb-3'>
          <div className='col-12 mt-5'>
            <div className='d-flex align-item-center'>
              <ul className='d-flex'>
                <li
                  className='mr-2'
                  onClick={(e) => {
                    navigate("/");
                  }}
                >
                  <i className='fa fa-home'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>Home</span>
                </li>
                <li
                  className='mr-2'
                  onClick={(e) => {
                    setPlansPage("mgt");
                  }}
                >
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    Price Management
                  </span>
                </li>
                <li
                  className='mr-2'
                  onClick={(e) => {
                    setPlansPage("addnew-1");
                  }}
                >
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    <strong>Create New</strong>
                  </span>
                </li>
              </ul>
            </div>
            <div className='mt-4 d-flex align-items-center'>
              <h5>Create a new Subscription Plan</h5>
            </div>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-xl-5 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info'>
            <div className='d-flex align-item-center ml-2 basic-info-inner'>
              <div className='circle purple d-flex justify-content-center align-item-center'>
                <span className='text-white'>1</span>
              </div>
              <h6 className='mt-2 ml-2'>Plans Details</h6>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-5 col-md-8'>
            <div className='custom-card mb-3'>
              <form className='add-user-form pt-3'>
                <div className='form-group position-relative mb-4 pl-3 pr-3'>
                  <label htmFor='planName'>Plan Name</label>
                  <input
                    className='form_input_fields'
                    type='text'
                    name='planName'
                    placeholder='plan name'
                    value={name}
                    onChange={(e)=>setName(e.currentTarget.value)}
                  />
                </div>
                <div className='form-group position-relative mb-4 pl-3 pr-3'>
                  <textarea
                    className='form_textarea_fields pl-4 pt-3 w-100'
                    placeholder='plan description'
                    name='userBio'
                    value={description}
                    onChange={(e)=>setDescription(e.currentTarget.value)}
                  ></textarea>
                </div>
                <div className='form-group position-relative mb-4 pl-3 pr-3'>
                  <label htmFor='gender'>Payment Plan Type</label>
                  <select
                    className='form_input_fields bg-transparent'
                    type='select'
                    onChange={(e)=>setPlanTypeId(e.currentTarget.value)}
                  >
                     {planTypes.length >= 1 &&
                    planTypes.map((item, index) => (
                    <option value={item?.id} key={index}>{item?.name}</option>
                    ))}
                  </select>
                  <i className='fa fa-angle-down position-absolute form-select-dropdown'></i>
                </div>
                <div className='form-group position-relative mb-4 pl-3 pr-3'>
                  <label htmFor='price'>Price(in Token)</label>
                  <input
                    className='form_input_fields'
                    type='number'
                    placeholder='price'
                    value={amount}
                    onChange={(e)=>setAmount(e.currentTarget.value)}
                  />
                  <div
                    className='position-absolute pt-3 d-flex'
                    style={{ top: "0", right: "30px", gap: "5px" }}
                  >
                    <div
                      className='mt-1 mr-4'
                      style={{
                        width: "1px",
                        height: "25px",
                        backgroundColor: "#f2f2f2",
                      }}
                    ></div>
                    <div>
                      <p className='font-sm2 m-0 f-weight-600'>125</p>
                      <p className='font-sm pb-3'>Value</p>
                    </div>
                  </div>
                </div>
                <div className='form-group mb-4 px-3'>
                  <h6 className='mb-3 f-weight-600 mt-4'>
                    Select color option
                  </h6>
                  <div className='mb-3' style={{ overflowX: "auto" }}>
                    <div className='color-grid plans'>
                      <a href='#' className='color-grid-item eight pointer' onClick={(e)=>{
                        e.preventDefault();
                        setColorOption('#842a83')
                      }}></a>
                      <a href='#' className='color-grid-item one pointer' onClick={(e)=>{
                        e.preventDefault();
                        setColorOption(' #c3a1c2')
                      }}></a>
                      <a href='#' className='color-grid-item two pointer' onClick={(e)=>{
                        e.preventDefault();
                        setColorOption(' #ce91cc')
                      }}></a>
                      <a href='#' className='color-grid-item three pointer' onClick={(e)=>{
                        e.preventDefault();
                        setColorOption(' #ec82e9')
                      }}></a>
                      <a href='#' className='color-grid-item four pointer' onClick={(e)=>{
                        e.preventDefault();
                        setColorOption('#ed6ae8')
                      }}></a>
                      <a href='#' className='color-grid-item five pointer' onClick={(e)=>{
                        e.preventDefault();
                        setColorOption('#f953f3')
                      }}></a>
                      <a href='#' className='color-grid-item six pointer' onClick={(e)=>{
                        e.preventDefault();
                        setColorOption('#ff3ef9')
                      }}></a>
                      <a href='#' className='color-grid-item seven pointer' onClick={(e)=>{
                        e.preventDefault();
                        setColorOption('#ff00f7')
                      }}></a>
                    </div>
                  </div>
                </div>
                <div className='form-group mt-4'>
                  {!showSpinner && <label htmFor='submit'></label>}
                  {!showSpinner && <input
                    type='submit'
                    className='btn btn-continue'
                    value='Submit'
                    onClick={(e) => {
                        handleSubmit(e);
                    }}
                  />}
                  {showSpinner && <div className='spinner'></div>}
                </div>
              </form>
            <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewPlan;
