import React from 'react'
import { Card } from '../index';

const Carousel = () => {
    return (
        <>
            <div class="container-fluid py-2">
                <div class="d-flex flex-row flex-nowrap overflow-auto">
                    <Card></Card>
                    <div class='mx-4'>
                    <Card></Card>
                    </div>
                    <Card></Card>
                </div>
            </div>
        </>
    )
}

export default Carousel