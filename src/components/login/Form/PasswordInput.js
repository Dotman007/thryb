import React from 'react'
import { useState } from 'react'

const PasswordInput = ({ password, setPassword}) => {
	const [show, setShow] = useState(false);
  return (
        <div className="form-group position-relative mt-4">
		    <input
				type={`${!show ? 'password': 'text'}`}
				className="form_input_fields"
				placeholder="Password"
			    id="login-password"
			    value={password}
			  	onChange={(e) => setPassword(e.target.value)}
			/>
			<div className="position-absolute d-flex input-decor align-items-center">
				<img
                    src="./assets/images/Lock-black-icon.svg"
				    className="img-fluid"
					alt="mail"
				/>
				<div className="pl-4">
					<img
						src="./assets/images/black-line-vert.svg"
						className="img-fluid"
						alt="vert-line"
					/>
				</div>
			</div>
                <div href="#" id="passwordVisibility" className="position-absolute input-decor2" onClick={()=>setShow(!show)}>
                    <img src="./assets/images/View-password-icon.svg" className="img-fluid" alt="view-passowrd"/>
                </div>
		</div>
  )
}

export default PasswordInput