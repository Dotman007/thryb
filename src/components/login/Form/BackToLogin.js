import React from 'react'
import { Link } from 'react-router-dom'


const BackToLogin = ({ setPage }) => {
  return (
		<div className="d-flex mt-4 justify-content-center" style={{cursor : 'pointer'}} onClick={()=>setPage('login')}>
			<Link to='/login' className="forgot-password-text text-light text-underline">Login</Link>
		</div>
  )
}

export default BackToLogin