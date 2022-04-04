import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import openSocket from 'socket.io-client';
//components
import { Card } from '../index';
// Actions
import { loadAds, adPostedByOther, updateAdInList } from '../actions/ad';
import { setAlert, clearAlerts } from '../actions/alert';

const Carousel = (props) => {

    const [pageNumber, setPageNumber] = useState(1);
    const [adPerPage] = useState(6);

    useEffect(() => {
        if (props.passedUser) {
            props.loadAds(props.passedUser);
        } else {
            props.loadAds();
            const socket = openSocket(process.env.REACT_APP_API_BASE_URL);
            // when new ad is added
            socket.on('addAd', (data) => {
                console.log(data);
                if (
                    props.user &&
                    data.ad.owner &&
                    data.ad.owner.toString() !== props.user._id.toString()
                ) {
                    props.clearAlerts();
                    props.setAlert('New ads available', 'info', 60000);
                }
            });
            // when auction starts/ends
            socket.on('auctionStarted', (res) => {
                props.updateAdInList(res.data);
            });
            socket.on('auctionEnded', (res) => {
                props.updateAdInList(res.data);
            });
            // disconnect socket when page left
            return () => {
                socket.emit('leaveHome');
                socket.off();
                props.clearAlerts();
            };
        }
    }, []);


    return (
        <>
            <div className="container-fluid py-2">
                <div className="d-flex flex-row flex-nowrap overflow-auto">

                    {props.ads.slice(1, 3).map((ad) => {
                        return ad.auctionEnded ? null : (
                            <div className='product__container' key={ad._id}>
                                <Card ad={ad} key={ad._id} dashCard={false} cardStyle={boardCardStyle} />
                            </div>
                        );
                    })}                  
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    ads: state.ad.ads,
    loading: state.auth.loading,
    isAuth: state.auth.isAuthenticated,
    user: state.auth.user,
});

export default connect(mapStateToProps, {
    loadAds,
    adPostedByOther,
    setAlert,
    updateAdInList,
    clearAlerts,
})(Carousel)