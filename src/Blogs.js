import React from 'react'
import BlogPlanning from './Component/BlogPlanning';
import BlogFinds from './Component/BlogFinds';
import BlogTips from './Component/BlogTips';

const Blogs = () => {
  return (
    <>
<div className='blogsSection'>
        <img src='Logo-1.png' />
        <p  style={{
                              fontFamily: "Elsie Swash Caps", 
                             fontStyle:" normal",
                            color: "#E6C365",
                            fontSize: '48px',
                            marginBottom:"0px"
                        }}>Shaadi ki Planning? Gyaan Bhi, Fun Bhi!</p>
        <p style={{

                            color: "#FFF5D9",
                            FontFamily: "Akatab",
                            Weight: "400",
                            fontSize: "18px",
                            

                        }}>Welcome to the only wedding blog tht understands your vibe, your chaos, and your cousin who <br>
        </br>always wants to dance at haldi. From serious planning tips to hilarious shaadi stories, we've <br />
        written it all -- with ❤️, dhol, and a bit of dholak. For brides, grooms, families, and even the <br />
        baaratis. Let's get planning, Poornam-style.</p>
       
    </div>
    <BlogPlanning />
    <BlogFinds />
    <BlogTips />
    </>
    
  )
}

export default Blogs;