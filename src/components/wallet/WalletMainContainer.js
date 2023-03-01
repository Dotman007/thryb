import React, { useState } from "react";
import Header from "../dashboard/main/header/Header";
import Gift from "./sub/gifts/Gift";
import Transactions from "./sub/transactions/Transactions";
import WalletMain from "./WalletMain";
const WalletMainContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
  showBtn,
  setShowBtn,
  walletPage,
  setWalletPage,
  userPicture,
  setUserPicture
}) => {
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
      {walletPage == "mgt" && (
        <WalletMain
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          walletPage={walletPage}
          setWalletPage={setWalletPage}
        />
      )}
      {(walletPage == "gift-list" || walletPage == "gift-single") && (
        <Gift
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          walletPage={walletPage}
          setWalletPage={setWalletPage}
        />
      )}
      {(walletPage == "transactions-list" ||
        walletPage == "transaction-single") && (
        <Transactions
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          walletPage={walletPage}
          setWalletPage={setWalletPage}
        />
      )}
    </main>
  );
};

export default WalletMainContainer;
