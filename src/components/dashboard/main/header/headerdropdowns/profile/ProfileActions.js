import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProfileActions = ({setPermissions}) => {
  const navigate = useNavigate();
  return (
        <>
            <a className="dropdown-item" href="#" onClick={(e)=>{
              e.preventDefault();
              sessionStorage.removeItem("token");
              sessionStorage.removeItem("img");
              sessionStorage.removeItem("pages");
              // setPermissions([]);
              navigate("/login");
            }}>Logout</a>
        </>
  )
}

export default ProfileActions