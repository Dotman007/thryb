import React from "react";
import PlansList from "./PlansList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { fetchDataWithAxios } from "../../config/fetchDataWithAxios";
const PlansListContainer = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  plansPage,
  setPlansPage,
  planInfo,
  setPlanInfo,
  search,
  setSearch
}) => {
  const [plansList, setPlansList] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  let plans = plansList;
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const displayPlans = plans.slice(pagesVisited, pagesVisited + usersPerPage);
  const pageCount = Math.ceil(plans.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const navigate = useNavigate();

  useEffect(() => {
    const fetchThrybeTalks = async () => {
      try {
        const response = await fetchDataWithAxios("get", "/PlanList");
        setPlansList(response.data);
        setShowSpinner(false);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchThrybeTalks();
  }, []);

  return (
    <>
      <div className='row'>
        <div className='col-12 mb-3'>
          <div className='custom-card'>
            <div className='plans-table-div table-responsive'>
              <table className='table table-borderless plans-table'>
                <thead>
                  <tr>
                    <th></th>
                    <th colSpan='2'>Price Name</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Duration</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {displayPlans.length >= 1 &&
                    displayPlans.map((item, index) => (
                      <PlansList
                        item={item}
                        key={index}
                        setPlansPage={setPlansPage}
                        plansPage={plansPage}
                        planInfo={planInfo}
                        setPlanInfo={setPlanInfo}
                        search={search}
                        setSearch={setSearch}
                      />
                    ))}
                </tbody>
              </table>
              {showSpinner && <div className='spinner'></div>}
            </div>
          </div>
        </div>
      </div>
      {plans.length > 0 && (
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      )}
    </>
  );
};

export default PlansListContainer;
