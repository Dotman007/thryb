import React from 'react'
import { useNavigate } from 'react-router-dom'


const Settings = () => {
  const navigate = useNavigate();

  return (
        <a className="btn dropdown-button ml-4" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={(e)=>{
            e.preventDefault();
            navigate('/settings');
        }}>
            <img src="/assets/images/settings-icon.svg" alt="settings" />
        </a>
    )
}

export default Settings