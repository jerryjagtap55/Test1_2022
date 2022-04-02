import React from 'react';
import { Product_form, Sidebar } from '../../containers';
import './sell.css';

const Sell = () => {
    return (
        <>
            <div className='row'>
                <Sidebar>
                </Sidebar>
                <div className='mx-4 dashboard flex-fill col-md-7'>
                    <div>
                        <h4 className='display-6'>
                            Sell an Item
                        </h4>
                    </div>
                    <hr />
                    <div>
                        <Product_form></Product_form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sell