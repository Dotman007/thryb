import React, { useState } from "react";
import Header from "../dashboard/main/header/Header";
import SingleSupport from "./sub/SingleSupport";
import SupportMain from "./SupportMain";
import SupportModal from "./SupportModal";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/base";
const SupportMainContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
  showBtn,
  setShowBtn,
  supportPage,
  setSupportPage,
  userPicture,
  setUserPicture
}) => {
  const [modal, setModal] = useState("none");
  const [supportTypeList, setSupportTypeList] = useState([]);
  const [supportList, setSupportList] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [singleSupport, setSingleSupport] = useState({});
  useEffect(() => {
    const fetchSupportTypeList = async () => {
      try {
        const response = await api.post("/SupportTypeList");
        setSupportTypeList(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchSupportTypeList();
  }, [page]);

  return (
    <main className='main-section'>
      <Header
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
        userPicture={userPicture}
          setUserPicture={setUserPicture}
      />
      {supportPage == "mgt" && (
        <SupportMain
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          supportPage={supportPage}
          setSupportPage={setSupportPage}
          setModal={setModal}
          supportList={supportList}
          setSupportList={setSupportList}
          showSpinner={showSpinner}
          setShowSpinner={setShowSpinner}
          search={search}
          setSearch={setSearch}
          singleSupport={singleSupport}
          setSingleSupport={setSingleSupport}
        />
      )}
      {supportPage == "single" && (
        <SingleSupport
          page={page}
          setPage={setPage}
          supportPage={supportPage}
          setSupportPage={setSupportPage}
          item={singleSupport}
          setSingleSupport={setSingleSupport}
        />
      )}
      {(modal == "one" || modal == "two") && (
        <SupportModal
          modal={modal}
          setModal={setModal}
          supportTypeList={supportTypeList}
          supportList={supportList}
          setSupportList={setSupportList}
          showSpinner={showSpinner}
          setShowSpinner={setShowSpinner}
        />
      )}
    </main>
  );
};

export default SupportMainContainer;
