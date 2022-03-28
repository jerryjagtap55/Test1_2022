import React from 'react';
import './card.css';

const Card = () => {
  return (
    <>
      <div className='text-start'>
        <div className="card mb-3 card-test ">

          <div className="card-body row">
            <div className="col-md-7">
              <img src="" className="img-fluid rounded-start" alt="Card Image" />
              <p>Image</p>
            </div>
            <div className="col-md-5">
              <div>
                <h4 className='card-title'>Card Title</h4>
                <h6 className='card-subtitle mb-2 text-muted'>
                  by User
                </h6>
                <p className="card-text small">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                <a href="/product" className="btn btn-primary mb-4">Check it out!</a>

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