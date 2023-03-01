import React from "react";
import { useNavigate } from "react-router-dom";

const RoleMembers = ({ showBtn, setShowBtn, rolesPage, setRolesPage }) => {
  const navigate = useNavigate();
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 mt-5 mb-3'>
            <ul className='myBreadcrumb p-0'>
              <li
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                <a href='#' className='d-flex align-items-center'>
                  <i className='fa fa-home text-darkGrey'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1 text-dark'>
                    Home
                  </span>
                </a>
              </li>
              <li
                className='active'
                onClick={(e) => {
                  e.preventDefault();
                  setRolesPage("mgt");
                }}
              >
                <a href='#' className='d-flex align-items-center'>
                  <span className='font-xs f-weight-500 mt-1 text-dark'>
                    Roles Manangement
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='row justify-content-between align-items-center'>
          <div className='col-lg-6 mt-3'>
            <div className='d-flex align-items-center'>
              <h5 className='mb-0'>Super Admin</h5>
              <div className='search-user position-relative ml-3'>
                <input
                  type='text'
                  className='search-user-field'
                  placeholder='Search'
                />
                <button
                  className='btn position-absolute'
                  style={{ right: "2px", top: "0" }}
                >
                  <img
                    src='./assets/images/searchIcon.svg'
                    style={{ height: "24px", width: "24px" }}
                    alt=''
                  />
                </button>
              </div>
            </div>
          </div>
          <div className='col-lg-5 mt-3'>
            <div className='align-items-center' id='users-actions2'>
              <button className='btn btn-danger'>
                Delete selected &nbsp; &nbsp;{" "}
                <img src='./assets/images/delete-icon.svg' alt='delete' />
              </button>
              &nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-12 mb-3'>
            <div className='custom-card'>
              <div className='table-responsive'>
                <table className='table table-borderless table-role'>
                  <thead>
                    <tr>
                      <th></th>
                      <th colspan='2'>User name and avatar</th>
                      <th>Email address</th>
                      <th>Location</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type='checkbox' id='check' />
                      </td>
                      <td colspan='2'>
                        <div className='d-flex align-items-center'>
                          <img src='./assets/images/user-avatar.svg' alt='' />
                          <div>
                            <h6>Farouq Asmaya</h6>
                            <span>
                              YouTuber &nbsp;&nbsp; 27 &nbsp;&nbsp;
                              <img
                                src='./assets/images/Verified-user.svg'
                                alt='Verified'
                              />
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>farouk.asm@smail.com</td>
                      <td>
                        <span>
                          <img
                            src='./assets/images/Location.svg'
                            alt='Location'
                          />
                          &nbsp;&nbsp; Serria leaone &nbsp;&nbsp;
                          <img
                            src='./assets/images/CountryFlag.svg'
                            alt='Flag'
                          />
                        </span>
                      </td>
                      <td>
                        <div className='diamond-status'>Diamond</div>
                      </td>
                      <td>
                        <div className='dropdown position-relative ml-4'>
                          <button
                            className='btn'
                            type='button'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            <svg
                              width='12'
                              height='12'
                              viewBox='0 0 12 12'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g clip-path='url(#clip0_1251_27914)'>
                                <path
                                  d='M7.06065 0.439338C7.64643 1.02512 7.64643 1.97487 7.06065 2.56066C6.47487 3.14644 5.52512 3.14644 4.93934 2.56066C4.35355 1.97487 4.35355 1.02512 4.93934 0.439338C5.5251 -0.146446 6.47484 -0.146446 7.06065 0.439338Z'
                                  fill='black'
                                ></path>
                                <path
                                  d='M7.06065 4.93934C7.64643 5.52512 7.64643 6.47487 7.06065 7.06065C6.47487 7.64643 5.52512 7.64643 4.93934 7.06065C4.35355 6.47487 4.35355 5.52512 4.93934 4.93934C5.5251 4.35355 6.47484 4.35355 7.06065 4.93934Z'
                                  fill='black'
                                ></path>
                                <path
                                  d='M7.06065 9.43934C7.64643 10.0251 7.64643 10.9749 7.06065 11.5607C6.47487 12.1464 5.52512 12.1464 4.93934 11.5607C4.35355 10.9749 4.35355 10.0251 4.93934 9.43934C5.5251 8.85355 6.47484 8.85355 7.06065 9.43934Z'
                                  fill='black'
                                ></path>
                              </g>
                              <defs>
                                <clipPath id='clip0_1251_27914'>
                                  <rect
                                    width='12'
                                    height='12'
                                    fill='white'
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                          <div
                            className='dropdown-menu mt-3'
                            aria-labelledby='dropdownMenuButton'
                          >
                            <div className='drop-down-menu-inner'>
                              <a className='dropdown-item' href='#'>
                                Action
                              </a>
                              <a className='dropdown-item' href='#'>
                                Another action
                              </a>
                              <a className='dropdown-item' href='#'>
                                Something else here
                              </a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type='checkbox' />
                      </td>
                      <td colspan='2'>
                        <div className='d-flex align-items-center'>
                          <img src='./assets/images/user-avatar.svg' alt='' />
                          <div>
                            <h6>Melody Jacob</h6>
                            <span>
                              YouTuber &nbsp;&nbsp; 28 &nbsp;&nbsp;
                              <img
                                src='./assets/images/Verified-user.svg'
                                alt='Verified'
                              />
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>farouk.asm@smail.com</td>
                      <td>
                        <span>
                          <img
                            src='./assets/images/Location.svg'
                            alt='Location'
                          />
                          &nbsp;&nbsp; Serria leaone &nbsp;&nbsp;
                          <img
                            src='./assets/images/CountryFlag.svg'
                            alt='Flag'
                          />
                        </span>
                      </td>
                      <td>
                        <div className='pending-status'>Pending</div>
                      </td>
                      <td>
                        <div className='dropdown position-relative ml-4'>
                          <button
                            className='btn'
                            type='button'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            <svg
                              width='12'
                              height='12'
                              viewBox='0 0 12 12'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g clip-path='url(#clip0_1251_27914)'>
                                <path
                                  d='M7.06065 0.439338C7.64643 1.02512 7.64643 1.97487 7.06065 2.56066C6.47487 3.14644 5.52512 3.14644 4.93934 2.56066C4.35355 1.97487 4.35355 1.02512 4.93934 0.439338C5.5251 -0.146446 6.47484 -0.146446 7.06065 0.439338Z'
                                  fill='black'
                                ></path>
                                <path
                                  d='M7.06065 4.93934C7.64643 5.52512 7.64643 6.47487 7.06065 7.06065C6.47487 7.64643 5.52512 7.64643 4.93934 7.06065C4.35355 6.47487 4.35355 5.52512 4.93934 4.93934C5.5251 4.35355 6.47484 4.35355 7.06065 4.93934Z'
                                  fill='black'
                                ></path>
                                <path
                                  d='M7.06065 9.43934C7.64643 10.0251 7.64643 10.9749 7.06065 11.5607C6.47487 12.1464 5.52512 12.1464 4.93934 11.5607C4.35355 10.9749 4.35355 10.0251 4.93934 9.43934C5.5251 8.85355 6.47484 8.85355 7.06065 9.43934Z'
                                  fill='black'
                                ></path>
                              </g>
                              <defs>
                                <clipPath id='clip0_1251_27914'>
                                  <rect
                                    width='12'
                                    height='12'
                                    fill='white'
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                          <div
                            className='dropdown-menu mt-3'
                            aria-labelledby='dropdownMenuButton'
                          >
                            <div className='drop-down-menu-inner'>
                              <a className='dropdown-item' href='#'>
                                Action
                              </a>
                              <a className='dropdown-item' href='#'>
                                Another action
                              </a>
                              <a className='dropdown-item' href='#'>
                                Something else here
                              </a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type='checkbox' />
                      </td>
                      <td colspan='2'>
                        <div className='d-flex align-items-center'>
                          <img src='./assets/images/user-avatar.svg' alt='' />
                          <div>
                            <h6>Farouq Asmaya</h6>
                            <span>
                              YouTuber &nbsp;&nbsp; 27 &nbsp;&nbsp;
                              <img
                                src='./assets/images/Verified-user.svg'
                                alt='Verified'
                              />
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>farouk.asm@smail.com</td>
                      <td>
                        <span>
                          <img
                            src='./assets/images/Location.svg'
                            alt='Location'
                          />
                          &nbsp;&nbsp; Serria leaone &nbsp;&nbsp;
                          <img
                            src='./assets/images/CountryFlag.svg'
                            alt='Flag'
                          />
                        </span>
                      </td>
                      <td>
                        <div className='verified-status'>Verified</div>
                      </td>
                      <td>
                        <div className='dropdown position-relative ml-4'>
                          <button
                            className='btn'
                            type='button'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            <svg
                              width='12'
                              height='12'
                              viewBox='0 0 12 12'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g clip-path='url(#clip0_1251_27914)'>
                                <path
                                  d='M7.06065 0.439338C7.64643 1.02512 7.64643 1.97487 7.06065 2.56066C6.47487 3.14644 5.52512 3.14644 4.93934 2.56066C4.35355 1.97487 4.35355 1.02512 4.93934 0.439338C5.5251 -0.146446 6.47484 -0.146446 7.06065 0.439338Z'
                                  fill='black'
                                ></path>
                                <path
                                  d='M7.06065 4.93934C7.64643 5.52512 7.64643 6.47487 7.06065 7.06065C6.47487 7.64643 5.52512 7.64643 4.93934 7.06065C4.35355 6.47487 4.35355 5.52512 4.93934 4.93934C5.5251 4.35355 6.47484 4.35355 7.06065 4.93934Z'
                                  fill='black'
                                ></path>
                                <path
                                  d='M7.06065 9.43934C7.64643 10.0251 7.64643 10.9749 7.06065 11.5607C6.47487 12.1464 5.52512 12.1464 4.93934 11.5607C4.35355 10.9749 4.35355 10.0251 4.93934 9.43934C5.5251 8.85355 6.47484 8.85355 7.06065 9.43934Z'
                                  fill='black'
                                ></path>
                              </g>
                              <defs>
                                <clipPath id='clip0_1251_27914'>
                                  <rect
                                    width='12'
                                    height='12'
                                    fill='white'
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                          <div
                            className='dropdown-menu mt-3'
                            aria-labelledby='dropdownMenuButton'
                          >
                            <div className='drop-down-menu-inner'>
                              <a className='dropdown-item' href='#'>
                                Action
                              </a>
                              <a className='dropdown-item' href='#'>
                                Another action
                              </a>
                              <a className='dropdown-item' href='#'>
                                Something else here
                              </a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleMembers;
