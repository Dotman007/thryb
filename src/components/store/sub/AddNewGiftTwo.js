import React from 'react'
import Compressor from "compressorjs";
import { useState } from 'react';

const AddNewGiftTwo = ({setStorePage,giftImage,setGiftImage, setGiftImg}) => {
  const [compressedFile, setCompressedFile] = useState(null);

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.4, // 0.6 can also be used, but its not recommended to go below.
      success: (compressedResult) => {
        // compressedResult has the compressed file.
        // Use the compressed file to upload the images to your server.
        setCompressedFile(compressedResult);
        setGiftImage(compressedResult)
        setGiftImg(compressedResult);
        // handleConversion();
        return compressedResult;
      },
    });
  };
  const handleConversion = () => {
    var file = compressedFile;
    var reader = new FileReader();
    reader.onloadend = function () {
      setGiftImg(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
            <div className='row mb-5'>
              <div className='col-xl-5 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info'>
                <div className='d-flex align-item-center ml-2 basic-info-inner'>
                  <div
                    className='circle purple d-flex justify-content-center align-items-center'
                    onClick={() => {
                      setStorePage("addnew-1");
                    }}
                  >
                    <i className='fa fa-check text-white'></i>
                  </div>
                  <div className='circle num2 purple d-flex justify-content-center align-item-center ml-2'>
                    <span>2</span>
                  </div>
                  <h6 className='mt-2 ml-2'>Gift Image</h6>
                </div>
                <div className='d-flex mr-2'>
                  <div
                    className='circle white d-flex justify-content-center align-item-center m-2'
                    onClick={() => {
                      setStorePage("addnew-3");
                    }}
                  >
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-xl-5 col-lg-6 col-md-8'>
                <div className='custom-card'>
                  <form>

                    <div className='form-group mb-4 group-banner store'>
                      <input
                        type='file'
                        name=''
                        id=''
                        accept='image/*'
                        className='room-image-input'
                        onChange={(e)=>{
                          e.preventDefault();
                          setGiftImage(e.target.files[0])
                          // handleCompressedUpload(e);
                        }
                      }
                      />
                    </div>
                    <div
                      className='form-group mt-4 px-3'
                      onClick={() => {
                        setStorePage("addnew-3");
                      }}
                    >
                      <input
                        type='submit'
                        className='btn btn-continue'
                        value='Continue'
                        onClick={(e)=>e.preventDefault()}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
  )
}

export default AddNewGiftTwo