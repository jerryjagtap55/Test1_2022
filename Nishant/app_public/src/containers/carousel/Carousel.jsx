import React from 'react'
import { Card } from '../index';

const Carousel = () => {
    return (
        <>
            <div className="container-fluid py-2">
                <div className="d-flex flex-row flex-nowrap overflow-auto">
                    <Card></Card>
                    <div className='mx-4'>
                    <Card></Card>
                    </div>
                    <Card></Card>
                </div>
            </div>
        </>
    )
}

export default Carousel