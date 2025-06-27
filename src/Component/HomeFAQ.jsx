import React from 'react'

const HomeFAQ = () => {
  return (
    <div className='faqSection'>
        <h1 className='headingdesign'>FAQ's</h1>
        <p>Your Questions, Answered</p>
        <div className='faqs'>  
            <p>Do you only plan wedding in indore</p> <img src='ChevronLeft.png'/>
             <hr style={{ border: 'none', height: '4px', backgroundColor: '#DAA412' }} />
             <p>Can you help with last-minute weddings?</p>
              <hr style={{ border: 'none', height: '4px', backgroundColor: '#DAA412' }} />
              <p>Do you provide decorators and photoghraphers too?</p>
               <hr style={{ border: 'none', height: '4px', backgroundColor: '#DAA412' }} />
               <p>Do you budget planning help?</p>
        </div>
    </div>
  )
}

export default HomeFAQ;