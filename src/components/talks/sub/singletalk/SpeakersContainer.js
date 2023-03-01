import React from "react";
import { useNavigate } from "react-router-dom";
import SpeakersList from "./SpeakersList";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { fetchDataWithAxios } from "../../../../config/fetchDataWithAxios";
import SingleTalkHeading from "./SingleTalkHeading";

const SpeakersContainer = ({ speakers, singleTalkInfo, setSingleTalkInfo }) => {
  let speakersList = speakers;
  const [pageNumber, setPageNumber] = useState(0);
  const thrybeTalksPerPage = 10;
  const pagesVisited = pageNumber * thrybeTalksPerPage;
  const displaySpeakers = speakersList.slice(
    pagesVisited,
    pagesVisited + thrybeTalksPerPage
  );
  const pageCount = Math.ceil(speakers.length / thrybeTalksPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className='custom-card mb-4'>
      <div className='mb-3'>
        <img
          src='./assets/images/allTalksIcon.svg'
          alt='talksicon'
          style={{ height: "20px", width: "20px" }}
        />
        <span>Speakers</span>
      </div>
      <div className='row'>
        {speakers?.map((item, index) => (
          <SpeakersList
            singleTalkInfo={singleTalkInfo}
            setSingleTalkInfo={setSingleTalkInfo}
            item={item}
            key={index}
          />
        ))}
      </div>
      {speakersList.length > 0 && (
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

export default SpeakersContainer;
