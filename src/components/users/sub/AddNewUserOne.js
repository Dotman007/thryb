import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import ReactFlagsSelect from "react-flags-select";


const AddNewUserOne = ({ page,setPage,
	usersPage, 
	setUsersPage,
	userAvatar,
	setUserAvatar,
	firstName,
	setFirstName,
	lastName,
	setLastName,
	telephone,
	setTelephone,
	gender,
	setGender,
	age,
	setAge,
	username,
	setUserName,
	email,
	setEmail
 }) => {
	const navigate = useNavigate();
	const [selected, setSelected] = useState("NG");

	
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
							className="col-xl-5 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info"
						>
							<div className="d-flex align-item-center ml-2 basic-info-inner">
								<div
									className="circle purple d-flex justify-content-center align-item-center"
								>
									<span className="text-white">1</span>
								</div>
								<h6 className="mt-2 ml-2">Basic Information</h6>
							</div>
							<div className="d-flex mr-2">
								<div
									className="circle white d-flex justify-content-center align-item-center m-2" onClick={() => {
                                    setUsersPage('addnew-2')
                                    }}
								>
									<span>2</span>
								</div>
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
						<div className="col-xl-5 col-md-8">
							<div className="custom-card mb-3">
								<form className="add-user-form">
									<h6 className="d-flex align-self-center ml-2">Upload Avatar</h6>
									<div className='form-group mb-4 group-banner store dp'>
										<input
											type='file'
											name=''
											id=''
											accept='image/*'
											className='room-image-input'
											onChange={(e)=>{
												setUserAvatar(e.currentTarget.files[0]);
											}}
										/>

										</div>
									<div className="form-group position-relative mb-4 pl-3 pr-3">
										<label htmlFor="firstName">First Name</label>
										<input
											className="form_input_fields"
											type="text"
											name="firstName"
											value={firstName}
											onChange={(e)=>setFirstName(e.currentTarget.value)}
										/>
									</div>
									<div className="form-group position-relative mb-4 pl-3 pr-3">
										<label htmlFor="lastName">Last Name</label>
										<input
											className="form_input_fields"
											type="text"
											name="lastName"
											value={lastName}
											onChange={(e)=>setLastName(e.currentTarget.value)}
										/>
									</div>
									<div className="form-group position-relative mb-4 pl-3 pr-3">
										<label htmlFor="lastName">Email</label>
										<input
											className="form_input_fields"
											type="text"
											name="lastName"
											value={email}
											onChange={(e)=>setEmail(e.currentTarget.value)}
										/>
									</div>
									<div className="form-group position-relative mb-4 pl-3 pr-3">
										<label htmlFor="lastName">Username</label>
										<input
											className="form_input_fields"
											type="text"
											name="lastName"
											value={username}
											onChange={(e)=>setUserName(e.currentTarget.value)}
										/>
									</div>
									<div className='form-group position-relative mb-1 px-3 phone-input-setting mb-4 pl-3 pr-3'>
									<label htmlFor="telephone">Telephone</label>
									<input
										className='form_input_fields tel-field'
										type='number'
										name='telephone'
										value={telephone}
										onChange={(e)=>setTelephone(e.currentTarget.value)}
										
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
									<div className="form-group position-relative mb-4 pl-3 pr-3">
										<label htmlFor="gender">Gender</label>
										<select
											className="form_input_fields bg-transparent"
											type="select"
											name="gender"
											onChange={(e)=>{
												setGender(e.currentTarget.value);
											}}
										>
											<option value='Male'>Male</option>
											<option value='Female'>Female</option>
										</select>
										<i
											className="fa fa-angle-down position-absolute form-select-dropdown"
										></i>
									</div>
									<div className="form-group position-relative mb-4 pl-3 pr-3">
										<label htmlFor="age">Age</label>
										<input
											className="form_input_fields"
											type="number"
											name="age"
											value={age}
											onChange={(e)=>setAge(e.currentTarget.value)}
										/>
									</div>
                              <div className="form-group mt-4 px-3" onClick={() => {
                                    setUsersPage('addnew-2')
                                    }}>
										<label htmlFor="submit"></label>
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

export default AddNewUserOne