import React from 'react';
import './hero.css';

const Hero = () => {
    return (
        <>
            <div class="container my-5">
                <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg text-center">
                    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 class="display-3 lh-1">Hero Section!</h1>
                        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button type="button" class="btn btn-primary btn-lg px-4 mx-auto ">Get Started</button>
                        </div>
                    </div>
                    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img class="rounded-lg-3" src="" alt="Hero Image" width="720" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero