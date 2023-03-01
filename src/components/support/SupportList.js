import React, {useState,useEffect} from "react";

const SupportList = ({
  showBtn,
  setShowBtn,
  supportPage,
  setSupportPage,
  item,
  search,
  setSearch,
  singleSupport,
  setSingleSupport
}) => {
  let messageType = item.messageType || "unknown";
  let composer = item.composer || "unknown";
  let date = item.date || "unknown";
  let subject = item.subject || "unknown";
  let messageBody = item.messageBody || "unknown";
  let status = item.status;
  const [display, setDisplay] = useState('');

  useEffect(() => {
    if (search !== "" && subject !== "unknown") {
      if (search !== "") {
        if (subject?.toLowerCase()?.includes(search?.toLowerCase()) || messageBody?.toLowerCase()?.includes(search?.toLowerCase()) || messageType?.toLowerCase()?.includes(search?.toLowerCase())) {
          setDisplay(true);
        } else {
          setDisplay(false);
        }
      }
      if (search == "") {
        setDisplay(true);
      }
    }
    if (search == "") {
      setDisplay(true);
    }
  }, [search]);

  return (
    <>
      <tr style={{ backgroundColor: "rgba(255, 255, 255, 0.65)" }} className={`${!display && 'hide'}`} 
      onClick={() => {
        
        setSingleSupport({
          messageType,
          composer,
          date,
          subject,
          messageBody,
          status
        });
        setSupportPage("single")
      }
    }
        >
        <td>
          <input
            type='checkbox'
            id='check'
            onChange={(e) => {
              if (e.currentTarget.checked) {
                setShowBtn(false);
              } else {
                setShowBtn(true);
              }
            }}
          />
        </td>
        <td colSpan='2'>
          <div className='d-flex flex-column align-items-start'>
            <h5 className='font-sm f-weight-700 mt-2'>{messageType}</h5>
          </div>
        </td>
        <td>
          <div className='d-flex flex-column align-items-start'>
            <h6 className='f-weight-600 font-sm'>{subject}</h6>
          </div>
        </td>
        <td>
          <div className='d-flex flex-column align-items-start'>
            <p>{messageBody}</p>
          </div>
        </td>
        <td>
          <div>
            <span className='f-weight-600'>{date}</span>
          </div>
        </td>
        {/* <td>
          <div className='d-flex align-items-center justify-content-center'>
            <i className='fa fa-trash'></i>
          </div>
        </td> */}
        <td>
          <div className='d-flex'>
            <div className={`${item ? "successful-status" : "failed-status"}`}>
              <span className='font-xs'>{status ? "Active" : "Expired"}</span>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default SupportList;
