import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
// Actions
import { postAd } from '../../actions/ad';
import { setAlert, clearAlerts } from '../../actions/alert';
import {
    FormControl,
    Input,
    InputLabel,
    Button,
    TextField
}
    from '@mui/material';

const Product_form = ( props ) => {

    const [ form, setForm ] = useState( {
        productName: '',
        description: '',
        basePrice: 0,
        duration: 300,
        category: '',
        image: '',
    } );
    const [ file, setFile ] = useState( '' );
    const [ fileName, setFileName ] = useState( 'Choose your image file...' );
    const [ fileValid, setFileValid ] = useState( true );
    const [ uploading, setUploading ] = useState( false );
    let navigate = useNavigate();

    useEffect( () => {
        return () => {
            props.clearAlerts();
        };
    }, [] );

    const handleFormChange = ( e ) => {
        e.preventDefault();
        setForm( {
            ...form,
            [ e.target.name ]: e.target.value,
        } );
    };

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        // Check for empty fields
        if ( form.productName === '' ) {
            return props.setAlert( 'Product name required!' );
        }
        if ( form.basePrice.toString() === '0' ) {
            return props.setAlert( 'Base price required!' );
        }
        if ( form.duration.toString() === '0' ) {
            setForm( { ...form, duration: 300 } );
        }
        if ( !fileValid ) {
            // if selected file is not image/exceeds size limit
            props.setAlert( 'Image file not valid!', 'error' );
        } else {
            if ( file === '' ) {
                // submit without photo
                await props.postAd( form );
                navigate( '/' );
            } else {
                // with photo
                const imagePath = await uploadImage();
                console.log( imagePath );
                if ( imagePath ) {
                    await props.postAd( { ...form, image: imagePath } );
                    navigate( '/' );
                }
            }
        }
    };

    const fileSelected = ( e ) => {
        let filesize = ( e.target.files[ 0 ].size / ( 1024 * 1024 ) ).toFixed( 3 );
        let fileType = e.target.files[ 0 ].type.toString();
        let regex = /^image\/(png|jpg|jpeg|gif)$/;
        // if (fileType !== 'image/jpeg' && fileType !== 'image/png') {
        if ( !regex.test( fileType ) ) {
            props.setAlert( 'Image must be of type JPEG, PNG or GIF' );
            setFile( '' );
            setFileValid( false );
        } else if ( filesize > 3 ) {
            props.setAlert( 'Image size must be less than 3 MB', 'error' );
            setFile( '' );
            setFileValid( false );
        } else {
            setFileValid( true );
            setFile( e.target.files[ 0 ] );
            setFileName( e.target.files[ 0 ].name );
        }
    };

    const uploadImage = async () => {
        setUploading( true );
        const formData = new FormData();
        formData.append( 'image', file );
        try {
            const res = await axios.post(
                `${ process.env.REACT_APP_API_BASE_URL }/upload/image`,
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );
            return res.data.imagePath;
        } catch ( error ) {
            console.log( error );
            setUploading( false );
            props.setAlert( 'File upload failed', 'error' );
        }
    };

    // Check if user is logged
    if ( !props.isAuth ) {
        return <Navigate to='/login' />;
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
                            onChange={( e ) => {
                                handleFormChange( e );
                            }}
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
                            onChange={( e ) => handleFormChange( e )}
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
                            onChange={( e ) => handleFormChange( e )}
                        />
                    </FormControl>
                </div>
                <div className='rows'>
                    <div className='col-md-6 mb-3 mx-3'>
                        <Input
                            lable='Timer'
                            type='number'
                            name='duration'
                            onChange={( e ) => handleFormChange( e )}
                            placeholder="duration in seconds"
                        />
                    </div>
                </div>

                <div className='rows'>
                    <div className='col-md-6 mb-3 mx-3'>
                        <Input
                            lable='Category'
                            type='String'
                            name='category'
                            onChange={( e ) => handleFormChange( e )}
                            placeholder="Paintings, etc.."
                        />
                    </div>
                </div>

                {/* <div className='rows'>
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
 */}

                {uploading(

                    <div className='rows'>
                        <div className='col-md-4 mb-3 mx-3'>
                            <label htmlFor="image">
                                <Input name='uploaded_file'
                                    type='file'
                                    id='imageFile'
                                    onChange={fileSelected}
                                    fullWidth />
                            </label>
                        </div>
                    </div>

                )}
                {!uploading && (
                    <Button variant='contained' onClick={( e ) => handleSubmit( e )}>
                        Submit
                    </Button>
                )}
            </form>
        </>
    );
};
const mapStateToProps = ( state ) => ( {
    loading: state.auth.loading,
    isAuth: state.auth.isAuthenticated,
} );

export default connect( mapStateToProps, { postAd, setAlert, clearAlerts } )( Product_form );
