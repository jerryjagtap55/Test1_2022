import React from 'react';
import './dashboard.css';
import { useParams } from 'react-router-dom';
import { Sidebar } from '../../containers/index';

const Dashboard = () => {
    const params = useParams();
    async function fetchdata () {

        const email = params.email;
        const response = await fetch( "http://localhost:4000/user/" );
        if ( !response.ok ) {
            const message = "an error has occoured";
            window.alert( message );
            return;
        }
        const record = await response.json();
        window.alert( record );

    }
    fetchdata();
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

                    </div>
                </div>

            </div>

        </>
    );
};

export default Dashboard;