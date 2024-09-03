import React from "react";
import Navbar from "./Navbar";
import OreoPots from "../Images/oreo-pots.jpg";

function About() {
    return (
        <>
            <Navbar />
            <div className="about-section-image-container">
                <img src={OreoPots} alt="Oreo Pots" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">Sweetness for your soul! come now </h1>
                <p className="primary-text">
                    At SolBake our journey begins with a sweet passion for baking and divine smells that welcome you into a beloved bakery.
                </p>
                <p className="primary-text">
                    Welcome to our sweet world of homemade scrumptious treats!
                </p>

                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                </div>
            </div>
        </>
    );
};

export default About;
