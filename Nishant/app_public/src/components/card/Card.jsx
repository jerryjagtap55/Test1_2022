import React from 'react';
import './card.css';

const Card = () => {
  return (
    <>
      <div class='text-start'>
        <div class="card mb-3 card-test ">

          <div class="card-body row">
            <div class="col-md-7">
              <img src="" class="img-fluid rounded-start" alt="Card Image" />
              <p>Image</p>
            </div>
            <div class="col-md-5">
              <div>
                <h4 class='card-title'>Card Title</h4>
                <h6 class='card-subtitle mb-2 text-muted'>
                  by User
                </h6>
                <p class="card-text small">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                <a href="/product" class="btn btn-primary mb-4">Check it out!</a>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item">1st Bid!</li>
                  <li class="list-group-item">Current Bid!</li>
                  <li class="list-group-item"></li>
                </ul>

                <p class='card-text lead text-muted my-4'>
                  Timer:  1Day  20hrs  10mins
                </p>
              </div>
            </div>
          </div>

          <div class="card-footer text-muted small">
            2 days ago
          </div>
        </div>

      </div>
    </>

  )
}

export default Card