import React from "react";
import RolesList from "./RolesList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDataWithAxios } from "../../config/fetchDataWithAxios";
import ReactPaginate from "react-paginate";


const RolesListContainer = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  rolesPage,
  setRolesPage,
  search,
  setSearch
}) => {
  const navigate = useNavigate();
  let [token, setToken] = useState(" ");
  let [roleList,setRoleList]= useState([]);
const [showSpinner, setShowSpinner]=useState(true);
let roles = roleList;
const [pageNumber, setPageNumber] = useState(0);
const thrybeTalksPerPage = 10;
const pagesVisited = pageNumber * thrybeTalksPerPage;
const displaythrybeRoles = roles.slice(
  pagesVisited,
  pagesVisited + thrybeTalksPerPage
);
const pageCount = Math.ceil(roles.length / thrybeTalksPerPage);
const changePage = ({ selected }) => {
  setPageNumber(selected);
};

  useEffect(() => {
    const fetchThrybeTalks = async () => {
      try {
        const response = await fetchDataWithAxios("get", "/GetRoleList");
        setRoleList(response.data)
        setShowSpinner(false);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchThrybeTalks();
  }, []);

  return (
  <>
    <div className='row mt-4'>
      <div className='col-12 mb-3'>
        <div className='custom-card'>
          <div className='table-responsive'>
            <table className='table table-borderless table-role'>
              <thead>
                <tr>
                  <th></th>
                  <th>Role name</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {displaythrybeRoles.length >= 1 &&
                    displaythrybeRoles.map((item, index) => (
                      <RolesList
                      showBtn={showBtn}
                      setShowBtn={setShowBtn}
                      rolesPage={rolesPage}
                      setRolesPage={setRolesPage}
                      key={index}
                      item={item}
                      search={search}
                      setSearch={setSearch}
                      />
                    ))}
              </tbody>
            </table>
            {showSpinner && <div className='spinner'></div>}
          </div>
        </div>
      </div>
    </div>
    {roles.length > 1 && (
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      )}
    </>
  );
};

export default RolesListContainer;
