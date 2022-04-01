import { React, useState } from 'react';
import axios from 'axios';

import {
    FormControl,
    Input,
    InputLabel,
    TextField
}
    from '@mui/material';

const Product_form = () => {

    function onSubmit(){
        
        var name = document.getElementById('name').value;
        var description = document.getElementById('description').value;
        var image = document.getElementById('Image').value;
        var category = "";
        var biding_start_price = document.getElementById('biding_start_price').value;
        var user_date = document.getElementById('user_date').value;

        var category_checkboxes = document.getElementsByName('art_category');
        for (var checkbox of category_checkboxes)
        {
            if (checkbox.checked) {
                category = checkbox.value;
            }
        }

        

        const sellData = {
            name,
            description,
            image,
            category,
            biding_start_price,
            user_date
        }
        
        console.log(sellData);

        axios.post("http://localhost:4000/app/sell", sellData)
            .then(response => console.log(response.data))

    // const [name, setName] = useState("");

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert(`The name you entered was: ${name}`);
    // }
    }

    return (
        <>
            {/* <form className='container form-container'> */}
            {/* <form> */}
                <div className='rows'>
                    <FormControl variant="standard" className='col-md-4 mb-3 mx-3'>
                        <InputLabel htmlFor="component-simple">Name</InputLabel>
                        <Input
                          id="name"
                            type="text"
                            name="p_name"
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
                            id="biding_start_price"
                            type='number'
                            name='bid_price'
                        />
                    </FormControl>
                </div>
                <div className='rows'>
                    <div className='col-md-6 mb-3 mx-3'>
                        <Input
                            id="user_date"
                            lable='Timer'
                            type='date'
                            name='days'
                        />
                    </div>
                </div>

                <div className='rows'>
                    <div className='col-md mb-3 mx-3' id="category">
                        <label htmlFor="Catogeries">Catogaries: &nbsp;</label>
                        <div class="form-check form-check-inline mx-3">
                            <input class="form-check-input" name = "art_category" type="checkbox" id="moden_art" value="moden art" />
                            <label class="form-check-label" htmlFor="moden_art">Moden Art</label>
                        </div>
                        <div class="form-check form-check-inline mx-3">
                            <input class="form-check-input" type="checkbox"  name = "art_category" id="virtual_fashion" value="Virtual Fashion" />
                            <label class="form-check-label" htmlFor="virtual_fashion">Virtual Fashion</label>
                        </div>
                        <div class="form-check form-check-inline mx-3">
                            <input class="form-check-input" name = "art_category" type="checkbox" id="gamingt" value="Gaming" />
                            <label class="form-check-label" htmlFor="gamingt">Gaming</label>
                        </div>
                        <div class="form-check form-check-inline mx-3">
                            <input class="form-check-input" name = "art_category" type="checkbox" id="artwork" value="Artwork" />
                            <label class="form-check-label" htmlFor="artwork">Artwork</label>
                        </div>
                        <div class="form-check form-check-inline mx-3">
                            <input class="form-check-input" name = "art_category" type="checkbox" id="memes" value="Memes" />
                            <label class="form-check-label" htmlFor="memes">Memes</label>
                        </div>
                        <div class="form-check form-check-inline mx-3">
                            <input class="form-check-input"  name = "art_category" type="checkbox" id="miscellaneous" value="Miscellaneous" />
                            <label class="form-check-label" htmlFor="miscellaneous">Miscellaneous</label>
                        </div>
                        <div class="form-check form-check-inline mx-3">
                            <input class="form-check-input" name = "art_category" type="checkbox" id="items" value="Collectible items" />
                            <label class="form-check-label" htmlFor="items">Collectible items</label>
                        </div>
                        <div class="form-check form-check-inline mx-3">
                            <input class="form-check-input" name = "art_category" type="checkbox" id="pixel_art" value="Pixel Art" />
                            <label class="form-check-label" htmlFor="pixel_art">Pixel Art</label>
                        </div>
                    </div>
                </div>

                <div className='rows'>
                    <div className='col-md-4 mb-3 mx-3'>
                        <label htmlFor="image">
                            <Input accept="image/*" id="Image" multiple type="file" />
                        </label>
                    </div>
                </div>
                

                {/* <button className='btn btn-primary mx-3 my-3' type="submit" variant="contained" > */}
                    
                <button className='btn btn-primary mx-3 my-3' type="submit" variant="contained" onClick={() => onSubmit()}>
                    Submit
                </button>
            {/* </form> */}
            {/* <button onClick={() => console.log("click")}>
                    click
            </button> */}
        </>
        )
    }


export default Product_form