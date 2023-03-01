import React from 'react'

const BreadCrumb = () => {
  return (
        <div className="row">
            <div className="col-12 mt-5 mb-3">
                <ul className="myBreadcrumb p-0">
                    <li>
                        <a href="#" className="d-flex align-items-center"
                            ><i className="fa fa-home text-darkGrey"></i
                            ><span className="font-xs pl-2 f-weight-500 mt-1 text-dark"
                                >Home</span
                            ></a
                        >
                    </li>
                </ul>
                <div
                    className="mt-4 d-flex justify-content-between align-items-center"
                >
                    <h5>Dashboard</h5>
                    <div className="form-group">
                        <label htmlFor="filter" className="font-sm f-weight-600 text-dark"
                            >Filter by:</label
                        >
                        <select className="filter-field" defaultValue='Date and Time'>
                            <option value="">Date and time</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BreadCrumb