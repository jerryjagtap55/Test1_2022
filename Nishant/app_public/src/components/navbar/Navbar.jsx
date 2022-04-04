import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { CgMenuRightAlt } from 'react-icons/cg';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-4 mb-4 border-bottom">
                <div className="container-fluid">
                    <div className='navwidth'>
                        <Link className="navbar-brand" to="/">
                            <Logo className='nav-logo me-2'></Logo>
                            DigiArt
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <CgMenuRightAlt size={28} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className='marginauto'>
                            <ul className="navbar-nav me-auto justify-content-center mb-md-0">
                                <li className='nav-item'><Link to="/" className="text-decoration-none px-2 link-dark">Home</Link></li>
                                <li className='nav-item'><Link to="/discover" className="text-decoration-none px-2 link-dark">Discover</Link></li>
                                <li className='nav-item'><Link to="/user" className="text-decoration-none px-2 link-dark">Dashboard</Link></li>
                            </ul>
                        </div>


                        <div className="col-md-3 text-end navwidth">
                            <Link className="text-decoration-none px-2" to="/signup">Sign Up</Link>
                            <Link className="text-decoration-none px-2" to="/login">Login</Link>
                        </div>
                    </div>

                </div>
            </nav>
        </>

    )
}

export default Navbar