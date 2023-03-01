import React from "react";
import StoreBreadCrumb from "./StoreBreadCrumb";
import StoreListContainer from "./StoreListContainer";
import StoreStatArea from "./StoreStatArea";
import StoreSubNav from "./StoreSubNav";
import { useState } from "react";
const StoreMain = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  storePage,
  setStorePage,
  giftId,
  setGiftId,
  search,
  setSearch
}) => {
  const [giftsList, setGiftsList] = useState([]);
  const [filter, setFilter] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <StoreBreadCrumb
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          storePage={storePage}
          setStorePage={setStorePage}
        />
        <StoreSubNav
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          filter={filter}
          setFilter={setFilter}
          giftsList={giftsList}
          setGiftsList={setGiftsList}
          setPage={setPage}
          search={search}
          setSearch={setSearch}
        />
        <StoreStatArea />
        <StoreListContainer
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          storePage={storePage}
          setStorePage={setStorePage}
          filter={filter}
          setFilter={setFilter}
          giftsList={giftsList}
          setGiftsList={setGiftsList}
          showSpinner={showSpinner}
          setShowSpinner={setShowSpinner}
          giftId={giftId}
          setGiftId={setGiftId}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </div>
  );
};

export default StoreMain;
