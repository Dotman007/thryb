import React from 'react'
import { useNavigate } from 'react-router-dom';

const DashboardBtn = ({ page, setPage }) => {
	let navigate = useNavigate();
	let dashboardColor = '';
	page == 'dashboard' ? dashboardColor= '#842a83' : dashboardColor='#555555';
  return (
        <ul className="nav-menu mt-4">
		  <li className={`nav-item ${page=='dashboard' ? 'active':''}`} onClick={()=>navigate('/dashboard')}>
				<div className="nav-link" style={{ fontSize: '0.825rem', color:dashboardColor, fontWeight: '600'}}>
                    <i className="">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
										d="M3.625 3.83203H11.4375C11.5583 3.83203 11.62 3.8701 11.6504 3.90043C11.6807 3.93076 11.7188 3.99253 11.7188 4.11328V11.9258C11.7188 12.0465 11.6807 12.1083 11.6504 12.1386C11.62 12.169 11.5583 12.207 11.4375 12.207H3.625C3.50425 12.207 3.44248 12.169 3.41215 12.1386C3.38182 12.1083 3.34375 12.0465 3.34375 11.9258V4.11328C3.34375 3.99253 3.38182 3.93076 3.41215 3.90043C3.44248 3.8701 3.50425 3.83203 3.625 3.83203Z"
										fill={dashboardColor}
										stroke={dashboardColor}
								/>
								<path
										d="M11.4375 14.2695H3.625C3.15625 14.2695 2.84375 14.582 2.84375 15.0508V22.8633C2.84375 23.332 3.15625 23.6445 3.625 23.6445H11.4375C11.9062 23.6445 12.2188 23.332 12.2188 22.8633V15.0508C12.2188 14.582 11.9062 14.2695 11.4375 14.2695Z"
										fill={dashboardColor}
								/>
								<path
										d="M22.375 3.33203H14.5625C14.0937 3.33203 13.7812 3.64453 13.7812 4.11328V11.9258C13.7812 12.3945 14.0937 12.707 14.5625 12.707H22.375C22.8438 12.707 23.1562 12.3945 23.1562 11.9258V4.11328C23.1562 3.64453 22.8438 3.33203 22.375 3.33203Z"
										fill={dashboardColor}
								/>
								<path
										d="M22.375 14.2695H14.5625C14.0937 14.2695 13.7812 14.582 13.7812 15.0508V22.8633C13.7812 23.332 14.0937 23.6445 14.5625 23.6445H22.375C22.8438 23.6445 23.1562 23.332 23.1562 22.8633V15.0508C23.1562 14.582 22.8438 14.2695 22.375 14.2695Z"
										fill={dashboardColor}
								/>
                            </svg>
                    </i>
                    <span className="pl-4">Dashboard</span>
				</div>
			</li>
		</ul>
  )
}

export default DashboardBtn