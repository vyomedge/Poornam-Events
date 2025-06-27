import React from 'react'
import "../App.css"

function HomeTools  ()  {
    return (
       
        < div style={{ backgroundColor: "#FFFCF5" }}>
            <div style={{ display: 'flex', width: "70%", margin: "auto",padding:"30px" }}>
                <div style={{ width: "40%", display: "flex", alignItems: "center" }}>
                    <div>
                        <h1 className='headingdesign'>Resources</h1>
                        <p style={{marginBottom:"30px"}}>Love From Our Couples</p>
                        <button style={{ padding: "5px 20px", backgroundColor: "#DAA412", color: "white", borderRadius: "15px", border: "none" }}>View Full Wedding Stories</button>
                    </div>
                </div>
                <div style={{ width: "60%" }}>
                    <h2 style={{marginBottom:"30px"}}>Grap you free tools</h2>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", justifyContent: "center", gap: "20px", alignItems: "center", flexDirection: "column" }}>
                            <img src='Financial analytics with graph and calculator.png' height={"100px"} width={"100px"}/>
                            <p style={{ textAlign: "center", fontWeight: "bold" }}>Budget<br /> Calculator</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", gap: "20px", alignItems: "center", flexDirection: "column" }}>
                            <img src='survey sheet.png' height={"100px"} width={"100px"}/>
                            <p style={{ textAlign: "center", fontWeight: "bold" }}>Venue Comparision<br /> Sheet</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", gap: "20px", alignItems: "center", flexDirection: "column" }}>
                            <img src='Vector.png'  height={"100px"} width={"100px"}/>
                            <p style={{ textAlign: "center", fontWeight: "bold" }}>Top 10 mandap<br /> Themes for 2025</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeTools;