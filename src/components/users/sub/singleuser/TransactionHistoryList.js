import React from 'react'

const TransactionHistoryList = () => {
  return (
    <>
        <tr style={{ backgroundColor: 'white' }}>
            <td>
                <div className="d-flex align-items-center">
                    <div className="funding-div">
                        <img
                            src="./assets/images/fund-icon.svg"
                            className="img-fluid"
                            alt="withdrawal"
                        />
                    </div>
                    <span className="f-weight-600 ml-2">Top-up</span>
                </div>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <div className="master-card-div">
                        <img src="./assets/images/master-card-icon.svg" className="img-fluid" alt=""/>
                    </div>
                    <div className="ml-2">
                        <h5 className="font-sm mb-0 f-weight-600">
                            My Master card
                        </h5>
                        <p className="font-xs mb-0">0924 ******* 5675</p>
                    </div>
                </div>
            </td>
            <td>
                <p className="mb-0 f-weight-600"><span className="mr-2">03/21/2022</span>13:45PM</p>
            </td>
            <td>
                <div className="successful-status">Successful</div>
            </td>
            <td><h5>+3000</h5></td>
        </tr>
        <tr style={{ backgroundColor: 'white' }}>
            <td>
                <div className="d-flex align-items-center">
                    <div className="withdrawal-div">
                        <img
                            src="./assets/images/withdrawal-arrow.svg"
                            className="img-fluid"
                            alt="withdrawal"
                        />
                    </div>
                    <span className="f-weight-600 ml-2">Withdrawal</span>
                </div>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <div className="visa-card-div bg-visa-black">
                        <img src="./assets/images/visa-logo.svg" className="img-fluid" alt=""/>
                    </div>
                    <div className="ml-2">
                        <h5 className="font-sm mb-0 f-weight-600">
                            My Black Visa
                        </h5>
                        <p className="font-xs mb-0">0924 ******* 5675</p>
                    </div>
                </div>
            </td>
            <td>
                <p className="mb-0 f-weight-600"><span className="mr-2">03/21/2022</span>13:45PM</p>
            </td>
            <td>
                <div className="pending-status">Pending</div>
            </td>
            <td><h5>+3000</h5></td>
        </tr>
        <tr style={{ backgroundColor: 'white' }}>
            <td>
                <div className="d-flex align-items-center">
                    <div className="funding-div">
                        <i className="fa fa-gift text-success"></i>
                    </div>
                    <span className="f-weight-600 ml-2">Gift Purchase</span>
                </div>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <div className="visa-card-div bg-visa-blue">
                        <img src="./assets/images/visa-logo.svg" className="img-fluid" alt=""/>
                    </div>
                    <div className="ml-2">
                        <h5 className="font-sm mb-0 f-weight-600">
                            My Blue Visa
                        </h5>
                        <p className="font-xs mb-0">0924 ******* 5675</p>
                    </div>
                </div>
            </td>
            <td>
                <p className="mb-0 f-weight-600"><span className="mr-2">03/21/2022</span>13:45PM</p>
            </td>
            <td>
                <div className="successful-status">Successful</div>
            </td>
            <td><h5>+3000</h5></td>
        </tr>
        <tr style={{ backgroundColor: 'white' }}>
            <td>
                <div className="d-flex align-items-center">
                    <div className="withdrawal-div">
                        <i className="fa fa-gift text-danger"></i>
                    </div>
                    <span className="f-weight-600 ml-2">Gift Sale</span>
                </div>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <div className="visa-card-div bg-visa-red">
                        <img src="./assets/images/visa-logo.svg" className="img-fluid" alt=""/>
                    </div>
                    <div className="ml-2">
                        <h5 className="font-sm mb-0 f-weight-600">
                            My Red Visa
                        </h5>
                        <p className="font-xs mb-0">0924 ******* 5675</p>
                    </div>
                </div>
            </td>
            <td>
                <p className="mb-0 f-weight-600"><span className="mr-2">03/21/2022</span>13:45PM</p>
            </td>
            <td>
                <div className="pending-status">Pending</div>
            </td>
            <td><h5>+3000</h5></td>
        </tr>
        <tr style={{ backgroundColor: 'white' }}>
            <td>
                <div className="d-flex align-items-center">
                    <div className="withdrawal-div">
                        <img
                            src="./assets/images/exchange-icon.svg"
                            className="img-fluid"
                            alt="withdrawal"
                        />
                    </div>
                    <span className="f-weight-600 ml-2">Exchange</span>
                </div>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <div className="master-card-div">
                        <img src="./assets/images/master-card-icon.svg" className="img-fluid" alt=""/>
                    </div>
                    <div className="ml-2">
                        <h5 className="font-sm mb-0 f-weight-600">
                            My Master card
                        </h5>
                        <p className="font-xs mb-0">0924 ******* 5675</p>
                    </div>
                </div>
            </td>
            <td>
                <p className="mb-0 f-weight-600"><span className="mr-2">03/21/2022</span>13:45PM</p>
            </td>
            <td>
                <div className="successful-status">Successful</div>
            </td>
            <td><h5>+3000</h5></td>
        </tr>
        <tr style={{ backgroundColor: 'white' }}>
            <td>
                <div className="d-flex align-items-center">
                    <div className="funding-div">
                        <img
                            src="./assets/images/fund-icon.svg"
                            className="img-fluid"
                            alt="withdrawal"
                        />
                    </div>
                    <span className="f-weight-600 ml-2">TOP UP</span>
                </div>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <div className="master-card-div">
                        <img src="./assets/images/master-card-icon.svg" className="img-fluid" alt=""/>
                    </div>
                    <div className="ml-2">
                        <h5 className="font-sm mb-0 f-weight-600">
                            My Master card
                        </h5>
                        <p className="font-xs mb-0">0924 ******* 5675</p>
                    </div>
                </div>
            </td>
            <td>
                <p className="mb-0 f-weight-600"><span className="mr-2">03/21/2022</span>13:45PM</p>
            </td>
            <td>
                <div className="failed-status">Failed</div>
            </td>
            <td><h5>+3000</h5></td>
        </tr>      
    </>
  )
}

export default TransactionHistoryList