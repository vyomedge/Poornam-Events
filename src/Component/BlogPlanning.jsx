import React from 'react'

function BlogPlanning () {
  return (
    <div className='blogPlanning'>

        <div className='blogPanning1'>
            <p style={{
                            fontFamily: "Elsie Swash Caps",
                            fontStyle: " normal",
                            fontSize: '40px',
                        }}><strong>Shaadi Ki Planning?</strong> <br />
            <span style={{color:"#DAA412"}}>Gyaan Bhi, Fun Bhi !</span>
        </p>
        <p style={{fontSize:"16px"}}>Welcome to the only wedding blog that understands your vibe, your <br />
        chaos, and your cousin who always wants to dance at haldi. From <br />
        serious planning tips to hilarious shaadi stories, we've written it all - <br />
        with love, dhol, and a bit of dholak.</p>
        <button style={{ backgroundColor:"#DAA412", color:"white",border:"none",borderRadius:"15px", padding:"5px 15px"}}>Start Planning</button>
        </div>
          <img src='BlogPic1.png' style={{width:"520px" , height:"400px"}}/>
    </div>
  
  )
}

export default BlogPlanning;