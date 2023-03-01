import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import {fetchDataWithAxios} from '../../../config/fetchDataWithAxios'
import Compressor from "compressorjs";


const AddNewGameOne = ({gamesPage,setGamesPage,gameTypeList, setGameTypeList,
  colorOption,
  setColorOption,
  name,
  setName,
  description,
  setDescription,
  icon,
  setIcon,
  gameType,
  setGameType
}) => {
  const navigate = useNavigate();
  const [compressedFile, setCompressedFile]= useState('');
  useEffect(() => {
    const fetchGamesList = async () => {
      try {
        const response = await fetchDataWithAxios('get',"/GameTypeList");
        setGameTypeList(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchGamesList();
  }, [gamesPage]);

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
      success: (compressedResult) => {
        setCompressedFile(compressedResult);
        handleConversion();
        return compressedResult;
      },
    });
  };
  const handleConversion = () => {
    var file = compressedFile;
    var reader = new FileReader();
    reader.onloadend = function () {
      setIcon(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
            <div className='row mb-5'>
              <div className='col-xl-5 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info'>
                <div className='d-flex align-item-center ml-2 basic-info-inner'>
                  <div className='circle purple d-flex justify-content-center align-item-center'>
                    <span className='text-white'>1</span>
                  </div>
                  <h6 className='mt-2 ml-2'>Game’s Basic Details</h6>
                </div>
                <div className='d-flex mr-2'>
                  <div
                    className='circle white d-flex justify-content-center align-item-center m-2'
                    onClick={() => {
                      setGamesPage("addnew-2");
                    }}
                  >
                    <span>2</span>
                  </div>
                  <div
                    className='circle white d-flex justify-content-center align-item-center m-2'
                    onClick={() => {
                      setGamesPage("addnew-3");
                    }}
                  >
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-xl-5 col-md-8'>
                <div className='custom-card mb-3'>
                  <form className='add-user-form'>
                    <div className='form-group position-relative mt-4 mb-4 pl-3 pr-3'>
                      <label htmlFor='firstName'>Game Name</label>
                      <input
                        className='form_input_fields'
                        type='text'
                        name='firstName'
                        placeholder='e.g Ball of Rush'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                      />
                    </div>
                    <div className='form-group position-relative mb-4 pl-3 pr-3'>
                      <label htmlFor='talk'></label>
                      <textarea
                        className='form_textarea_fields pl-4 pt-3 w-100'
                        placeholder='Game description' value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        name='talk'>

                        </textarea>
                    </div>
                    <div className='form-group position-relative mb-4 pl-3 pr-3'>
                      <label htmlFor='privacy'>Game Type</label>
                      <select
                        className='form_input_fields bg-transparent'
                        type='select'
                        name='privacy'
                        onChange={(e)=>setGameType(e.target.value)}
                      >
                        {gameTypeList.map((item,index) =>(
                          <option value={item.id} key={index} >{item.name}</option>
                        ))}
                      </select>
                      <i className='fa fa-angle-down position-absolute form-select-dropdown'></i>
                    </div>
                    <hr />
                    <div className='form-group mb-4 group-banner store'>
                      <input
                        type='file'
                        name=''
                        id=''
                        accept='image/*'
                        className='room-image-input'
                        onChange={(e)=>{
                          setIcon(e.target.files[0])
                          handleCompressedUpload(e)
                        }
                      }
                      />
                    </div>
                    <hr />
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
                    <div
                      className='form-group mt-4 px-3'
                      onClick={(e) => {
                        e.preventDefault();
                        setGamesPage("addnew-2");
                      }}
                    >
                      <label htmlFor='submit'></label>
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
  )
}

export default AddNewGameOne