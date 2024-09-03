import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Style/Recipe.scss";

function Home() {
    return (
        <div className = "home-container'">
            <Navbar />
            <div className="home-text-section">
                <h1 className="primary-heading">
                    About Us
                </h1>
                <p className="primary-text">
                    Welcome to SolBakery, your dreamland delightful home baked delicious dessert! At SolBakery we provide the most tasty cakes that are only home-made from stretch. Our mission is to empower home bakers of all skill levels to create mouthwatering desserts without stress or hassle. 
                </p>
                <button className="secondary-button">
                    <link to= "/About">More info</link>
                </button>
            </div>
        <Footer />
        </div>
    );
};

export default Home;