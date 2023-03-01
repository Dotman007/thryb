import React, { useState } from 'react'
import { useEffect } from 'react'
import LoginContainer from '../login/LoginContainer'
import Modal from '../login/Modal/Modal'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ResetPassword = ({ page, setPage }) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    useEffect(() => {
        document.title = 'Thrybe || Reset Password';
        setPage('reset-password');
    })
    return (
        <div className="login_wrapper position-relative">
            <div className="container">
                <div className={`row justify-content-center ${showModal && 'not-show'}`}>
					<div className="col-lg-5 col-md-6">
						<div className="logo-login d-flex justify-content-center mb-3">
							<img
								src="./assets/images/thrybeLogo.svg"
								className="img-fluid"
								alt="Logo"
							/>
						</div>
						<div className="login-form">
							<form action="">
								<div className="form-group position-relative">
									<input
										type="text"
										className="form_input_fields"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
									/>
									<div
										className="position-absolute d-flex input-decor align-items-center"
									>
										<img
											src="./assets/images/Mail-black-icon.svg"
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
								</div>
								<div className="form-group mt-4">
									<input
										type="submit"
										className="btn btn-login"
                                        value="Recover password"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setShowModal(true)
                                        }}
									/>
								</div>
								<div className="d-flex mt-4 justify-content-center">
									<Link
										to="/login"
										className="forgot-password-text text-light text-underline"
										>Login</Link
									>
								</div>
							</form>
						</div>
					</div>
                </div>
                {showModal && <Modal />}
            </div>
        </div>
      
  )
}

export default ResetPassword