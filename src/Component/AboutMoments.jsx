import React from 'react'

const AboutMoments = () => {
    return (
        <div className='momentsSection'>
            <>
                <p style={{
                    fontFamily: "Elsie Swash Caps",
                    fontStyle: " normal",
                    fontSize: '40px',
                }}>Poornam in Moments</p>
                <p style={{ fontSize: "16px" }}>Our Journey so Far</p>
            </>
            <div className='moments'>
                <div className='moments1'>
                    <>
                        <img src='MomentsIcon1.png' style={{ width: "100px", height: "100px", paddingRight: "15px" }} />
                    </>
                    <>
                        <p> <strong style={{ fontSize: "20px", padding: "10px" }}>First Wedding <br /></strong>
                            <span style={{ fontSize: "16px", padding: "10px" }}>Where it all began.</span></p>
                    </>

                </div>
                <div className='moments1' >
                    <>
                        <img src='MomentsIcon2.png' style={{ width: "100px", height: "100px", paddingRight: "15px" }} />
                    </>
                    <>
                        <p> <strong style={{ fontSize: "20px", padding: "10px" }}>Team Growth <br /> </strong>
                            <span style={{ fontSize: "16px", padding: "10px" }}>Our family keeps growing!</span></p>
                    </>

                </div>
            </div>

        </div>
    )
}

export default AboutMoments