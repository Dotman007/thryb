import React from "react";
import SupportBreadCrumb from "./SupportBreadCrumb";
import SupportListContainer from "./SupportListContainer";
import SupportSubNav from "./SupportSubNav";
import { useState, useEffect } from "react";
const SupportMain = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  supportPage,
  setSupportPage,
  setModal,
  supportList,
  setSupportList,
  showSpinner,
  setShowSpinner,
  search,
  setSearch,
  singleSupport,
  setSingleSupport
}) => {
  const [filter, setFilter] = useState(false);
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <SupportBreadCrumb
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          supportPage={supportPage}
          setSupportPage={setSupportPage}
          setModal={setModal}
        />
        <SupportSubNav
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          supportList={supportList}
          setSupportList={setSupportList}
          setFilter={setFilter}
          filter={filter}
          search={search}
          setSearch={setSearch}
        />
        <SupportListContainer
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          supportPage={supportPage}
          setSupportPage={setSupportPage}
          supportList={supportList}
          setSupportList={setSupportList}
          showSpinner={showSpinner}
          setShowSpinner={setShowSpinner}
          setFilter={setFilter}
          filter={filter}
          search={search}
          setSearch={setSearch}
          singleSupport={singleSupport}
          setSingleSupport={setSingleSupport}
        />
      </div>
    </div>
  );
};

export default SupportMain;
