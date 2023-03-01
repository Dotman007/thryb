import React from 'react'
import { Link } from 'react-router-dom'

const Modal = ({page, setPage,showModal, setShowModal}) => {
  return (
        <div className='modal fade show-modal' id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-body">
						<div className="row justify-content-center">
							<div className="col-lg-10">
								<div className="d-flex flex-column justify-content-center">
									<img
                                        src="./assets/images/successfulImg.svg"
                                        className="img-fluid"
                                    	alt="Successful"
                                        style={{ maxHeight: "120px"}}
									/>
									<div>
										<h4 className="f-weight-600 text-center">Operation Successful</h4>
											<p className="text-center">Password reset link has been sent to your email address.</p>
									</div>
									<Link to='/login' className="buttons mb-3">
									  <button type="button" className="btn btn-continue" onClick={() => {
										  setShowModal(false);
										setPage('login')
									  }}>
													Back to Login
												</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
				</div>
  )
}

export default Modal