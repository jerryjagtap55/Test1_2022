import { React, useState } from 'react';

import {
    FormControl,
    Input,
    InputLabel,
    TextField
}
    from '@mui/material';

const Product_form = () => {

    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`);
    }

    return (
        <>
            <form className='container form-container' onSubmit={handleSubmit}>
                <div className='rows'>
                    <FormControl variant="standard" className='col-md-4 mb-3 mx-3'>
                        <InputLabel htmlFor="component-simple">Name</InputLabel>
                        <Input
                            type="text"
                            name="p_name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoFocus
                        />
                    </FormControl>
                </div>
                <div className='rows'>
                    <div className="col-md-4 mb-3 mx-3">
                        <TextField
                            id="description"
                            label="Description"
                            multiline
                            rows={4}
                            variant="standard"
                            fullWidth
                        />
                    </div>
                </div>
                <div className='rows'>
                    <FormControl variant="standard" className='col-md-4 mb-3 mx-3'>
                        <InputLabel htmlFor="component-simple">Biding Start Price</InputLabel>
                        <Input
                            type='number'
                            name='bid_price'
                        />
                    </FormControl>
                </div>
                <div className='rows'>
                    <div className='col-md-6 mb-3 mx-3'>
                        <Input
                            lable='Timer'
                            type='datetime-local'
                            name='days'
                        />
                    </div>
                </div>

                <div className='rows'>
                    <div className='col-md mb-3 mx-3'>
                        <label htmlFor="Catogeries">Catogaries: &nbsp;</label>
                        <div className="form-check form-check-inline mx-3">
                            <input className="form-check-input" type="checkbox" id="moden_art" value="moden art" />
                            <label className="form-check-label" htmlFor="moden_art">Moden Art</label>
                        </div>
                        <div className="form-check form-check-inline mx-3">
                            <input className="form-check-input" type="checkbox" id="virtual_fashion" value="Virtual Fashion" />
                            <label className="form-check-label" htmlFor="virtual_fashion">Virtual Fashion</label>
                        </div>
                        <div className="form-check form-check-inline mx-3">
                            <input className="form-check-input" type="checkbox" id="gamingt" value="Gaming" />
                            <label className="form-check-label" htmlFor="gamingt">Gaming</label>
                        </div>
                        <div className="form-check form-check-inline mx-3">
                            <input className="form-check-input" type="checkbox" id="artwork" value="Artwork" />
                            <label className="form-check-label" htmlFor="artwork">Artwork</label>
                        </div>
                        <div className="form-check form-check-inline mx-3">
                            <input className="form-check-input" type="checkbox" id="memes" value="Memes" />
                            <label className="form-check-label" htmlFor="memes">Memes</label>
                        </div>
                        <div className="form-check form-check-inline mx-3">
                            <input className="form-check-input" type="checkbox" id="miscellaneous" value="Miscellaneous" />
                            <label className="form-check-label" htmlFor="miscellaneous">Miscellaneous</label>
                        </div>
                        <div className="form-check form-check-inline mx-3">
                            <input className="form-check-input" type="checkbox" id="items" value="Collectible items" />
                            <label className="form-check-label" htmlFor="items">Collectible items</label>
                        </div>
                        <div className="form-check form-check-inline mx-3">
                            <input className="form-check-input" type="checkbox" id="pixel_art" value="Pixel Art" />
                            <label className="form-check-label" htmlFor="pixel_art">Pixel Art</label>
                        </div>
                    </div>
                </div>

                <div className='rows'>
                    <div className='col-md-4 mb-3 mx-3'>
                        <label htmlFor="image">
                            <Input accept="image/*" id="image" multiple type="file" />
                        </label>
                    </div>
                </div>


                <button className='btn btn-primary mx-3 my-3' type="submit" variant="contained">
                    Submit
                </button>
            </form>
        </>
    )
}

export default Product_form