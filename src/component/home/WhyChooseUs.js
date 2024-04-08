import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { features } from "../../../src/content/content"

export default function WhyChooseUs() {
    return (
        <div className="mycontainer">
            <div className="text-center mt-5">
                <h1 >Why Choose Us?</h1>
            </div>
            <div className="features">
                {features.map((feature, index) => (
                    <div key={index} className="feature">
                        {/* <CheckCircleIcon className="icon" /> */}
                        <div className="text">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
