import React from "react";
import UsersList from "./UsersList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import api from '../api/base'

const UsersListContainer = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  usersPage,
  setUsersPage,
  usersList,
  showSpinner,
  userId,
  setUserId,
  singleUserInfo,
  setSingleUserInfo,
  setUsersList, 
  setShowSpinner, 
  setFilter,
  search,
  setSearch,
  setShowOverlay,
  setUserAction
}) => {
  let users = usersList;
  let navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = usersList.slice(pagesVisited, pagesVisited + usersPerPage);
  const pageCount = Math.ceil(usersList.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    const fetchUsersList = async () => {
      try {
        const response = await api.get("/UserList");
        setUsersList(response.data);
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
    fetchUsersList();
  }, []);
  return (
    <>
      <div className='row'>
        <div className='col-12 mb-3'>
          <div className='custom-card'>
            <div className='users-table-div table-responsive'>
              <table className='table table-borderless users-table'>
                <thead>
                  <tr>
                    <th></th>
                    <th colSpan='2'>User name and avatar</th>
                    <th>Email address</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {displayUsers.length >= 1 &&
                    displayUsers.map((item, index) => (
                      <UsersList
                        key={index}
                        showBtn={showBtn}
                        setShowBtn={setShowBtn}
                        usersPage={usersPage}
                        setUsersPage={setUsersPage}
                        item={item}
                        userId={userId}
                        setUserId={setUserId}
                        singleUserInfo={singleUserInfo}
                        setSingleUserInfo={setSingleUserInfo}
                        search={search}
                        setSearch={setSearch}
                        setShowOverlay = {setShowOverlay}
                        setUserAction = {setUserAction}
                      />
                    ))}
                </tbody>
              </table>
              {showSpinner && <div className='spinner'></div>}
            </div>
          </div>
        </div>
      </div>
      {usersList.length > 1 && (
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

export default UsersListContainer;
