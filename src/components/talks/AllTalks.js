import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataWithAxios } from "../../config/fetchDataWithAxios";
const AllTalks = ({ allTalks, setAllTalks }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTalksNumber = async () => {
      try {
        const response = await fetchDataWithAxios("post", "/AllTalks");
        setAllTalks(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchTalksNumber();
  }, []);

  return (
    <div className='col-xl-3 col-md-6 mb-3'>
      <div className='custom-card d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <img
            src='./assets/images/allTalksIcon.svg'
            className='img-fluid'
            alt='Talks'
          />
          <div className='ml-4'>
            <h6 className='font-sm2 f-weight-500'>ALL TALKS</h6>
            <h4 className='f-weight-600 mb-0'>{allTalks}</h4>
          </div>
        </div>
        {/* <a href='#'>
          <i className='fa fa-angle-right text-dark'></i>
        </a> */}
      </div>
    </div>
  );
};

export default AllTalks;
