import Footer from "./Component/Footer";
import AboutPhilosophy from "./Component/AboutPhilosophy"
import AboutPic from "./Component/AboutPic";
import AboutUs from "./Component/AboutUs";
import AboutVows from "./Component/AboutVows";
import AboutMoments from "./Component/AboutMoments";
import AboutLife from "./Component/AboutLife";
import AboutChat from "./Component/AboutChat";

function About() {
    return (
        <>
            <div style={{ position: "relative" }} className="aboutBanner">
                <img style={{ padding: "30px 60px" }} src="Logo-1.png" ></img>
                <div className="aboutMain">
                    <div >
                        <p style={{
                            fontFamily: "Elsie Swash Caps",
                            fontStyle: " normal",
                            color: "#fff",
                            fontSize: '48px',
                        }}>Let's Make Shaadi Magic Together!</p><br></br>

                        <p style={{
                            color: "#FFF5D9",
                            Font: "Akatab",
                            Weight: "400",
                            fontSize: "18px",
                            LineHeight: "135%",

                        }}>From planning to "I do", we've got your back!</p>
                        <br />
                        <button style={{
                            backgroundColor: "#D7A10F", color: "white", borderRadius: "25px",
                            padding: "5px 25px", border: "none", marginRight: "10px", fontSize: "16px"
                        }}>Plan My Wedding</button>

                        <img src="aboutBanner.png" className="aboutBanner" style={{ position: "absolute", top: 0, left: 0, width: "100%" }} />
                    </div>
                </div>
            </div>
            <AboutPhilosophy />
            <AboutPic />
            <AboutUs />
            <AboutVows />
            <AboutMoments />
            <AboutLife />
            <AboutChat />
        </>

    )
} export default About;