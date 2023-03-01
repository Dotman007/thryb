import React, { useState } from "react";
import { useEffect } from "react";
import { fetchDataWithAxios } from "../../../../config/fetchDataWithAxios";
import { useNavigate } from "react-router-dom";
import SubmittedProfilesList from "./SubmittedProfilesList";
import ReactPaginate from "react-paginate";

const SubmittedProfilesNav = ({ page }) => {
  const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(true);
  const [usersList, setUsersList] = useState([]);
  let users = usersList;
  const [pageNumber, setPageNumber] = useState(0);
  const thrybeUsersPerPage = 10;
  const pagesVisited = pageNumber * thrybeUsersPerPage;
  const displaythrybeUsers = users.slice(
    pagesVisited,
    pagesVisited + thrybeUsersPerPage
  );
  const pageCount = Math.ceil(users.length / thrybeUsersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    const fetchSeeksList = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `ProfileSubmissionsList`
        );
        setUsersList(response.data);
        setShowSpinner(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSeeksList();
  }, [page]);
  return (
    <>
      <div
        className='tab-pane fade show active'
        id='about'
        role='tabpanel'
        aria-labelledby='about-tab'
      >
        <div className='users-table-div table-responsive'>
          <table className='table table-borderless users-table'>
            <thead>
              <tr>
                <th colSpan='2'>User name and avatar</th>
                <th>Email address</th>
                <th>Location</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {displaythrybeUsers.length >= 1 &&
                displaythrybeUsers.map((item, index) => (
                  <SubmittedProfilesList key={index} item={item} />
                ))}
            </tbody>
          </table>
          {showSpinner && <div className='spinner'></div>}
        </div>
      </div>
      {users.length > 0 && (
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

export default SubmittedProfilesNav;
