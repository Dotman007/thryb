import React from "react";
import { useEffect } from "react";

const Gallery = ({ gallery, gallerySpinner, fetchGallery }) => {
  let image1 = gallery?.image1?.substring(8) || "";
  let image2 = gallery?.image2?.substring(8) || "";
  let image3 = gallery?.image3?.substring(8) || "";
  let image4 = gallery?.image4?.substring(8) || "";
  let image5 = gallery?.image5?.substring(8) || "";
  let image6 = gallery?.image6?.substring(8) || "";
  useEffect(() => {
    fetchGallery();
  });
  return (
    <>
      {!gallerySpinner && (
        <div
          className='tab-pane fade show active'
          id='v-pills-gallery'
          role='tabpanel'
          aria-labelledby='v-pills-gallery-tab'
        >
          <div className='Gallery'>
            <h6 className='f-weight-600'>Photo Album</h6>
            <p className='font-sm2 mb-4'>
              Profiles with pictures have more chances
            </p>
            <div className='grid-container'>
              {image1 && (
                <div className='item1'>
                  <img
                    className='img-fluid'
                    src={`https://${image1}`}
                    alt='image1'
                  />
                </div>
              )}
              {image2 && (
                <div className='item2'>
                  <img
                    className='img-fluid'
                    src={`https://${image2}`}
                    alt='image2'
                  />
                </div>
              )}
              {image3 && (
                <div className='item3'>
                  <img
                    className='img-fluid'
                    src={`https://${image3}`}
                    alt='image3'
                  />
                </div>
              )}
              {image4 && (
                <div className='item4'>
                  <img
                    className='img-fluid'
                    src={`https://${image4}`}
                    alt='image4'
                  />
                </div>
              )}
              {image5 && (
                <div className='item5'>
                  <img
                    className='img-fluid'
                    src={`https://${image5}`}
                    alt='image5'
                  />
                </div>
              )}
              {image6 && (
                <div className='item6'>
                  <img
                    className='img-fluid'
                    src={`https://${image6}`}
                    alt='image6'
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {gallerySpinner && <div className='spinner'></div>}
    </>
  );
};

export default Gallery;
