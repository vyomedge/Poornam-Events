import React from 'react'

function HomePortfolio ()  {
    return (
        <div className='ourPortfolio'>
            <h1 className='headingdesign'>Our Portfolio</h1>
            <p style={{fontSize:"18px"}}>Real Weddings, Real Emotions.</p>
            <div className='portfolio'>
                <> <img src='portfolio image o1 1.png'></img>
                </>

                <div className="portfolioPics">
                    <>
                        <img src='portfolio image o1 2.png'></img>
                        <img src='portfolio image o1 3.png' />
                    </> 
                    <br />

                    <div style={{display:"flex"}}>
                        <img style={{height:"140px", padding:"8px" }} src='portfolioImg4.png' />
                        <img style={{height:"150px" }} src='portfolio image o1 5.png' />
                        <div style={{position:"relative"}}>
                            <img style={{position:"absolute",top:0, height:"150px", width:"435px", padding:"5px"}} src='portfolioImageRainbow .png' />
                            <button className='portfolioBtn' style={{position:"absolute",top:"40%",left:100}}>View Full Wedding Stories</button>
                        </div>
                    
                    </div>
                </div>





            </div>
        </div>
    )
}

export default HomePortfolio;