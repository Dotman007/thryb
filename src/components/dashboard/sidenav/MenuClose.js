import React from 'react'

const MenuClose = ({showNav, setShowNav }) => {
  return (
    <div id="menu-close" className="position-absolute nav-close hover-blue" style={{ top: '30px', right: '25px'}} onClick={()=>setShowNav(false)}>
        <i className="fa fa-close"></i>
    </div>
  )
}

export default MenuClose