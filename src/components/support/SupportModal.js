import React from "react";
import { useState } from "react";
import SupportOptions from "./SupportOptions";
import api from "../api/base";
import { ToastContainer, toast } from "react-toastify";
import { fetchDataWithAxios } from "../../config/fetchDataWithAxios";
import { useNavigate } from "react-router-dom";

const SupportModal = ({
  modal,
  setModal,
  supportTypeList,
  supportList,
  setSupportList,
  showSpinner,
  setShowSpinner,
}) => {
  const [supportId, setSupportId] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showModalSpinner, setShowModalSpinner] = useState(false);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      setShowSpinner(true);
      const response = await fetchDataWithAxios("post", "/SupportList");
      setShowSpinner(false);
      setSupportList(response.data);
    } catch (err) {
      console.log(err);
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("img");
      sessionStorage.removeItem("pages");
      navigate("/login");
    }
  };

  async function sendSupport() {
    setShowModalSpinner(true);
    const body = {
      supportTypeId: supportId,
      messageTitle: title,
      description: description,
    };
    let result = await fetch(
      "https://thrybe.azurewebsites.net/api/BackofficeUser/ComposeSupport",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      }
    );
    result = await result.json();
    if (result?.responseCode == "00") {
      setShowModalSpinner(false);
      setModal("none");
      toast.success("Sent!");
      fetchData();
    }
  }

  return (
    <>
      {modal == "one" && (
        <div
          className='modal fade show'
          id='composeMessage'
          tabIndex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
          style={{ display: "block" }}
        >
          <div className='modal-dialog'>
            <div className='modal-content modal-design2'>
              <div className='modal-header'>
                <h5 className='modal-title'>Compose Message</h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'
                  onClick={(e) => {
                    e.preventDefault();
                    setModal("none");
                  }}
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <div className='modal-form-card'>
                  <form className='add-user-form mt-4'>
                    <div className='form-group position-relative mb-4 pl-3 pr-3'>
                      <label htmlFor='gender'>Message Type</label>
                      <select
                        className='form_input_fields bg-transparent'
                        type='select'
                        name='gender'
                        onChange={(e) => {
                          e.preventDefault();
                          setSupportId(e.currentTarget.value);
                        }}
                      >
                        {supportTypeList.map((item, index) => (
                          <SupportOptions key={index} item={item} />
                        ))}
                      </select>
                      <i className='fa fa-angle-down position-absolute form-select-dropdown'></i>
                    </div>
                    <div className='form-group position-relative mb-4 pl-3 pr-3'>
                      <label htmlFor='firstName'>Message Title</label>
                      <input
                        className='form_input_fields'
                        type='text'
                        name='firstName'
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                      />
                    </div>
                    <div className='form-group position-relative mb-4 pl-3 pr-3'>
                      <textarea
                        className='form_textarea_fields pl-4 pt-3 w-100'
                        placeholder='lorem lorem lorem lorem'
                        name='userBio'
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      ></textarea>
                    </div>
                    <div
                      className='form-group'
                      onClick={(e) => {
                        e.preventDefault();
                        if (description && title && supportId) setModal("two");
                      }}
                    >
                      <a
                        href='#'
                        className='btn btn-continue'
                        data-toggle='modal'
                        data-target='#MessageSent'
                        data-dismiss='modal'
                      >
                        Send Message
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {modal == "two" && (
        <div
          className='modal fade show'
          id='MessageSent'
          tabIndex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
          style={{ display: "block" }}
        >
          <div className='modal-dialog'>
            <div className='modal-content modal-design2'>
              <div className='modal-body'>
                <div className='modal-form-card'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-10'>
                      <div className='d-flex flex-column justify-content-center'>
                        {/* <img
                          src='./assets/images/del-purple.svg'
                          className='img-fluid mb-3'
                          alt='Successful'
                          style={{ maxHeight: "60px" }}
                        /> */}
                        {!showModalSpinner ? (
                          <>
                            <div className='mb-3'>
                              <h4 className='f-weight-600 text-center'>
                                Are you sure?
                              </h4>
                            </div>
                            <div className='buttons mb-3'>
                              <button
                                type='button'
                                className='btn btn-continue'
                                onClick={() => {
                                  if (description && title && supportId)
                                    sendSupport().catch((error) => {
                                      sessionStorage.removeItem("token");
                                      sessionStorage.removeItem("img");
                                      sessionStorage.removeItem("pages");
                                      navigate("/login");
                                    });
                                }}
                              >
                                Continue
                              </button>
                            </div>
                            <a
                              href='#'
                              className='text-center text-dark'
                              data-dismiss='modal'
                              onClick={(e) => {
                                e.preventDefault();
                                setModal("none");
                              }}
                            >
                              Cancel
                            </a>
                          </>
                        ) : (
                          <div className='spinner'></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default SupportModal;
