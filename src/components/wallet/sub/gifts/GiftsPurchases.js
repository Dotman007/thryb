import React from "react";
import { useState, useEffect } from "react";
import { fetchDataWithAxios } from "../../../../config/fetchDataWithAxios";
import { useNavigate } from "react-router-dom";
const GiftsPurchases = () => {
  const navigate = useNavigate();
  const [purchases, setPurchases] = useState("");
  const [totalAmountMade, setTotalAmountMade] = useState("");
  let giftPurchases = purchases ?? "";
  let amountMade = totalAmountMade ?? "";
  useEffect(() => {
    const fetchGiftPurchases = async () => {
      try {
        const response = await fetchDataWithAxios("get", "/GiftPurchases");
        setPurchases(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchGiftPurchases();
  });
  useEffect(() => {
    const fetchGiftPurchases = async () => {
      try {
        const response = await fetchDataWithAxios("get", "/TotalAmount");
        setTotalAmountMade(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchGiftPurchases();
  });
  return (
    <div className='col-md-6 mb-3 d-flex flex-column flex-grow-1'>
      <div className='custom-card h-100'>
        <div className='d-flex align-items-center justify-content-between mt-3'>
          <div className=''>
            <h6 className='font-sm2 f-weight-500'>GIFTS PURCHASES</h6>
            <h5 className='f-weight-600 mb-0 text-danger'>{giftPurchases}%</h5>
          </div>
          <div className=''>
            <h6 className='font-sm2 f-weight-500'>TOTAL AMOUNT MADE</h6>
            <h5 className='f-weight-600 mb-0 text-danger'>
              ₦{totalAmountMade}
            </h5>
          </div>
        </div>
        <div className='trend-div mt-4'>
          <img
            src='./assets/images/red-chart.svg'
            className='img-fluid'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default GiftsPurchases;
