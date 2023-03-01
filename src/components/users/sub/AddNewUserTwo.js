import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const AddNewUserTwo = ({ page, 
    setPage, 
    usersPage, 
    setUsersPage,
    userBio,
    setUserBio,
    industry,
    setIndustry,
    job,
    setJob,
    imageOne,
    setImageOne,
    imageTwo, 
    setImageTwo, 
    imageThree, 
    setImageThree, 
    imageFour, 
    setImageFour, 
    imageFive, 
    setImageFive, 
    imageSix, 
    setImageSix
 }) => {
    	const navigate = useNavigate();
        
        // const handleConversion = () => {
        //     var file = imageOne;
        //     var reader = new FileReader();
        //     reader.onloadend = function () {
        //     setImageOne(reader.result);
        //     };
        //     reader.readAsDataURL(file);
        // };

        // useEffect(()=>{
        //     if (
        //         typeof imageOne === "object"
        //       ) {
        //         console.log('i ran!');
        //         handleConversion();
        //       }
        // })
  return (
        <div className="main-content">
            <div className="container-fluid">
                <div className="row mb-3">
                    <div className="col-12 mt-5">
                        <div className="d-flex align-item-center">
                            <ul className="d-flex">
                                <li className="mr-2" onClick={() => {
                                  setPage('login');
                                  navigate('/');
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
                        className="col-xl-5 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info"
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
                                className="circle num2 purple d-flex justify-content-center align-item-center ml-2"
                            >
                                <span>2</span>
                            </div>
                            <h6 className="mt-2 ml-2">Advanced Information</h6>
                        </div>
                        <div className="d-flex mr-2">
                            <div
                                className="circle white d-flex justify-content-center align-item-center m-2" onClick={() => {
                                    setUsersPage('addnew-3')
                                    }}
                            >
                                <span>3</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-8">
                        <div className="custom-card">
                            <form>
                                <div className="form-group position-relative mb-4 pl-3 pr-3">
                                    <h5 htmlFor="userBio" className="mb-3 f-weight-600">User Bio</h5>
                                    <p className="mb-4 font-sm2">
                                        Write something interesting about this user
                                    </p>
                                    <textarea
                                        className="form_textarea_fields pl-4 pt-3 w-100"
                                        placeholder="Tell us about yourself"
                                        name="userBio" value={userBio}
                                        onChange={(e)=>setUserBio(e.currentTarget.value)}
                                    ></textarea>
                                </div>
                                <hr />
                                <div className="form-group position-relative mb-4 pl-3 pr-3">
                                    <h5 className="mt-4 f-weight-600">Employment</h5>
                                    <p className="mb-4 font-sm2">
                                        Write about this user's work experience
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm"
                                            ><img
                                                src="./assets/images/industry-icon.svg"
                                                className="img-fluid mr-2"
                                                alt="industry"
                                            />Industry</span>
                                        <div>
                                            <select
											className="user-add-dropdown"
											type="select"
											name="industry"
                                            onChange={(e)=>setIndustry(e.currentTarget.value)}
										>
											<option value='Agriculture'>Agriculture</option>
											<option value='Media and Information'>Media and Information</option>
											<option value='Telecommunication'>Telecommunication</option>
											<option value='Technology'>Technology</option>
											<option value='Education'>Education</option>
											<option value='Government'>Government</option>
										</select>
                                        <i className="fa fa-angle-right"></i>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm"
                                            ><img
                                                src="./assets/images/job-icon.svg"
                                                className="img-fluid mr-2"
                                                alt="industry"
                                            />Job</span
                                        >
                                        <input
											className="job-input"
											type="text"
											name="job"
                                            value={job}
											onChange={(e)=>setJob(e.currentTarget.value)}
										/>
                                    </div>
                                </div>
                                <div className="form-group position-relative mt-4 mb-4 pl-3 pr-3">
                                    <label className="mb-3 mt-2"><strong>Photo Album</strong></label
                                    ><br />
                                    <p className="mb-4">Profiles with picture have more chances</p>

                                    <div className="grid-container">
                                    <div className='form-group mb-4 group-banner store gallery-image-one item1'>
										<input
											type='file'
											name=''
											id=''
											accept='image/*'
											className='room-image-input'
											onChange={(e)=>{
                                                setImageOne(e.currentTarget.files[0]);
											}}
										/>

										</div>
                                        <div className='form-group mb-4 group-banner store gallery-image-others item2'>
                                            <input
                                                type='file'
                                                name=''
                                                id=''
                                                accept='image/*'
                                                className='room-image-input'
                                                onChange={(e)=>{
                                                    setImageTwo(e.currentTarget.files[0]);
                                                }}
                                            />
										</div>
                                        <div className='form-group mb-4 group-banner store gallery-image-others item3'>
                                            <input
                                                type='file'
                                                name=''
                                                id=''
                                                accept='image/*'
                                                className='room-image-input'
                                                onChange={(e)=>{
                                                    setImageThree(e.currentTarget.files[0]);
                                                }}
                                            />
										</div>
                                        <div className='form-group mb-4 group-banner store gallery-image-others item4'>
                                            <input
                                                type='file'
                                                name=''
                                                id=''
                                                accept='image/*'
                                                className='room-image-input'
                                                onChange={(e)=>{
                                                    setImageFour(e.currentTarget.files[0]);
                                                }}
                                            />
										</div>
                                        <div className='form-group mb-4 group-banner store gallery-image-others item5'>
                                            <input
                                                type='file'
                                                name=''
                                                id=''
                                                accept='image/*'
                                                className='room-image-input'
                                                onChange={(e)=>{
                                                    setImageFive(e.currentTarget.files[0]);
                                                }}
                                            />
										</div>
                                        <div className='form-group mb-4 group-banner store gallery-image-others item6'>
                                            <input
                                                type='file'
                                                name=''
                                                id=''
                                                accept='image/*'
                                                className='room-image-input'
                                                onChange={(e)=>{
                                                    setImageSix(e.currentTarget.files[0]);
                                                }}
                                            />
										</div>
                                    </div>
                                </div>
                                <div className="form-group mt-4 px-3" onClick={() => {
                                    setUsersPage('addnew-3')
                                    }}>
                                    <input
                                        type="submit"
                                        className="btn btn-continue"
                                        value="Continue"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AddNewUserTwo