import React from "react";
import { useNavigate } from "react-router-dom";

const PlansBreadCrumb = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  plansPage,
  setPlansPage,
}) => {
  const navigate = useNavigate();

  return (
    <div className='row'>
      <div className='col-12 mt-5 mb-3'>
        <ul className='myBreadcrumb p-0'>
          <li
            onClick={(e) => {
              e.preventDefault();
              setPage("login");
              navigate("/");
            }}
          >
            <div
              href='#'
              className='d-flex align-items-center'
              onClick={(e) => {
                e.preventDefault();
                setPage("login");
                navigate("/");
              }}
            >
              <i className='fa fa-home text-darkGrey'></i>
              <span className='font-xs pl-2 f-weight-500 mt-1 text-dark'>
                Home
              </span>
            </div>
          </li>
          <li
            className='active'
            onClick={() => {
              setPlansPage("mgt");
            }}
          >
            <a href='#' className='d-flex align-items-center'>
              <span className='font-xs f-weight-500 mt-1 text-dark'>
                Plans management
              </span>
            </a>
          </li>
        </ul>
        <div className='mt-4 d-flex justify-content-between align-items-center'>
          <h5>Plans Management</h5>
          <a
            href='#'
            className={`btn btn-primary ${!showBtn ? "not-show" : ""}`}
            id='AddPlan'
            onClick={(e) => {
              e.preventDefault();
              setPlansPage("addnew-1");
            }}
          >
            Add New
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlansBreadCrumb;
