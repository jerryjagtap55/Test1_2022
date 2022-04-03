import React from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
    return (
        <>
            <div className='d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar col-md-3'>
                <h5 className='mb-2 text-white text-decoration-none h5 text-center'>User Name</h5>
                <hr />
                <div >
                    <ul className='nav nav-pills flex-column mb-auto mx-4'>

                        <li className='nav-item mb-2'>
                           <Link to="/user" className="align-items-center text-white text-decoration-none">
                                Orders
                            </Link>
                        </li>
                        <li className='nav-item mb-2'>
                           <Link to="/sell" className="align-items-center text-white text-decoration-none">
                            Sell an Item
                            </Link>
                        </li>
                        <li className='nav-item mb-2'>
                           <Link to="/login" className="align-items-center text-white text-decoration-none">
                            Sign out
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar