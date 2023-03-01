import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const FormBottom = ({ remember, setRemember, page,setPage }) => {
  return (
    <div className="d-flex mt-4 justify-content-between">
      <span className="remember-me-text text-light"><input type="checkbox" value={remember} onChange={(e)=> setRemember(e.currentTarget.checked) }/>&nbsp;&nbsp; Remember me
      </span>
			<Link to='/reset-password'><div className="forgot-password-text text-light text-underline" style={{cursor : 'pointer'}} onClick={()=> setPage('reset-password')}>Forgot password?</div></Link>
		</div>
  )
}

export default FormBottom