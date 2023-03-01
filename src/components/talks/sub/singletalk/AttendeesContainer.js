import React from "react";
import AttendeesList from "./AttendeesList";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { fetchDataWithAxios } from "../../../../config/fetchDataWithAxios";
import SingleTalkHeading from "./SingleTalkHeading";

const AttendeesContainer = ({ members, singleTalkInfo, setSingleTalkInfo }) => {
  let membersList = members;
  const [pageNumber, setPageNumber] = useState(0);
  const thrybeTalksPerPage = 10;
  const pagesVisited = pageNumber * thrybeTalksPerPage;
  const displaySpeakers = membersList.slice(
    pagesVisited,
    pagesVisited + thrybeTalksPerPage
  );
  const pageCount = Math.ceil(members.length / thrybeTalksPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className='custom-card mb-4'>
      <div className='mb-3'>
        <img
          src='./assets/images/profile-icon.svg'
          alt='talksicon'
          style={{ height: "20px", width: "20px" }}
        />
        <span>Attendees</span>
      </div>
      <div className='row'>
        {members?.map((item, index) => (
          <AttendeesList
            singleTalkInfo={singleTalkInfo}
            setSingleTalkInfo={setSingleTalkInfo}
            item={item}
            key={index}
          />
        ))}
      </div>
      {membersList.length > 0 && (
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
    </div>
  );
};

export default AttendeesContainer;
