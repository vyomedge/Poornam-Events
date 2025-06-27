import React from 'react'

function AboutPhilosophy() {
    return (
        <div>
            <div className='aboutPhilosophy1'>
                <> <h1 style={{
                    fontFamily: "Elsie Swash Caps",
                    fontStyle: " normal",
                    Weight: "900",
                    fontSize: '40px',
                    marginTop: "30px"
                }}> Our Philosophy</h1></>
                <>
                    <img style={{ height: "150px", width: "200px" }} src='aboutBook.png' />
                </>

                <div className='aboutPhilosophyText1' style={{ lineHeight: "16px" }}>
                    <p style={{ fontSize: "20px ", lineHeight: "2px", textDecorationStyle: "double", Weight: "500" }}><strong>Our Humble Beginnings</strong></p> <br />
                    <p style={{ fontSize: "16px" }}>Founded by a passionate team, Poornam began <br />
                        with the idea of bringing joy and creativity to <br />
                        Indian weddings.</p>
                </div>

            </div>
            <hr></hr>

            <div className='aboutPhilosophy1'>
                <>
                    <img style={{ height: "150px", width: "200px" }} src='aboutDart.png' />
                </>
                 <div className='aboutPhilosophyText1' style={{ lineHeight: "16px" }}>
                    <p style={{ fontSize: "20px ", lineHeight: "2px", textDecorationStyle: "double", Weight: "500" }}><strong>Our Mission</strong></p> <br />
                    <p style={{ fontSize: "16px" }}>To create memorable moments filled with <br />
                       creativity, care, joy, and authenticity.</p>
                </div>
                  <div> <h1 style={{
                    fontFamily: "Elsie Swash Caps",
                    fontStyle: " normal",
                    Weight: "900",
                    fontSize: '40px',
                    marginTop: "30px"
                }}> Our Philosophy</h1>
                <p>Why We Exist</p>
                </div>
               
            </div>
        </div>
    )
}

export default AboutPhilosophy;