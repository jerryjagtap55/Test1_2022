import React from 'react';
import './hero.css';
import { useLottie } from "lottie-react";
import lottie_art from '../../assets/lottie_art.json';

const Hero = () => {
    const options = {
        animationData: lottie_art,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options);


    return (
        <>
            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg text-center">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 mb-4 ">World’s Biggest <br />
                            <span className='hero-text-color'>
                                Anitque Collection
                            </span>
                        </h1>
                        <p className="">From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode. </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button type="button" className="btn btn-primary btn-lg px-4 mx-auto ">Get Started</button>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0 overflow-hidden">
                        {View}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero