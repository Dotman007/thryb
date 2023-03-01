import React from "react";
import { useNavigate } from "react-router-dom";
import AttendeesList from "./AttendeesList";
import SingleTalkBreadCrumb from "./SingleTalkBreadCrumb";
import SpeakersList from "./SpeakersList";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { fetchDataWithAxios } from "../../../../config/fetchDataWithAxios";
import SingleTalkHeading from "./SingleTalkHeading";
import SpeakersContainer from "./SpeakersContainer";
import AttendeesContainer from "./AttendeesContainer";

const SingleTalk = ({
  setPage,
  setTalksPage,
  singleTalkInfo,
  setSingleTalkInfo,
}) => {
  const navigate = useNavigate();
  let talkTitle = singleTalkInfo.talkName || "unknown";
  // let date = singleTalkInfo.date || "unknown";
  let status = singleTalkInfo.status;
  let authorImg = singleTalkInfo?.authorImg || "assets/images/unknown.jpg";
  let author = singleTalkInfo?.author || "unknown";
  let members = singleTalkInfo?.members || [];
  let speakers = singleTalkInfo?.speakers || [];
  let time = singleTalkInfo?.startTime || '00:00:00';
  let date = singleTalkInfo?.startDate || '00/00/0000';

  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <SingleTalkBreadCrumb
          setPage={setPage}
          setTalksPage={setTalksPage}
          talkTitle={talkTitle}
          date={date}
          time={time}
          status={status}
          authorImg={authorImg}
          author={author}
          members={members}
          speakers={speakers}
        />

        <div className='row mb-3'>
          <div className='col-12 p-3'>
            <div className='d-flex flex-column custom-card position-relative'>
              <SingleTalkHeading />

              <div className='members-pics custom-card'>
                <SpeakersContainer
                  speakers={speakers}
                  singleTalkInfo={singleTalkInfo}
                  setSingleTalkInfo={setSingleTalkInfo}
                />
                <AttendeesContainer
                  members={members}
                  singleTalkInfo={singleTalkInfo}
                  setSingleTalkInfo={setSingleTalkInfo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTalk;
