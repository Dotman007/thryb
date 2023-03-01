import React, { useState } from 'react'
import Hamburger from './Hamburger'
import HeaderDropDowns from './headerdropdowns/HeaderDropDowns'
import HeaderSearch from './HeaderSearch'

const Header = ({showNav, setShowNav,page,setPage, setPermissions,userPicture,setUserPicture }) => {
	const [searchInput, setSearchInput] = useState('');
  return (
    <header className="top-nav">
		<div className="top-nav-inner">
			<Hamburger showNav={showNav} setShowNav={setShowNav} />
			<HeaderSearch searchInput={searchInput} setSearchInput={ setSearchInput }/>
			<HeaderDropDowns page={page} setPage={ setPage } setPermissions={setPermissions} userPicture={userPicture}
              setUserPicture={setUserPicture}/>
		</div>
	</header>
  )
}

export default Header