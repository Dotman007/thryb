import React from 'react'

const HeaderSearch = ({searchInput,setSearchInput}) => {
  return (
            <div className="search-div position-relative">
		  <input type="text" className="search-field" placeholder="Search" value={searchInput} onChange={ (e)=>setSearchInput(e.target.value)}/>
				<img src="/assets/images/searchIcon.svg" className="position-absolute search-icon-position" alt="Search"/>
				<div className="position-absolute d-flex search-filter align-items-center">
					<div className="pr-4">
						<svg
							width="1"
							height="21"
							viewBox="0 0 1 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
								<rect width="1" height="21" fill="#D2CDDA" />
						</svg>
					</div>
					<img src="/assets/images/filter-icon.svg" className="img-fluid" alt="filter"/>
				</div>
	        </div>
  )
}

export default HeaderSearch