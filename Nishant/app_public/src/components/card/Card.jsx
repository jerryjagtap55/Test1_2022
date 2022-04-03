import React, { useEffect, useState } from 'react';
import './card.css';
import card_img from '../../assets/hero1.png';
import { display } from '@mui/system';

const Card = ( props ) => {
  /*   const [ name1, setData ] = useState( [] );
    useEffect( () => {
      fetchdata();
    }, [] );
    async function fetchdata () {
      const response = await fetch( "http://localhost:4000/homedataapi/home" );
      if ( !response.ok ) {
        const message = `an error has occured `;
        window.alert( message );
        return;
      } */
  //console.log( response.json() );
  // const record = await response.json();
  //  setData( await response.json() );

  /*  if ( !record ) {
     window.alert( "record not found" );
     return;
   }
   console.log( record ); */

  // }
  // fetchdata();


  return (
    <>

      <div className='text-start'>
        <div className="card mb-3 card-test ">

          <div className="card-body row">
            <div className="col-md-7 card_img-holder">
              <img src={card_img} className="img-fluid rounded-start card-img" alt="Card Image" />
            </div>
            <div className="col-md-5">
              <div>
                <h4 className='card-title' >{this.props.name}</h4>
                <h6 className='card-subtitle mb-2 text-muted' >
                  {this.props.name}
                </h6>
                <p className="card-text small" >{this.props.description}</p>

                <a href="/product" className="btn btn-primary mb-4">{this.props.name}</a>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item" >{this.props.name}</li>
                  <li className="list-group-item" >{this.props.name}</li>
                  <li className="list-group-item"></li>
                </ul>

                <p className='card-text lead text-muted my-4' >
                  {this.props.user_date}
                </p>
              </div>
            </div>
          </div>

          <div className="card-footer text-muted small" >
            {this.props.name}
          </div>
        </div>


      </div>;


    </>

  );
};

export default Card;