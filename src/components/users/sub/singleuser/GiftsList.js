import React from "react";

const GiftsList = ({ item }) => {
  let banner = item.image || "./assets/images/unknown.jpeg";
  let giftName = item.name || "unknown";
  let description = item.description || "unknown";
  let giftValue = item.giftValue ?? "-";
  let quantity = item.quantity ?? "-";
  let status = item.status.toLowerCase() ?? "unknown";
  return (
    <>
      <tr style={{ backgroundColor: "white" }}>
        <td>
          <img src={banner} className='img-fluid' alt='gift banner' />
        </td>
        <td>
          <h5 className='font-sm2 mb-0 f-weight-600'>{giftName}</h5>
        </td>
        <td>
          <p className='font-sm mb-0'>{description}</p>
        </td>
        <td>
          <p className='mb-0 f-weight-600'>{giftValue}</p>
        </td>
        <td>
          <p className='text-grey mb-0 f-weight-600'>{quantity}</p>
        </td>
        <td>
          <div
            className={`${
              status == "received"
                ? "received-status"
                : status == "purchased"
                ? "purchased-status"
                : ""
            }`}
          >
            {status}
          </div>
        </td>
      </tr>
    </>
  );
};

export default GiftsList;
