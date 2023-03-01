import React, { useEffect } from 'react'

const Hamburger = ({ showNav, setShowNav }) => {
  return (
    <div id="menu-show" className="show-menu hover-blue" onClick={()=>setShowNav(true)}>
        <i className="fa fa-bars"></i>
    </div>
  )
}

export default Hamburger
