import React from "react";
import StoreList from "./StoreList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/base";
import ReactPaginate from "react-paginate";
const StoreListContainer = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  storePage,
  setStorePage,
  setFilter,
  giftsList,
  setGiftsList,
  showSpinner,
  setShowSpinner,
  giftId,
  setGiftId,
  search,
  setSearch
}) => {
  const navigate = useNavigate();
  let [token, setToken] = useState(" ");
  // let [result, setResult] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const giftsPerPage = 10;
  const pagesVisited = pageNumber * giftsPerPage;
  const displayGifts = giftsList.slice(
    pagesVisited,
    pagesVisited + giftsPerPage
  );
  const pageCount = Math.ceil(giftsList.length / giftsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    const fetchgiftsList = async () => {
      try {
        const response = await api.get("/ThrybeGiftList");
        setGiftsList(response.data);
        setFilter(true);
        setShowSpinner(false);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchgiftsList();
  }, [page]);

  return (
    <>
      <div className='row'>
        <div className='col-12 mb-3'>
          <div className='custom-card'>
            <table className='table table-borderless users-table'>
              <thead>
                <tr>
                  <th></th>
                  <th colSpan='2'>Image</th>
                  <th>Gift Name</th>
                  <th>Gift Value</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {displayGifts.length >= 1 &&
                  displayGifts.map((item, index) => (
                    <StoreList
                      showBtn={showBtn}
                      setShowBtn={setShowBtn}
                      storePage={storePage}
                      setStorePage={setStorePage}
                      key={index}
                      item={item}
                      singleGiftId={giftId}
                      setSingleGiftId={setGiftId}
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
      {giftsList.length > 0 && (
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

export default StoreListContainer;
