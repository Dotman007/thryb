import React, { useState, useEffect } from "react";
import SeeksList from "./SeeksList";
import { useNavigate } from "react-router-dom";
import api from "../api/base";
import ReactPaginate from "react-paginate";

const SeeksListContainer = ({
  showBtn,
  setShowBtn,
  seeksPage,
  setSeeksPage,
  seeksList,
  setSeeksList,
  filter,
  setFilter,
  page,
  showSpinner,
  setShowSpinner,
  seekInfo,
  setSeekInfo,
  search,
  setSearch,
  searchList,
  setSearchList,
  listMode,
  setListMode
}) => {
  const navigate = useNavigate();
  let [token, setToken] = useState(" ");
  const [pageNumber, setPageNumber] = useState(0);
  const seeksPerPage = 10;
  const pagesVisited = pageNumber * seeksPerPage;
  const displaySeeks = listMode == 'list' ? seeksList.slice(pagesVisited, pagesVisited + seeksPerPage) : searchList.slice(pagesVisited, pagesVisited + seeksPerPage);
  const pageCount = listMode == 'list' ? Math.ceil(seeksList.length / seeksPerPage) : Math.ceil(searchList.length / seeksPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    const fetchSeeksList = async () => {
      try {
        const response = await api.get("/ThrybeSeekList");
        setSeeksList(response.data);
        setShowSpinner(false);
        setFilter(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSeeksList();
  }, [page]);

  return (
    <>
      <div className='row'>
        <div className='col-12 mb-3'>
          <div className='custom-card'>
            <div className='users-table-div table-responsive'>
              <table className='table table-borderlerss users-table'>
                <thead>
                  <tr>
                    <th></th>
                    <th colSpan='2'>Seek Title</th>
                    <th>Date Created</th>
                    <th>Cost</th>
                    <th>Duration</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {listMode== 'list' && !showSpinner &&
                    displaySeeks.map((item, index) => (
                      <SeeksList
                        showBtn={showBtn}
                        setShowBtn={setShowBtn}
                        seeksPage={seeksPage}
                        setSeeksPage={setSeeksPage}
                        item={item}
                        key={index}
                        filter={filter}
                        setFilter={setFilter}
                        seekInfo={seekInfo}
                        setSeekInfo={setSeekInfo}
                        search={search}
                        setSearch={setSearch}
                      />
                    ))}
                  {listMode== 'filter' && !showSpinner &&
                    displaySeeks.map((item, index) => (
                      <SeeksList
                        showBtn={showBtn}
                        setShowBtn={setShowBtn}
                        seeksPage={seeksPage}
                        setSeeksPage={setSeeksPage}
                        item={item}
                        key={index}
                        filter={filter}
                        setFilter={setFilter}
                        seekInfo={seekInfo}
                        setSeekInfo={setSeekInfo}
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
      {seeksList.length > 0 && (
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

export default SeeksListContainer;
