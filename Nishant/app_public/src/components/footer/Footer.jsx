import React from 'react';
import './footer.css';
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className="container">
            <footer className="py-5">
                <div className="row">
                    <div className="col-2">
                        <h5>Quick Links</h5>
                        <ul className="navbar-nav me-auto justify-content-center mb-md-0">
                            <li className='nav-item'><a href="/" className="text-decoration-none text-muted">Home</a></li>
                            <li className='nav-item'><a href="/discover" className="text-decoration-none text-muted">Discover</a></li>
                            <li className='nav-item'><a href="/about" className="text-decoration-none text-muted">About</a></li>
                            <li className='nav-item'><a href="/" className="text-decoration-none text-muted">FAQ</a></li>

                        </ul>
                    </div>


                    <div className="col-4 offset-6">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of whats new and exciting from us.</p>
                            <div className="d-flex w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex justify-content-between py-4 my-4 border-top">
                    <p>© 2022 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-dark" href="/"><BsInstagram size={24} /> </a></li>
                        <li className="ms-3"><a className="link-dark" href="/"><BsTwitter size={24} /> </a></li>
                        <li className="ms-3"><a className="link-dark" href="/"><BsFacebook size={24} /> </a></li>
                    </ul>
                </div>
            </footer>
        </div>)
}

export default Footer