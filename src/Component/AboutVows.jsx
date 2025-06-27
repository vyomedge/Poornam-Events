import React from 'react'

const AboutVows = () => {
    return (
        <div className='aboutVowsSection'>
            <p style={{ fontFamily: "Elsie Swash Caps", fontSize: "40px" }}>Poornam Vows</p>
            <p style={{ fontSize: "16px" }}>Our Promises to You</p>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='aboutVows1'>
                        <img src='aboutVows1.png' style={{ width: "250px", height: "100", paddingRight: "15px" }} />
                        <p> <strong style={{ fontSize: "28px" }}>We vow to <br />bring  joy <br /></strong>
                            <span style={{ fontSize: "16px" }}>Every detail matters.</span></p>

                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='aboutVows1' >
                        <img src='aboutVows2.png' style={{ width: "250px", height: "100", paddingRight: "15px" }} />
                        <p> <strong style={{ fontSize: "28px" }}>We vow to be<br /> transparent <br /></strong>
                            <span style={{ fontSize: "16px" }}>Open communication is key.</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutVows