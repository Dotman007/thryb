import React from "react";
import api from "../../../api/base";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataWithAxios } from "../../../../config/fetchDataWithAxios";

const UserInfo = ({ userId, setUserId, page, singleUserInfo }) => {
  const navigate = useNavigate();
  const [walletDetails, setWalletDetails] = useState("");
  const [giftDetails, setGiftDetails] = useState("");
  let age = singleUserInfo.age ?? "";
  let avatar = singleUserInfo.avatar || "assets/images/unknown.jpg";
  let email = singleUserInfo.email || "not available";
  let flag = singleUserInfo.flag || "";
  let status = singleUserInfo.status ?? "";
  let fullName = singleUserInfo.fullName ?? "";
  let isVerified = singleUserInfo.isVerified ?? "";
  let userid = singleUserInfo.userid ?? "";
  let profession = singleUserInfo.profession ?? "";
  let location = singleUserInfo.location ?? "not available";
  let balance = walletDetails.balance ?? "";
  let gift = giftDetails.gift ?? "";
  let giftEquivalent = giftDetails.giftEquivalent ?? "";

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  
  useEffect(() => {
    const fetchUsersList = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/GetUserWalletDetails?id=${userId}`
        );
        setWalletDetails(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchUsersList();
  }, [page]);
  useEffect(() => {
    const fetchUsersList = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/GetUserGiftDetails?id=${userId}`
        );
        setGiftDetails(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchUsersList();
  }, [page]);
  return (
    <div className='row justify-content-around align-items-center'>
      <div className='col-lg-6 py-3'>
        <div className='d-flex align-items-center'>
          <div className='user-profile-picture'>
            <img
              src={avatar}
              className='img-fluid circle-img single-user-image'
              alt=''
            />
          </div>
          &nbsp;&nbsp;
          <div>
            <h4 className='f-weight-600'>
              {fullName}, &nbsp;&nbsp; {age} &nbsp;&nbsp;
              {isVerified && (
                <img src='/assets/images/Verified-user.svg' alt='Verified' />
              )}
            </h4>
            <h6 className='f-weight-600 font-sm2'>{profession}</h6>
            <span className='font-sm2'>
              <img src='/assets/images/Location.svg' alt='Location' />
              &nbsp;&nbsp; {location} &nbsp;&nbsp;
              <img src={flag} alt='Flag' className='img-location' />
            </span>
          </div>
        </div>
      </div>
      <div className='col-xl-4 col-md-6 py-3'>
        <div className='user-profile-wallet position-relative'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <div className='white-circle'>
                <img
                  src='/assets/images/walletIcon.svg'
                  className='img-fluid'
                  alt='wallet'
                />
              </div>
              &nbsp;&nbsp;
              <div>
                <p className='text-light mb-0 font-sm2'>
                  Current Wallet Balance
                </p>
              </div>
            </div>
            <span className='text-light'>₦</span>
          </div>
          <div className='px-2 mt-3'>
            <div className='row align-items-center'>
              <div className='col-6'>
                <h5 className='text-light f-weight-600 mb-3'>${balance}</h5>
                <p className='text-light font-sm2 mb-0'>${balance}</p>
              </div>
              <div className='col-6 d-flex flex-column align-items-end'>
                <span className='text-light f-weight-600 mb-3'>
                  <img
                    src='/assets/images/gift-icon.svg'
                    className='img-fluid'
                    alt='gift'
                  />
                  &nbsp;&nbsp;{gift} Gifts
                </span>
                <p className='text-light font-sm2 mb-0'>{giftEquivalent}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
