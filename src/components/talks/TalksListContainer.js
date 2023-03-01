import React from "react";
import TalksList from "./TalksList";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDataWithAxios } from "../../config/fetchDataWithAxios";

const TalksListContainer = ({
  showBtn,
  setShowBtn,
  talksPage,
  setTalksPage,
  thrybeTalks,
  showSpinner,
  talkId,
  setTalkId,
  setFilter,
  setShowSpinner,
  setThrybeTalks,
  singleTalkInfo,
  setSingleTalkInfo,
  search, 
  setSearch
}) => {
  let talks = thrybeTalks;
  const [pageNumber, setPageNumber] = useState(0);
  const thrybeTalksPerPage = 10;
  const pagesVisited = pageNumber * thrybeTalksPerPage;
  const displaythrybeTalks = talks.slice(
    pagesVisited,
    pagesVisited + thrybeTalksPerPage
  );
  const pageCount = Math.ceil(talks.length / thrybeTalksPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const navigate = useNavigate();

  useEffect(() => {
    const fetchThrybeTalks = async () => {
      try {
        const response = await fetchDataWithAxios("get", "/ThrybeTalkList");
        setThrybeTalks(response.data);
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
    fetchThrybeTalks();
  }, []);
  return (
    <>
      <div className='row'>
        <div className='col-12 mb-3'>
          <div className='custom-card'>
            <div className='thrybeTalks-table-div table-responsive'>
              <table className='table table-borderless thrybeTalks-table'>
                <thead>
                  <tr>
                    <th></th>
                    <th colSpan='2'>Talk name</th>
                    <th>Speakers</th>
                    <th>Members</th>
                    <th>Date Created</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {displaythrybeTalks.length >= 1 &&
                    displaythrybeTalks.map((item, index) => (
                      <TalksList
                        key={index}
                        showBtn={showBtn}
                        setShowBtn={setShowBtn}
                        talksPage={talksPage}
                        setTalksPage={setTalksPage}
                        item={item}
                        talkId={talkId}
                        setTalkId={setTalkId}
                        singleTalkInfo={singleTalkInfo}
                        setSingleTalkInfo={setSingleTalkInfo}
                        showSpinner={showSpinner}
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
      {talks.length > 1 && (
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

export default TalksListContainer;
