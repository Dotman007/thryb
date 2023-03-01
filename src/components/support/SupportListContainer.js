import React from "react";
import SupportList from "./SupportList";
import { useState, useEffect } from "react";
import api from "../api/base";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { fetchDataWithAxios } from "../../config/fetchDataWithAxios";
const SupportListContainer = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  supportPage,
  setSupportPage,
  supportList,
  setSupportList,
  showSpinner,
  setShowSpinner,
  setFilter,
  search,
  setSearch,
  singleSupport,
  setSingleSupport
}) => {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0);
  const seeksPerPage = 10;
  const pagesVisited = pageNumber * seeksPerPage;
  const displayList = supportList.slice(
    pagesVisited,
    pagesVisited + seeksPerPage
  );
  const pageCount = Math.ceil(supportList.length / seeksPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDataWithAxios("post", "/SupportList");
        setSupportList(response.data);
        setShowSpinner(false);
        setFilter(true);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchData();
  }, [page]);
  return (
    <>
      <div className='row mt-4'>
        <div className='col-12 mb-3'>
          <div className='custom-card'>
            <div className='p-1 table-responsive'>
              <table className='table support-table'>
                <thead>
                  <tr>
                    <th></th>
                    <th colSpan='2'>Message type</th>
                    <th>Subject</th>
                    <th>Message Body</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>
                  {!showSpinner &&
                    displayList.map((item, index) => (
                      <SupportList
                        showBtn={showBtn}
                        setShowBtn={setShowBtn}
                        supportPage={supportPage}
                        setSupportPage={setSupportPage}
                        item={item}
                        key={index}
                        search={search}
                        setSearch={setSearch}
                        singleSupport={singleSupport}
                        setSingleSupport={setSingleSupport}
                      />
                    ))}
                </tbody>
              </table>
              {showSpinner && <div className='spinner'></div>}
            </div>
          </div>
        </div>
      </div>
      {supportList.length > 0 && (
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

export default SupportListContainer;
