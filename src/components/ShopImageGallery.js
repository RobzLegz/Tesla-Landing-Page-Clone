import React from 'react'
import "./Shop.css";
import Charger from "../assets/charging-gen3.jpeg";
import LifestyleCar from "../assets/lifestylecarimg.jpeg";
import MensApparel from "../assets/mensapparel.jpeg";
import ModelYAccessories from "../assets/model_yaccesories.jpeg";
import Model3Accessories from "../assets/model3accesories.jpeg";
import ModelSAccessories from "../assets/modelsaccesories.jpeg";
import ModelXAccessories from "../assets/modelxaccesories.jpeg";
import WomensApparel from "../assets/womensapparel.jpeg";

function ShopImageGallery() {
    return (
        <div className="shop-gallery">
            <div className="gallery-img full-gallery-img">
                <img className="full-gallery-img" src={ModelSAccessories} alt="tesla gallery image"/>
                <p className="black-about-image right-about-img-text about-gallery-img">Model S Accessories</p>
            </div>
            <div className="two-img-container">
                <div className="gallery-img half-gallery-img first-half">
                    <img className="half-gallery-img" src={Model3Accessories} alt="tesla gallery image"/>
                    <p className="white-text-gallery model-gallery-text">Model 3 Accessories</p>
                </div>
                <div className="gallery-img half-gallery-img second-half">
                    <img className="half-gallery-img" src={ModelXAccessories} alt="tesla gallery image"/>
                    <p className="white-text-gallery model-gallery-text">Model X Accessories</p>
                </div>
            </div>
            <div className="gallery-img full-gallery-img">
                <img className="full-gallery-img" src={ModelYAccessories} alt="tesla gallery image"/>
                <p className="black-about-image about-gallery-img">Model Y Accessories</p>
            </div>
            <div className="three-img-container">
                <div className="gallery-img">
                    <img className="charger-image" src={Charger} alt="tesla gallery image"/>
                    <p className="charger-text black-about-image">Charging</p>
                </div>
                <div className="two-images-ontop">
                    <div className="top-images">
                        <img className="first-img-ontop" src={MensApparel} alt="tesla gallery image"/>
                        <p className="white-text-gallery mens-apparel-text">Men's Aparel</p>
                    </div>
                    <div className="top-images">
                        <img className="second-img-ontop" src={WomensApparel} alt="tesla gallery image"/>
                        <p className="black-about-image womens-apparel-text">Women's Apparel</p>
                    </div>
                </div>
            </div>
            <div className="gallery-img full-gallery-img">
                <img className="full-gallery-img" src={LifestyleCar} alt="tesla gallery image"/>
                <p className="black-about-image about-gallery-img">Lifestylesheet</p>
            </div>
        </div>
    )
}

export default ShopImageGallery
