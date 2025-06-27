import React from 'react'
import "../App.css"

function HomeServices () 
 {
    return (
        <div className='ourServices'>
            <h1 className='headingdesign'>Our Services</h1>
            <h3>Everything You Need, Delivered Beautifully</h3>
            <div className='services'>
                <div className='services1'>
                    <>
                      <img className="serviceIcons" src='serviceImg1.png'></img>
                    </>
                    <>
                        <>
                            <p><span style={{ fontSize: "26px" }}>Destination <br />
                                 Weddings</span><br></br>

                                <span style={{ fontSize: "15px" }}>We plan unforgettable Weddings<br />
                                    in Udaipur, Goa, Jaipur, and <br />
                                    even your ancestral haveli...</span
                                    ><hr style={{ height: '2px', backgroundColor: "#DAA412", width: '70%' }} /> </p>
                        </>
                       
                    </>
                </div>
                <div className='services1'>
                    <>
                         <img className="serviceIcons" src='serviceImg2.png'></img>
                    </>
                    <>
                        <p><span style={{ fontSize: "26px" }}> Intimate <br />
                            Weddings </span><br />
                            <span style={{ fontSize: "15px" }}> Smaller Weddings, bigger heart.<br />
                             We specialize in private, cozy <br />
                             affairs...</span>
                        </p>
                    </>
                </div>
                <div className='services1'>
                    <>
                        <img className="serviceIcons" src='serviceImg3.png'></img>
                    </>

                    <>
                        <p><span style={{ fontSize: "26px" }}>Themed & <br />
                         Designer Weddings
                           </span> <br />
                            <span style={{ fontSize: "15px" }}>Enjoy your day while we handle<br />
                                the details</span>
                        </p>
                    </>
                </div>
            </div>
            <div className='services'>
                <div className='services1'>
                    <>
                        <img className="serviceIcons" src='serviceImg4.png'></img>
                    </>
                    <>
                        <>
                            <p><span style={{ fontSize: "26px" }}>Full Wedding <br />
                                Planning</span><br></br>

                                <span style={{ fontSize: "15px" }}>Dont't lift a finger. We'll plan <br />
                                the entire shaadi.</span> </p>
                        </>
                    </>
                </div>
                <div className='services1'>
                    <>
                        <img className="serviceIcons" src='serviceImg5.png'></img>
                    </>
                    <>
                        <p><span style={{ fontSize: "26px" }}>Wedding Day <br />
                            Coordination </span><br />
                            <span style={{ fontSize: "15px" }}> Because you dont't want to be<br />
                               managing the DJ during your <br/>
                              own varmala.</span>
                        </p>
                    </>
                </div>
                <div className='services1'>
                    <>
                         <img className="serviceIcons" src='serviceImg6.png'></img>
                    </>

                    <>
                        <p><span style={{ fontSize: "26px" }}>Wedding Decor  <br />
                            & Styling
                           </span> <br />
                            <span style={{ fontSize: "15px" }}>More then just pretty flowers.<br />
                                We design Instagram-worthy <br /> wedding sets, mandaps...</span>
                        </p>
                    </>
                </div>
            </div>

        </div>
    )
}
 export default HomeServices ;