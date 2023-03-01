import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import AddNewGiftOne from "./AddNewGiftOne";
import AddNewGiftThree from "./AddNewGiftThree";
import AddNewGiftTwo from "./AddNewGiftTwo";

const AddNewGift = ({ page, setPage, storePage, setStorePage }) => {
  const [giftName, setGiftName]= useState('');
  const [description, setDescription]= useState('');
  const [price, setPrice]= useState('');
  const [privacy, setPrivacy]= useState('public');
  const [giftImage, setGiftImage]= useState('');
  const [giftImg, setGiftImg]= useState('');
  const navigate = useNavigate();
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        {/* breadcrumb */}
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
                    setStorePage("mgt");
                  }}
                >
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    Thrybe Store
                  </span>
                </li>
                <li
                  className='mr-2'
                  onClick={(e) => {
                    setStorePage("addnew-1");
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
              <h5>Create a new Thrybe Gift</h5>
            </div>
          </div>
        </div>

        {storePage == "addnew-1" && (
          <AddNewGiftOne  setStorePage={setStorePage} giftName={giftName} setGiftName={setGiftName}
           description={description} setDescription={setDescription} price={price} setPrice={setPrice} 
           privacy={privacy} setPrivacy={setPrivacy} 
           />
        )}

        {storePage == "addnew-2" && (
          <AddNewGiftTwo setStorePage={setStorePage} giftImage={giftImage} setGiftImage={setGiftImage} setGiftImg={setGiftImg}  giftImg={giftImg}/>
        )}

        {storePage == "addnew-3" && (
         <AddNewGiftThree  setStorePage={setStorePage} giftImage={giftImage} setGiftImage={setGiftImage} giftName={giftName} setGiftName={setGiftName}
         description={description} setDescription={setDescription} price={price} setPrice={setPrice} 
         privacy={privacy} setPrivacy={setPrivacy}  giftImg={giftImg} setGiftImg={setGiftImg}/>
        )}
      </div>
    </div>
  );
};

export default AddNewGift;
