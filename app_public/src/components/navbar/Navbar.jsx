import React from 'react';
import './navbar.css';
import { CgMenuRightAlt } from 'react-icons/cg';

const Navbar = () => {
    return (
        <><nav class="navbar navbar-expand-md navbar-light d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-4 mb-4 border-bottom">
            <div class="container-fluid">
                <div className='navwidth'>
                    <a class="navbar-brand" href="/">Logo</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <CgMenuRightAlt size={28}/>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='marginauto'>
                        <ul class="navbar-nav me-auto justify-content-center mb-md-0">
                            <li className='nav-item'><a href="/" class="text-decoration-none px-2 link-dark">Home</a></li>
                            <li className='nav-item'><a href="/discover" class="text-decoration-none px-2 link-dark">Discover</a></li>
                            <li className='nav-item'><a href="/about" class="text-decoration-none px-2 link-dark">About</a></li>
                        </ul>
                    </div>


                    <div className="col-md-3 text-end navwidth">
                        <a class="text-decoration-none px-2" href="/signup">Sign Up</a>
                        <a class="text-decoration-none px-2" href="/login">Login</a>
                    </div>
                </div>

            </div>
        </nav></>

    )
}

export default Navbar