import React from "react";
import RoomMembersBreadCrumb from "./RoomMembersBreadCrumb";
import RoomMembersList from "./RoomMembersList";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RoomMembers = ({ singleRoomInfo }) => {
  let members = singleRoomInfo.roomMembers || [];
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0);
  const membersPerPage = 10;
  const pagesVisited = pageNumber * membersPerPage;
  const displayMembers = members.slice(
    pagesVisited,
    pagesVisited + membersPerPage
  );
  const pageCount = Math.ceil(members.length / membersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div
        className='tab-pane fade show active'
        id='members'
        role='tabpanel'
        aria-labelledby='members-tab'
      >
        <RoomMembersBreadCrumb />
        <div className='users-table-div table-responsive'>
          <table className='table table-borderless users-table'>
            <thead>
              <tr>
                <th colSpan='2'>User name and Avatar</th>
                <th>Email Address</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {displayMembers.length >= 1 &&
                displayMembers.map((item, index) => (
                  <RoomMembersList item={item} key={index} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {displayMembers.length > 0 && (
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

export default RoomMembers;
