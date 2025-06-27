import React from 'react'
import "../App.css"

const HomeCouplePics = () => {
    return (
        <div className='containerofCouple'>
            <div className="curtains">
                <div className="text1" >
                    <h1 style={{ fontFamily: "Elsie Swash Caps", fontSize: "48px" }}>it's Not <span className="highlight">Just a Wedding...</span></h1>
                    <p style={{ fontSize: "27px" }}>It's a Stroy You'll Tell Forever</p>
                    <p style={{ fontSize: "17.42px" }}>Shaadi ka stress is real. One minute you're choosing napkin clolors, next
                        <br /> minute you're crying over seating charts. We get it.</p>
                    <p style={{ fontSize: "27px" }}>At Poornam, we don't just manage weddings:</p>
                    <p style={{ fontSize: "17.42px" }}>We manage meltdowns, Moodboards, and Mom's wishlist. From the first
                        <br /> dance to the final googbye hug, were there.
                    </p>
                </div>

            </div>
            <div className="couple-pic" >
                <img className='image1' src="couple-pic1.png"></img>
                <br />
                <img className='image2' src="couple-pic2.png"></img>
            </div>
        </div>
    )
}

export default HomeCouplePics;