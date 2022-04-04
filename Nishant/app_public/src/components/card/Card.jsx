import React from 'react';
import { connect } from 'react-redux';
import './card.css';
import { useNavigate } from 'react-router-dom';
// Actions
import { loadad, loadAdImage, setImageLoadingStatus } from '../actions/ad';
// Files
import { secondsToHmsShort } from '../utils/secondsToHms';



const Card = (props) => {


  const navigate = useNavigate();

  const handleCardClick = (e) => {
    navigate(`/discover/${props.ad._id}`);
  };

  // Auction status based on the ad-details
  const updateAuctionStatus = (ad) => {
    if (ad.sold) {
      return 'Sold';
    } else if (ad.auctionEnded) {
      return 'Ended, not-sold';
    } else if (!ad.auctionStarted) {
      return 'Upcoming';
    } else {
      return 'Ongoing';
    }
  };

  return (
    <>

      <div className='text-start'>
        <div className="card mb-3 card-test ">

          <div className="card-body row">
            <div className="col-md-7 card_img-holder">
              <img src={props.ad.image ? props.ad.image : imagePlaceholder}
                className="img-fluid rounded-start card-img" alt="Card" />
            </div>
            <div className="col-md-5">
              <div>
                <h4 className='card-title'>{props.ad.productName}</h4>
                <h6 className='card-subtitle mb-2 text-muted'>
                  {props.ad.owner.username}
                </h6>
                <p className="card-text small">
                  {props.ad.description}
                </p>

                <a onClick={(e) => {
                  handleCardClick(e);
                }} className="btn btn-primary mb-4">Check it out!</a>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Total Bid: {props.ad.bids.length}</li>
                  <li className="list-group-item">Current Bid: {props.highestBid}</li>
                  <li className="list-group-item"></li>
                </ul>

                <p className='card-text lead text-muted my-4'>
                  Timer:  {getTimeRemaining()}
                </p>
              </div>
            </div>
          </div>

          <div className="card-footer text-muted small">
          Posted on: {getUTCDate(props.ad.createdAt)}
          </div>
        </div>

      </div>

    </>

  )
}
const mapStateToProps = (state) => ({
  adDetails: state.ad.adDetails,
});

export default connect(mapStateToProps, {
  loadAdDetails,
  loadAdImage,
  setImageLoadingStatus,
})(Card)