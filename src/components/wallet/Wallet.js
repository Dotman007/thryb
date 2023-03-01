import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideNav from "../dashboard/sidenav/SideNav";
import WalletMainContainer from "./WalletMainContainer";

const Wallet = ({ page, setPage, showNav, setShowNav,permissions, setPermissions,userPicture,
  setUserPicture }) => {
  const [showBtn, setShowBtn] = useState(true);
  const [walletPage, setWalletPage] = useState("mgt");
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Wallet Management";
    setPage("wallet");
  });
  useEffect(() => {
    setWalletPage("mgt");
  }, [page]);
  useEffect(() => {
    setShowNav(false);
  }, [page]);

  useEffect(()=>{
    if (sessionStorage.getItem('pages') && sessionStorage.getItem('img') && sessionStorage.getItem('token')){
      setPermissions(sessionStorage.getItem('pages').slice(','));
      if (!sessionStorage.getItem('pages').slice(',').includes('Wallets')){
        setPermissions([]);
        navigate('/dashboard');
      }
    }else{
      navigate('/login')
    }
  })

  return (
    <>
      {permissions.includes('Wallets') &&<>
        <SideNav
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
        />
        <WalletMainContainer
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          walletPage={walletPage}
          setWalletPage={setWalletPage}
          userPicture={userPicture}
          setUserPicture={setUserPicture}
        />
      </>}
    </>
  );
};

export default Wallet;
