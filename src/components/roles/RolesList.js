import React,{useState, useEffect} from "react";

const RolesList = ({ showBtn, setShowBtn, rolesPage, setRolesPage,item,  search, setSearch }) => {
  let description = item?.description ?? '';
  let roleName = item?.name ?? '';
  let status = item?.status ?? false;
  const [display, setDisplay] = useState('');

  useEffect(() => {
    if (search !== "" && roleName !== "unknown") {
      if (search !== "") {
        if (roleName?.toLowerCase()?.includes(search?.toLowerCase()) || description?.toLowerCase()?.includes(search?.toLowerCase())) {
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
      <tr style={{ backgroundColor: "white" }} className={`${!display && 'hide'}`}>
        <td>
          <input type='checkbox' id='check' disabled />
        </td>
        <td className='f-weight-600'>{roleName}</td>
        <td onClick={() => setRolesPage("single")}>
          {description}
        </td>
        <td>
          <div className={`${status ? 'successful-status' : 'failed-status'}`}>{status ? 'Active' : 'Expired'}</div>
        </td>
        {/* <td>
          <div className='d-flex opacity-half'>
            <a href='#'>
              <img
                src='./assets/images/Edit.svg'
                className='img-fluid'
                alt=''
              />
            </a>
            <a href='#' className='ml-4'>
              <img
                src='./assets/images/delete-icon-black.svg'
                className='img-fluid'
                alt=''
              />
            </a>
          </div>
        </td> */}
      </tr>
    </>
  );
};

export default RolesList;
