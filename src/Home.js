import HomeCouplePics from "./Component/HomeCouplePics";
import HomeServices from "./Component/HomeServices";
import HomeTestimonials from "./Component/HomeTestimonials";
import HomePortfolio from "./Component/HomePortfolio";
import HomeSnapshots from "./Component/HomeSnapshots";
import HomeTools from "./Component/HomeTools";
import HomeFAQ from "./Component/HomeFAQ";
import Footer from "./Component/Footer";
import Header from "./Header";
import HomeBlog from "./Component/HomeBlog";

function Home() {
    return (
        <>
            <div className="hero-banner">

                <img src="Logo-1.png" ></img>
                <div className="main">
                    <div>
                        <p style={{
                              fontFamily: "Elsie Swash Caps", 
                             fontStyle:" normal",
                            color: "#E6C365",
                            fontSize: '60px',
                        }}>Shaadiyaan Banti Hain Yaadon se...</p><br></br>
                        <p style={{

                            color: "#FFF5D9",
                            FontFamily: "Akatab",
                            Weight: "400",
                            fontSize: "38px",
                            LineHeight: "137%",

                        }}> Let's Make Yours Legendary </p>
                        <p style={{
                            color: "#FFF5D9",
                            Font: "Akatab",
                            Weight: "400",
                            fontSize: "18px",
                            LineHeight: "135%",

                        }}>Luxury meets laughter, chaos choreoghraphed- beautiful weddings across Indore, Bhopal & Jabalpur.</p>
                        <br />
                        <button style={{ backgroundColor: "#D7A10F", color:"white",borderRadius: "25px", padding: "5px 25px",border:"none",marginRight:"10px",fontSize:"16px" }}>Plan My Wedding</button> 
                        <button style={{ backgroundColor: "white",border:"none", borderRadius: "25px", padding: "5px 25px", fontSize:"16px" }}>Talk to our Planner</button><br />
                        <img src="Bride.png" className="bridalImage" />
                    </div>
                </div>
               
            </div>
            <HomeCouplePics />
            <HomeServices/>
            <HomeTestimonials />
            <HomePortfolio />
            <HomeSnapshots />
            <HomeTools/>
            <HomeFAQ />
            <HomeBlog/>
           

        </>
    )

}
export default Home;