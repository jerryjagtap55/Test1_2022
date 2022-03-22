import React from 'react';
import './footer.css';
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs'

const Footer = () => {
    return (
        <div class="container">
            <footer class="py-5">
                <div class="row">
                    <div class="col-2">
                        <h5>Quick Links</h5>
                        <ul class="navbar-nav me-auto justify-content-center mb-md-0">
                            <li className='nav-item'><a href="/" class="text-decoration-none text-muted">Home</a></li>
                            <li className='nav-item'><a href="/discover" class="text-decoration-none text-muted">Discover</a></li>
                            <li className='nav-item'><a href="/about" class="text-decoration-none text-muted">About</a></li>
                            <li className='nav-item'><a href="#" class="text-decoration-none text-muted">FAQ</a></li>

                        </ul>
                    </div>


                    <div class="col-4 offset-6">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of whats new and exciting from us.</p>
                            <div class="d-flex w-100 gap-2">
                                <label for="newsletter1" class="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                                <button class="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="d-flex justify-content-between py-4 my-4 border-top">
                    <p>© 2022 Company, Inc. All rights reserved.</p>
                    <ul class="list-unstyled d-flex">
                        <li class="ms-3"><a class="link-dark" href="#"><BsInstagram size={24} /> </a></li>
                        <li class="ms-3"><a class="link-dark" href="#"><BsTwitter size={24} /> </a></li>
                        <li class="ms-3"><a class="link-dark" href="#"><BsFacebook size={24} /> </a></li>
                    </ul>
                </div>
            </footer>
        </div>)
}

export default Footer