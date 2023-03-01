import React from "react";
import WalletBreadCrumb from "./WalletBreadCrumb";
import WalletListContainer from "./WalletListContainer";
import WalletStatArea from "./WalletStatArea";
import WalletSubNav from "./WalletSubNav";
import WalletCharts from "./charts/WalletCharts";
import { useEffect, useState } from "react";

const WalletMain = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  walletPage,
  setWalletPage,
}) => {
  const [transactionList, setTransactionList] = useState([]);
  const [filter, setFilter] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <WalletBreadCrumb
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          walletPage={walletPage}
          setWalletPage={setWalletPage}
        />
        <WalletStatArea />
        <WalletCharts
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          walletPage={walletPage}
          setWalletPage={setWalletPage}
        />
        <WalletSubNav
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          filter={filter}
          setFilter={setFilter}
          transactionList={transactionList}
          setTransactionList={setTransactionList}
          showSpinner={showSpinner}
          setShowSpinner={setShowSpinner}
        />
        <WalletListContainer
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          walletPage={walletPage}
          setWalletPage={setWalletPage}
          filter={filter}
          setFilter={setFilter}
          transactionList={transactionList}
          setTransactionList={setTransactionList}
          showSpinner={showSpinner}
          setShowSpinner={setShowSpinner}
        />
      </div>
    </div>
  );
};

export default WalletMain;
