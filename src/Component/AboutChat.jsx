import React from 'react'

function AboutChat() {
    return (
        <div className='aboutChat'>
            <div className='chatInput'>
                <p style={{
                            fontFamily: "Elsie Swash Caps",
                            fontStyle: " normal",
                            fontSize: '40px',
                        }}><strong>Get in Touch with the <br />
                    Heart Behind the Brand</strong></p>
                <p style={{
                    fontSize:"16px"
                }}>Let's connect and make your dream wedding a reality.</p>
            </div>
            <div className='chatInput1'>
                <label style={{fontSize:"14px"}}> <strong>Your Name</strong></label> <br/>
                <input style={{fontSize:"14px", borderColor:"lightGrey", borderRadius:"5px", width:"70%"}} type='text' placeholder='Enter your name'></input> <br/>
                <br />
                <label style={{fontSize:"14px"}} ><strong>Your Message</strong></label>
                 <br/>
                 
                <input style={{fontSize:"14px" , borderColor:"lightGrey", borderRadius:"5px", width:"70%"}} type='text' placeholder='How can we help you?'></input>
                 <br/>
                 <br/>
                <button style={{backgroundColor:"#DAA412", color:"white", padding:"5px 10px" ,margin:"20px", borderRadius:"15px", border:"none"}}>Let's Chat</button>
            </div>

        </div>
    )
} export default AboutChat;