import React from 'react'

const Footer = () => {
  return (
    <> <div className='footerSection'>
        <div style={{width:"40%"}} className='footerLogo'>
            <img style={{padding:"70px 0px"}} src='Logo-1.png'></img>
            <p style={{color:"white"}}>Every wedding is a story. <br />
            Let us help you tell yours!</p>
            <img src='SocialMediaIcons1.png'/>
        </div>
       <div style={{width:"60%"}}  className='chapterSection' >
         <div>
            <h4 style={{color:"white"}}>Services</h4>
            <p style={{color:"white"}}>Chapter 1</p>
            <p style={{color:"white"}}>Chapter 2</p>
            <p style={{color:"white"}}>Chapter 3</p>
            <p style={{color:"white"}}>Chapter 4</p>
        </div>
         <div>
            <h4 style={{color:"white"}}>Contact</h4>
            <p style={{color:"white"}}>Chapter 1</p>
            <p style={{color:"white"}}>Chapter 2</p>
            <p style={{color:"white"}}>Chapter 3</p>
            <p style={{color:"white"}}>Chapter 4</p>
        </div>
         <div>
            <h4 style={{color:"white"}}>Contact</h4>
            <p style={{color:"white"}}>Chapter 1</p>
            <p style={{color:"white"}}>Chapter 2</p>
            <p style={{color:"white"}}>Chapter 3</p>
            <p style={{color:"white"}}>Chapter 4</p>
        </div>
        
       </div>

    </div>
    <div className='yellowFooter'>
            <p> © 2025 Poornam Events. Developed by <span>Vyomedge</span></p>
            <img src='roboIcon.png'/>
        </div></>
   
  )
}

export default Footer;