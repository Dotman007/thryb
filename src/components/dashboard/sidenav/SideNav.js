import React, { useEffect, useState } from "react";
import AdministrationNav from "./AdministrationNav";
import DashboardBtn from "./DashboardBtn";
import ManagementNav from "./ManagementNav";
import MenuClose from "./MenuClose";
import SideNavLogo from "./SideNavLogo";
import { useNavigate } from "react-router-dom";

const SideNav = ({ page, setPage, showNav, setShowNav }) => {
  let [pages, setPages] = useState(" ");
  const [myArray, setMyArray] = useState(" ");
  // bottomNav=bottomNav.includes('Users')
  const navigate = useNavigate();
  const [managementNav, setManagementNav] = useState(" ");
  const [adminNav, setAdminNav] = useState(" ");

  useEffect(() => {
    setPages(localStorage.getItem("pages") || sessionStorage.getItem("pages"));
  }, [page]);

  useEffect(() => {
    if (pages) {
      setMyArray(pages.split(","));
    }
  }, [pages]);
  useEffect(() => {
    if (myArray) {
      setManagementNav(
        myArray.includes("Users") ||
          myArray.includes("Talks") ||
          myArray.includes("Seeks") ||
          myArray.includes("Rooms") ||
          myArray.includes("Store") ||
          myArray.includes("Games")
      );
      setAdminNav(
        myArray.includes("Wallet") ||
          myArray.includes("Settings") ||
          myArray.includes("Support") ||
          myArray.includes("Roles") ||
          myArray.includes("Plans")
      );
    }
  }, [myArray]);

  return (
    <aside className={`side-nav ${showNav && "show-menu"}`}>
      <div className='side-nav-inner position-relative'>
        <MenuClose showNav={showNav} setShowNav={setShowNav} />
        <SideNavLogo page={page} setPage={setPage} />
        <DashboardBtn page={page} setPage={setPage} />
        {managementNav && (
          <ManagementNav page={page} setPage={setPage} myArray={myArray} />
        )}
        {adminNav && (
          <AdministrationNav page={page} setPage={setPage} myArray={myArray} />
        )}
      </div>
    </aside>
  );
};

export default SideNav;
