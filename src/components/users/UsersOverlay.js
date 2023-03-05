import React, {useState} from 'react'
import { ClickAwayListener } from '@mui/base';

const UsersOverlay = ({setShowOverlay, userAction, setUserAction}) => {
  const [showSpinner, setShowpinner] = useState(false);
  return (
    
        <div
          className='modal fade show'
          id='MessageSent'
          tabIndex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
          style={{ display: "block" }}
        >
          {!showSpinner && <div className='modal-dialog'>
            <div className='modal-content modal-design2'>
              <div className='modal-body'>
                <div className='modal-form-card'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-10'>
                      <div className='d-flex flex-column justify-content-center'>
                      
                          <>
                            <div className='mb-3'>
                              <h4 className='f-weight-600 text-center'>
                                Are you sure?
                              </h4>
                            </div>
                            <div className='buttons mb-3'>
                              <button
                                type='button'
                                className='btn btn-continue'
                                onClick={(e) => {
                                 if (userAction.type == 'suspend'){
                                  e.preventDefault();
                                  console.log('suspend');
                                 }
                                 if (userAction.type == 'delete'){
                                  e.preventDefault();
                                  console.log('delete');
                                 }
                                }}
                              >
                                Continue
                              </button>
                            </div>
                            <a
                              href='#'
                              className='text-center text-dark'
                              data-dismiss='modal'
                              onClick={(e) => {
                                e.preventDefault();
                               setShowOverlay(false);
                              }}
                            >
                              Cancel
                            </a>
                          </>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
          {showSpinner && <div className='spinner'></div>}
        </div>
    
  )
}

export default UsersOverlay