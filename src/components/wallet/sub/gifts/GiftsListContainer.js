import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import api from "../../../api/base";
import GiftsList from "./GiftsList";

const GiftsListContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
  showBtn,
  setShowBtn,
  walletPage,
  setWalletPage,
}) => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const transactionsPerPage = 10;
  const pagesVisited = pageNumber * transactionsPerPage;
  const displayList = list.slice(
    pagesVisited,
    pagesVisited + transactionsPerPage
  );
  const pageCount = Math.ceil(list.length / transactionsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    const fetchGiftPurchases = async () => {
      try {
        const response = await api.get("/GiftPurchasesList");
        setList(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchGiftPurchases();
  });

  return (
    <>
      <div className='users-table-div table-responsive mt-4 mb-3'>
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
                <GiftsList key={index} item={item} />
              ))}
          </tbody>
        </table>
      </div>
      {list.length > 0 && (
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

export default GiftsListContainer;
