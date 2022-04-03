import React from 'react';
import './card.css';
import card_img from '../../assets/hero1.png'
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <>
      <div className='text-start'>
        <div className="card mb-3 card-test ">

          <div className="card-body row">
            <div className="col-md-7 card_img-holder">
              <img src={card_img} className="img-fluid rounded-start card-img" alt="Card" />
            </div>
            <div className="col-md-5">
              <div>
                <h4 className='card-title'>Card Title</h4>
                <h6 className='card-subtitle mb-2 text-muted'>
                  by User
                </h6>
                <p className="card-text small">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                <Link to="/product" className="btn btn-primary mb-4">Check it out!</Link>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">1st Bid!</li>
                  <li className="list-group-item">Current Bid!</li>
                  <li className="list-group-item"></li>
                </ul>

                <p className='card-text lead text-muted my-4'>
                  Timer:  1Day  20hrs  10mins
                </p>
              </div>
            </div>
          </div>

          <div className="card-footer text-muted small">
            2 days ago
          </div>
        </div>

      </div>
    </>

  )
}

export default Card