import React from "react";
import MoreList from "./MoreList";
import api from "../../../api/base";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

const More = ({ userId, setUserId, page }) => {
  const navigate = useNavigate();
  const endpoint = `/GetUserMore?id=${userId}`;
  const [moreList, setMoreList] = useState([]);
  const [moreSpinner, setMoreSpinner] = useState(true);
  // let users = usersList;
  const [pageNumber, setPageNumber] = useState(0);
  const listPerPage = 10;
  const pagesVisited = pageNumber * listPerPage;
  const displayList = moreList.slice(pagesVisited, pagesVisited + listPerPage);
  const pageCount = Math.ceil(moreList.length / listPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await api.get(endpoint);
        setMoreList(response.data);
        setMoreSpinner(false);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchList();
  }, [page]);
  return (
    <>
      <div
        className='tab-pane fade show active'
        id='more'
        aria-labelledby='more-tab'
      >
        <div className='table-more table-responsive mt-2 mb-2'>
          <table className='table table-borderless users-table'>
            <thead>
              <tr>
                <th>Transaction Type</th>
                <th>Transaction Medium</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {displayList.length >= 1 &&
                displayList.map((item, index) => (
                  <MoreList
                    key={index}
                    item={item}
                    userId={userId}
                    setUserId={setUserId}
                  />
                ))}
            </tbody>
          </table>
          {moreSpinner && <div className='spinner'></div>}
        </div>
      </div>
      {moreList.length > 0 && (
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

export default More;
