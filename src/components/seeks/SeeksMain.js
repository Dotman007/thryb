import React from "react";
import SeeksBreadCrumb from "./SeeksBreadCrumb";
import SeeksListContainer from "./SeeksListContainer";
import SeeksStatArea from "./SeeksStatArea";
import SeeksSubNav from "./SeeksSubNav";
import { useState } from "react";

const SeeksMain = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  seeksPage,
  setSeeksPage,
  seekInfo,
  setSeekInfo,
  search,
  setSearch
}) => {
  const [filter, setFilter] = useState(false);
  const [seeksList, setSeeksList] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  const [searchList,setSearchList] = useState([]);
  const [listMode, setListMode] = useState('list');

  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <SeeksBreadCrumb
          showBtn={showBtn}
          page={page}
          setPage={setPage}
          setShowBtn={setShowBtn}
          seeksPage={seeksPage}
          setSeeksPage={setSeeksPage}
          setSeeksList={setSeeksList}
          setShowSpinner={setShowSpinner}
          showSpinner={showSpinner}
          searchList={searchList}
          setSearchList={setSearchList}
          listMode={listMode}
          setListMode={setListMode}
          filter={filter}
          setFilter={setFilter}
        />
        <SeeksSubNav
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          seeksList={seeksList}
          setSeeksList={setSeeksList}
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
          searchList={searchList}
          setSearchList={setSearchList}
          listMode={listMode}
          setListMode={setListMode}
        />
        <SeeksStatArea />
        <SeeksListContainer
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          seeksPage={seeksPage}
          setSeeksPage={setSeeksPage}
          seeksList={seeksList}
          setSeeksList={setSeeksList}
          filter={filter}
          setFilter={setFilter}
          setShowSpinner={setShowSpinner}
          showSpinner={showSpinner}
          seekInfo={seekInfo}
          setSeekInfo={setSeekInfo}
          search={search}
          setSearch={setSearch}
          searchList={searchList}
          setSearchList={setSearchList}
          listMode={listMode}
          setListMode={setListMode}
        />
      </div>
    </div>
  );
};

export default SeeksMain;
