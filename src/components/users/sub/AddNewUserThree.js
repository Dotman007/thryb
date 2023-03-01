import React from 'react'
import { useNavigate } from 'react-router-dom';
import {countries} from '../countries'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hobbies from './Hobbies';

const AddNewUserThree = ({ page, setPage, usersPage, setUsersPage, hobbies,setHobbies,
    religion,
    setReligion,
    horoscope,
    setHoroscope,
    interestedIn,
    setInterestedIn,
    seeking,
    setSeeking,
    wantsKid,
    setWantsKid,
    smoking,
    setSmoking,
    drinking,
    setDrinking,
    education,
    setEducation,
    location,
    setLocation,
    handleSubmit,
    hobbyList
}) => {
    const navigate = useNavigate();

  return (
        <div className="main-content">
            <div className="container-fluid">
                <div className="row mb-3">
                    <div className="col-12 mt-5">
                        <div className="d-flex align-item-center">
                            <ul className="d-flex">
                                <li className="mr-2" onClick={(e) => {
                                setPage('login');
                                navigate('/')
                                }}>
                                    <i className="fa fa-home"></i
                                    ><span className="font-xs pl-2 f-weight-500 mt-1">Home</span>
                                </li>
                                <li className="mr-2" onClick={()=>setUsersPage('mgt')}>
                                    <i className="fa fa-chevron-right font-xs"></i>
                                    <span className="font-xs pl-2 f-weight-500 mt-1"
                                        >Users Management</span
                                    >
                                </li>
                                <li className="mr-2">
                                    <i className="fa fa-chevron-right font-xs"></i>
                                    <span className="font-xs pl-2 f-weight-500 mt-1"
                                        ><strong>Create New</strong></span
                                    >
                                </li>
                            </ul>
                        </div>
                        <div className="mt-4 d-flex align-items-center">
                            <h5>Add a New User</h5>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div
                        className="col-xl-5 col-md-6 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info"
                    >
                        <div className="d-flex align-item-center ml-2 basic-info-inner">
                            <div
                                className="circle purple d-flex justify-content-center align-items-center" onClick={() => {
                                    setUsersPage('addnew-1')
                                    }}
                            >
                                <i className="fa fa-check text-white"></i>
                            </div>
                            <div
                                className="circle purple d-flex justify-content-center align-items-center ml-2" onClick={() => {
                                    setUsersPage('addnew-2')
                                    }}
                            >
                                <i className="fa fa-check text-white"></i>
                            </div>
                            <div
                                className="circle purple d-flex justify-content-center align-item-center ml-2"
                            >
                                <span>3</span>
                            </div>
                            <h6 className="mt-2 ml-2">Likes and Hobbies</h6>
                        </div>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 col-md-8">
                        <div className="custom-card">
                            <form>
                                <div className="form-group position-relative mb-5 pl-3 pr-3">
                                    <label className="f-weight-600 mb-3">My Basics</label><br />
                                    <p className="mb-4 font-sm2">
                                        Everything you want other to know about you
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm"
                                            ><img
                                                src="./assets/images/industry-icon.svg"
                                                className="img-fluid mr-2"
                                                alt="industry"
                                            />Religion</span>
                                        <div>
                                            <select
											className="user-add-dropdown"
											type="select"
											name="religion"
                                            onChange={(e)=>{
                                                setReligion(e.currentTarget.value)
                                            }}
										>
											<option value='Christianity'>Christianity</option>
											<option value='Islam'>Islam</option>
											<option value='Budhism'>Budhism</option>
											<option value='Traditional'>Traditional</option>
											<option value='Non Religious'>Non Religious</option>
										</select>
                                        <i className="fa fa-angle-right"></i>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm"
                                            ><img
                                                src="./assets/images/horoscope-icon.svg"
                                                className="img-fluid mr-2"
                                                alt="industry"
                                            />Horoscope</span>
                                        <div>
                                            <select
											className="user-add-dropdown"
											type="select"
											name="gender"
                                            onChange={(e)=>{
                                                setHoroscope(e.currentTarget.value)
                                            }}
										>
											<option value='aries'>Aries</option>
											<option value='Taurus'>Taurus</option>
											<option value='Gemini'>Gemini</option>
											<option value='Cancer'>Cancer</option>
											<option value='Leo'>Leo</option>
											<option value='Virgo'>Virgo</option>
											<option value='Libra'>Libra</option>
											<option value='Scorpio'>Scorpio</option>
											<option value='Sagittarius'>Sagittarius</option>
											<option value='Capricorn'>Capricorn</option>
											<option value='Aquarius'>Aquarius</option>
											<option value='Pisces'>Pisces</option>
										</select>
                                        <i className="fa fa-angle-right"></i>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm"
                                            ><img
                                                src="./assets/images/interestedIn-icon.svg"
                                                className="img-fluid mr-2"
                                                alt="industry"
                                            />Interested in</span>
                                        <div>
                                            <select
											className="user-add-dropdown"
											type="select"
											name="gender"
                                            onChange={(e)=>{
                                                setInterestedIn(e.currentTarget.value)
                                            }}
										>
											<option value='Men'>Men</option>
											<option value='Women'>Women</option>
										</select>
                                        <i className="fa fa-angle-right"></i>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm d-flex align-items-center"
                                            ><i
                                                className="fa fa-heart-o mr-2"
                                                style={{fontSize: '18px'}}
                                            ></i>
                                            Seeking</span
                                        >
                                        <div>
                                            <select
											className="user-add-dropdown"
											type="select"
											name="gender"
                                            onChange={(e)=>{
                                                setSeeking(e.currentTarget.value)
                                            }}
										>
											<option value='Long-term relationship'>Long-term relationship</option>
											<option value='Short-term relationship'>Short-term relationship</option>
											<option value='Chat Buddy'>Chat Buddy</option>
										</select>
                                        <i className="fa fa-angle-right"></i>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm"
                                            ><img
                                                src="./assets/images/kids-icon.svg"
                                                className="img-fluid mr-2"
                                                alt="industry"
                                            />Wants Kids</span
                                        >
                                        <div>
                                            <select
											className="user-add-dropdown"
											type="select"
											name="gender"
                                            onChange={(e)=>{
                                                setWantsKid(e.currentTarget.value)
                                            }}
										>
											<option value={true}>Yes</option>
											<option value={false}>No</option>
										</select>
                                        <i className="fa fa-angle-right"></i>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm"
                                            ><img
                                                src="./assets/images/smoking-icon.svg"
                                                className="img-fluid mr-2"
                                                alt="industry"
                                            />Smoking</span
                                        >
                                        <div>
                                            <select
											className="user-add-dropdown"
											type="select"
											name="gender"
                                            onChange={(e)=>{
                                                setSmoking(e.currentTarget.value)
                                            }}
										>
											<option value={false}>No</option>
											<option value={true}>Yes</option>
										</select>
                                        <i className="fa fa-angle-right"></i>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm"
                                            ><img
                                                src="./assets/images/beerIcon.svg"
                                                className="img-fluid mr-2"
                                                alt="industry"
                                            />Drinking</span
                                        >
                                        <div>
                                            <select
											className="user-add-dropdown"
											type="select"
											name="gender"
                                            onChange={(e)=>{
                                                setSmoking(e.currentTarget.value)
                                            }}
										>
											<option value={false}>No</option>
											<option value={true}>Yes</option>
										</select>
                                        <i className="fa fa-angle-right"></i>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm"
                                            ><img
                                                src="./assets/images/education-icon.svg"
                                                className="img-fluid mr-2"
                                                alt="industry"
                                            />Education</span
                                        >
                                        <div>
                                            <select
											className="user-add-dropdown"
											type="select"
											name="gender"
                                            onChange={(e)=>{
                                                setEducation(e.currentTarget.value)
                                            }}
										>
											<option value='Basic'>Basic</option>
											<option value='Secondary'>Secondary</option>
											<option value='Tertiary'>Tertiary</option>
										</select>
                                        <i className="fa fa-angle-right"></i>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm"
                                            ><img
                                                src="./assets/images/Location.svg"
                                                className="img-fluid mr-2"
                                                alt="industry"
                                            />Location</span
                                        >
                                        <div>
                                            <select
											className="user-add-dropdown"
											type="select"
											name="gender"
                                            onChange={(e)=>{
                                                setLocation(e.currentTarget.value)
                                            }}
										>
											{countries.map((item,index)=>(
                                                <option value={item.name} key={index}>{item.name}</option>
                                            ))}
										</select>
                                        <i className="fa fa-angle-right"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="mb-3">
                                        <h5 className="f-weight-600 mb-2">Hobbies</h5>
                                        <p className="mb-3 font-sm2">
                                            Let People know about what this user loves
                                        </p>
                                    </div>
                                    <div className="row">
                                       {hobbyList.map((item, index) => (
                                        <Hobbies  key={index} index={index} hobbies={hobbies} setHobbies={setHobbies} item={item}/>
                                       ))}

                                        
                                    </div>
                                </div>
                                <div className="form-group mt-4 px-3">
                                    <label htmlFor="submit"></label>
                                    <input
                                        type="submit"
                                        className="btn btn-continue"
                                        value="Continue"
                                        onClick={(e)=>{
                                            e.preventDefault();
                                            handleSubmit(e);
                                        }}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
  )
}

export default AddNewUserThree