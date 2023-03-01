import React, { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import {fetchDataWithAxios} from '../../../config/fetchDataWithAxios'
import AddUsers from "./AddUsers";
import Priviledge from "./Priviledge";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNewRole = ({ showBtn, setShowBtn, rolesPage, setRolesPage }) => {
  const [roleName,setRoleName]= useState(1);
  const [roleList, setRoleList]= useState([]);
  const [roleType, setRoleType]= useState('custom');
  const [description, setDescription]= useState('');
  const  [usersList, setUsersList]= useState('');
  const  [roleSelectedUsers, setRoleSelectedUsers]= useState([]);
  const  [userSearch, setUserSearch]= useState('');
  const navigate = useNavigate();
  const previewImages= roleSelectedUsers.map(item => item?.image ) || [];
  const [priviledgesList, setPriviledgesList]=useState([]);
  const [privileges, setPriviledges] = useState([]);
  const [showSpinner, setShowSpinner]= useState(false);
  const token = sessionStorage.getItem("token");
  const privilegesObj = privileges.map((item) => {
  return  {permissionId : item}
  });

  useEffect(() => {
    const fetchThrybeTalks = async () => {
      try {
        const response = await fetchDataWithAxios("get", "/GetRoleList");
        setRoleList(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchThrybeTalks();
  }, []);

  useEffect(() => {
    const fetchThrybeTalks = async () => {
      try {
        setPriviledges([]);
        const response = await fetchDataWithAxios("get", `/GetAllPages?roleId=${roleName}`);
        setPriviledgesList(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchThrybeTalks();
  }, [roleName]);

  useEffect(() => {
    const fetchUsersNumber = async () => {
      try {
        const response = await fetchDataWithAxios("get", "/BackOfficeUserList");
        setUsersList(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsersNumber();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (roleName && roleSelectedUsers.length > 0 && privileges.length > 0) {
        let body = {
          roleId: roleName,
          roleType,
          backOfficeUserDto: roleSelectedUsers,
          listOfPermissions: privilegesObj
        }
        setShowSpinner(true);
        body = JSON.stringify(body);
        console.log(body);
        let result = await fetch(
          "https://thrybe.azurewebsites.net/api/BackofficeUser/AddUserToRole",
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
          setRolesPage('mgt');
        },1000)
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
    <div className='main-content'>
      <div className='container-fluid'>
        <div className='row mb-3'>
          <div className='col-12 mt-5'>
            <div className='d-flex align-item-center'>
              <ul className='d-flex'>
                <li className='mr-2'>
                  <i className='fa fa-home'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>Home</span>
                </li>
                <li className='mr-2'>
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    Roles Management
                  </span>
                </li>
                <li className='mr-2'>
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    <strong>Create New</strong>
                  </span>
                </li>
              </ul>
            </div>
            <div className='mt-4 d-flex align-items-center'>
              <h5>Roles Manangement</h5>
            </div>
          </div>
        </div>
        {rolesPage == "addnew-1" && (
          <>
            <div className='row mb-5'>
              <div className='col-md-6 d-flex justify-content-between align-item-center mt-3 basic-info'>
                <div className='d-flex align-item-center ml-2 basic-info-inner'>
                  <div className='circle purple d-flex justify-content-center align-item-center'>
                    <span className='text-white'>1</span>
                  </div>
                  <h6 className='mt-2 ml-2'>Role Information</h6>
                </div>
                <div className='d-flex mr-2'>
                  <div
                    className='circle white d-flex justify-content-center align-item-center m-2'
                    onClick={(e) => {
                      setRolesPage("addnew-2");
                    }}
                  >
                    <span>2</span>
                  </div>
                  <div
                    className='circle white d-flex justify-content-center align-item-center m-2'
                    onClick={(e) => {
                      setRolesPage("addnew-3");
                    }}
                  >
                    <span>3</span>
                  </div>
                  <div
                    className='circle white d-flex justify-content-center align-item-center m-2'
                    onClick={(e) => {
                      setRolesPage("addnew-4");
                    }}
                  >
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='custom-card col-md-6 ml-3'>
                <form className='add-user-form'>
                  <div className='form-group position-relative mb-4 pl-3 pr-3'>
                    <label for='privacy'>Role Name</label>
                    <select
                      className='form_input_fields bg-transparent'
                      type='select'
                      name='privacy'
                      onChange={(e)=>{
                        setRoleName(e.currentTarget.value)
                      }}
                    >
                      {roleList.map((item, index) =>(
                        <option key={index} value={item.id}>{item.name}</option>
                      ))}
                    </select>
                    <i className='fa fa-angle-down position-absolute form-select-dropdown'></i>
                  </div>
                  <div className='form-group position-relative mb-4 pl-3 pr-3'>
                    <label for='privacy'>Role Type</label>
                    <select
                      className='form_input_fields bg-transparent'
                      type='select'
                      name='privacy' 
                      onChange={(e)=>{
                        setRoleType(e.currentTarget.value)
                      }}
                    >
                      <option value='custom'>Custom</option>
                      <option value='closed'>Closed</option>
                    </select>
                    <i className='fa fa-angle-down position-absolute form-select-dropdown'></i>
                  </div>
                  <div className='form-group position-relative mb-4 pl-3 pr-3'>
                    <label for='talk'></label>
                    <textarea
                      className='form_textarea_fields pl-4 pt-3 w-100'
                      placeholder='role description'
                      name='talk' value={description}
                      onChange={(e)=>{
                        setDescription(e.currentTarget.value);
                      }}
                    ></textarea>
                  </div>
                  <div
                    className='form-group mt-4'
                    onClick={(e) => {
                      e.preventDefault();
                      setRolesPage("addnew-2");
                    }}
                  >
                    <input
                      type='submit'
                      className='btn btn-continue'
                      value='Continue'
                    />
                  </div>
                </form>
              </div>
            </div>
          </>
        )}

        {rolesPage == 'addnew-2' && <AddUsers rolesPage={rolesPage}
        setRolesPage={setRolesPage}
        usersList={usersList}
        setUsersList={setUsersList}
        roleSelectedUsers={roleSelectedUsers}
        setRoleSelectedUsers={setRoleSelectedUsers}
        userSearch={userSearch}
        setUserSearch={setUserSearch}
  />}


        {rolesPage == "addnew-3" && (
          <>
            <div className='row mb-5'>
              <div className='col-xl-5 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info'>
                <div className='d-flex align-item-center ml-2 basic-info-inner'>
                  <div
                    className='circle purple d-flex justify-content-center align-items-center'
                    onClick={(e) => {
                      setRolesPage("addnew-1");
                    }}
                  >
                    <i className='fa fa-check text-white'></i>
                  </div>
                  <div
                    className='circle purple d-flex justify-content-center align-items-center'
                    onClick={(e) => {
                      setRolesPage("addnew-2");
                    }}
                  >
                    <i className='fa fa-check text-white'></i>
                  </div>
                  <div
                    className='circle num2 purple d-flex justify-content-center align-item-center ml-2'
                    onClick={(e) => {
                      setRolesPage("addnew-3");
                    }}
                  >
                    <span>3</span>
                  </div>
                  <h6 className='mt-2 ml-2'>Priviledges</h6>
                </div>
                <div className='d-flex mr-2'>
                  <div
                    className='circle white d-flex justify-content-center align-item-center m-2'
                    onClick={(e) => {
                      setRolesPage("addnew-4");
                    }}
                  >
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-xl-5 col-lg-6 col-md-8'>
                <div className='custom-card'>
                  <form className='add-user-form'>
                    <div className='px-3 mt-3'>
                      <h6 for='userBio' className='mb-3 f-weight-600'>
                        Role Privileges
                      </h6>
                      <ul
                        style={{ listStyleType: "none" }}
                        className='privileges-list'
                      >
                        {priviledgesList.map((item, index) => (
                          <Priviledge  item={item} key={index} privileges={privileges} setPriviledges={setPriviledges} index={index}/>
                        ))}
                      </ul>
                    </div>
                    <div
                      className='form-group mt-4 px-3'
                      onClick={(e) => {
                        e.preventDefault();
                        setRolesPage("addnew-4");
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
        )}




        {rolesPage == "addnew-4" && (
          <>
            <div className='row mb-5'>
              <div className='col-xl-5 col-md-6 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info'>
                <div className='d-flex align-item-center ml-2 basic-info-inner'>
                  <div
                    className='circle purple d-flex justify-content-center align-items-center'
                    onClick={(e) => {
                      setRolesPage("addnew-1");
                    }}
                  >
                    <i className='fa fa-check text-white'></i>
                  </div>
                  <div
                    className='circle purple d-flex justify-content-center align-items-center ml-2'
                    onClick={(e) => {
                      setRolesPage("addnew-2");
                    }}
                  >
                    <i className='fa fa-check text-white'></i>
                  </div>
                  <div
                    className='circle purple d-flex justify-content-center align-items-center ml-2'
                    onClick={(e) => {
                      setRolesPage("addnew-3");
                    }}
                  >
                    <i className='fa fa-check text-white'></i>
                  </div>
                  <div className='circle purple d-flex justify-content-center align-item-center ml-2'>
                    <span>4</span>
                  </div>
                  <h6 className='mt-2 ml-2'>Preview</h6>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-xl-5 col-md-8'>
                <div className='custom-card'>
                  <form>
                    <div className='px-4'>
                      <div className='d-flex mt-4 justify-content-between align-items-center mb-4'>
                        <h6 className='mb-0 f-weight-600'>Role Name</h6>
                        <p className='mb-0 font-sm2'>{roleList.filter(item => item.id == roleName)[0]?.name || ''}</p>
                      </div>
                      <hr />
                      <div className='mt-4 mb-4'>
                        <h6 className='f-weight-600'>Description</h6>
                        <p className='font-sm'>
                          {description}
                        </p>
                      </div>
                      <hr />
                      <div className='mt-4 mb-4'>
                        <h6 className='f-weight-600'>Selected Users</h6>
                        <div className='row mt-2'>
                          {previewImages.slice(0,3).map((item, index)=>(
                            <div className='col-lg-3' key={index}>
                              <img
                                src={item}
                                className='w-100 role-img-preview'
                                alt='User'
                              />
                            </div>
                          ))
                          }
                          {previewImages.length > 4 &&
                            <div className='col-lg-3'>
                            <div className='position-relative d-flex align-items-center justify-content-center'>
                              <img
                                src={previewImages[4]}
                                className='img-fluid role-img-preview'
                                alt='User'
                              />
                              <div className='overlay'></div>
                              <div className='position-absolute'>
                                <h5
                                  className='text-light f-weight-600'
                                  style={{ top: "35px", left: "25px" }}
                                >
                                  {previewImages.length - 4}
                                </h5>
                              </div>
                            </div>
                          </div>
                          }
                          
                        </div>
                        <hr />
                      </div>
                      <div className='mt-4 mb-4'>
                        <h6 className='f-weight-600'>Role Privileges</h6>
                        {privileges.map((item, index) => (
                        <div className='custom-card d-flex justify-content-between align-items-center mb-3 mt-4' key={index}>
                          <div className='d-flex align-items-center'>
                            <div className='ml-4'>
                              <h6 className='f-weight-600'>{priviledgesList.filter(i => i.id == item)[0].name}</h6>
                            </div>
                          </div>
                        </div>
                        ))}
                      </div>
                      <div className='form-group mt-4 px-3'>
                        <label for='submit'></label>
                        {!showSpinner &&<input
                          type='submit'
                          className='btn btn-continue'
                          value='Continue'
                          onClick={(e) =>{
                            handleSubmit(e);
                          }}
                        />}
                        {showSpinner && <div className='spinner'></div>}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddNewRole;
