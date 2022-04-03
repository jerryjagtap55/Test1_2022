import React from 'react';
import './dashboard.css';
import { Sidebar } from '../../containers/index';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            <div className='d-flex flex-wrap'>
                <Sidebar>
                </Sidebar>
                <div className='mx-4 dashboard flex-fill col-md-7'>
                    <div>
                        <h4 className='display-6'>
                            Dashboard
                        </h4>
                    </div>
                    <hr />
                    <div>
                        <Link to='/checkout'>
                            <button className='btn btn-primary'>
                                Checkout
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Dashboard