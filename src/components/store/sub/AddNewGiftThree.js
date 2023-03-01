import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import baseUrl from '../../api/baseUrl'

const AddNewGiftThree = ({setStorePage,giftName,description,price, privacy,giftImg, setGiftImg,giftImage}) => {
  const token = sessionStorage.getItem("token");
  const navigate= useNavigate();

  // useEffect(() => {
  //   if (
  //     typeof giftImg === "object" || giftImg === ''
  //   ) {
  //     handleConversion();
  //   }
  // });

  const handleConversion = () => {
    var file = giftImg;
    var reader = new FileReader();
    reader.onloadend = function () {
      setGiftImg(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        giftName, description, price, privacy, typeof giftImg !== 'object'
      ) {
        let formData = new FormData();
        formData.set("GiftImage", giftImage);
        formData.set("GiftName", giftName);
        formData.set("Description", description);
        formData.set("Privacy", privacy);
        formData.set("Token", price);
        formData.set("NairaEquivalent", price);
        formData.set("Status", true);
        let result = await fetch(
          `${baseUrl()}/AddGift"`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );
        result = await result;
        // toast.success("Success!");
      //   for (const [key, value] of formData) {
      //     console.log(key, `: ${value}`);
      // }
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
    <>
    <div className='row mb-5'>
      <div className='col-md-6 d-flex align-item-center mt-3 basic-info'>
        <div className='d-flex align-item-center ml-2 basic-info-inner'>
          <div
            className='circle purple d-flex justify-content-center align-item-center mb-2'
            onClick={() => {
              setStorePage("addnew-1");
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
              setStorePage("addnew-2");
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
                    src={giftImg}
                    className='img-fluid gift-img add'
                    style={{ width: "100%" }}
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-2 mb-4'>
            <h5 className='f-weight-600 mb-2'>{giftName}</h5>
          </div>
          <hr />
          <div className='mt-2 mb-2'>
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
          <hr />
          <div className='d-flex'>
            <div>
              <h5 className='font-sm2 mb-0 f-weight-600'>{price}</h5>
              <div className='mt-3'>
                <span className='font-sm'>Token Value</span>
              </div>
            </div>
            <div className='ml-3'>
              <h5 className='font-sm2 mb-0 f-weight-600'>₦1,200</h5>
              <div className='mt-3'>
                <span className='font-sm'>Naira Value</span>
              </div>
            </div>
          </div>
          <div className='form-group mt-4'>
            <label for='submit'></label>
            <input
              type='submit'
              className='btn btn-continue'
              value='Continue'
              onClick={(e)=>handleSubmit(e)}
            />
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  </>
  )
}

export default AddNewGiftThree