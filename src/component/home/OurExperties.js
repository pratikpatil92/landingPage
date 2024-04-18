'use client'
import React from 'react'
import { Carousel } from 'primereact/carousel';
import { experties } from "../../../src/content/content"


export default function OurExperties() {
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (feature) => {
        return (
            <div className="experties card">
                <div className="experties-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            </div>
        );
    };
    return (
        <div className="mycontainer mb-3">
            <div className="text-center mt-5">
                <h1 >Our Expertise</h1>
            </div>
            <div className="features">
                <Carousel circular={true} value={experties} numScroll={1} numVisible={2} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
            </div>
        </div>
    )
}
