import React, { useState, useEffect } from "react";
import RoomsList from "./RoomsList";
import { useNavigate } from "react-router-dom";
import api from "../api/base";
import ReactPaginate from "react-paginate";
const RoomsListContainer = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  roomsPage,
  setRoomsPage,
  roomsList,
  setRoomsList,
  filter,
  setFilter,
  showSpinner,
  setShowSpinner,
  singleRoomInfo,
  setSingleRoomInfo,
  search,
  setSearch
}) => {
  const navigate = useNavigate();
  let [token, setToken] = useState(" ");
  const [pageNumber, setPageNumber] = useState(0);
  const roomsPerPage = 10;
  const pagesVisited = pageNumber * roomsPerPage;
  const displayRooms = roomsList.slice(
    pagesVisited,
    pagesVisited + roomsPerPage
  );
  const pageCount = Math.ceil(roomsList.length / roomsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    const fetchRoomsList = async () => {
      try {
        const response = await api.get("/ThrybeRoomLists");
        setRoomsList(response.data);
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
    fetchRoomsList();
  }, [page]);

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
                    <th colSpan='2'>Banner</th>
                    <th>Room Title</th>
                    <th>Date Created</th>
                    <th>Members</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {displayRooms.length >= 1 &&
                    displayRooms.map((item, index) => (
                      <RoomsList
                        showBtn={showBtn}
                        setShowBtn={setShowBtn}
                        roomsPage={roomsPage}
                        setRoomsPage={setRoomsPage}
                        item={item}
                        key={index}
                        singleRoomInfo={singleRoomInfo}
                        setSingleRoomInfo={setSingleRoomInfo}
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
      {displayRooms.length > 0 && (
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

export default RoomsListContainer;
