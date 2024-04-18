import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { features } from "../../../src/content/content"
import GroupsIcon from '@mui/icons-material/Groups';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

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
                        {feature.title == "Expertise" && <GroupsIcon sx={{ fontSize: 40 }} className="icon" />}
                        {feature.title == "Reliability" && <SecurityIcon sx={{ fontSize: 40 }} className="icon" />}
                        {feature.title == "Customer Support" && <SupportAgentIcon sx={{ fontSize: 40 }} className="icon" />}
                        {feature.title == "Innovation" && <EmojiObjectsIcon sx={{ fontSize: 40 }} className="icon" />}
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
