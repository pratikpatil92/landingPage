import Image from 'next/image'
import React from 'react'
import "./../../style/main.css"

export default function Page() {
    return (
        <div className="mycontainer">
            <div className="p-5">
                <div className="row">
                    <div className="col-md-6 aboutUsImg">
                        <Image src="/aboutUs.jpeg" width="1000" height="500" alt="about us" />
                    </div>
                    <div className="col-md-5">
                        <h2>About Us</h2>
                        <p>tricolab technology is a leading software development company based in Mumbai, Maharashtra, India. With a team of highly skilled professionals, we are dedicated to delivering innovative and high-quality solutions to our clients.

                            Our commitment to excellence and customer satisfaction sets us apart in the industry, and we strive to exceed expectations with every project we undertake.</p>
                    </div>
                </div>

            </div>
        </div>

    )
}
