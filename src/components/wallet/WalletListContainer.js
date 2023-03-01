import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import WalletList from "./WalletList";
import api from "../api/base";

const WalletListContainer = ({
  page,
  setFilter,
  transactionList,
  setTransactionList,
  showSpinner,
  setShowSpinner,
}) => {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0);
  const transactionsPerPage = 10;
  const pagesVisited = pageNumber * transactionsPerPage;
  const displayTransactions = transactionList.slice(
    pagesVisited,
    pagesVisited + transactionsPerPage
  );
  const pageCount = Math.ceil(transactionList.length / transactionsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    const fetchTransactionsList = async () => {
      try {
        const response = await api.get("/AllTransaction");
        setTransactionList(response.data);
        setShowSpinner(false);
        setFilter(true);
      } catch (err) {
        console.log(err);
        setShowSpinner(false);
      }
    };
    fetchTransactionsList();
  }, [page]);

  return (
    <>
      <div className='row mt-4'>
        <div className='col-lg-11'>
          <div className='custom-card'>
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
                  {displayTransactions.length >= 1 &&
                    displayTransactions.map((item, index) => (
                      <WalletList key={index} item={item} />
                    ))}
                </tbody>
              </table>
              {showSpinner && <div className='spinner'></div>}
            </div>
          </div>
        </div>
      </div>
      {transactionList.length > 1 && (
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

export default WalletListContainer;
