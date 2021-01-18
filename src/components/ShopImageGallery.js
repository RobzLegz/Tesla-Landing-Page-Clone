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
            </div>
            <div className="two-img-container">
                <div className="gallery-img half-gallery-img first-half">
                    <img className="half-gallery-img" src={Model3Accessories} alt="tesla gallery image"/>
                </div>
                <div className="gallery-img half-gallery-img second-half">
                    <img className="half-gallery-img" src={ModelXAccessories} alt="tesla gallery image"/>
                </div>
            </div>
            <div className="gallery-img full-gallery-img">
                <img className="full-gallery-img" src={ModelYAccessories} alt="tesla gallery image"/>
            </div>
            <div className="three-img-container">
                <div className="gallery-img">
                    <img className="charger-image" src={Charger} alt="tesla gallery image"/>
                </div>
                <div className="two-images-ontop">
                    <div className="top-images">
                        <img className="first-img-ontop" src={MensApparel} alt="tesla gallery image"/>
                    </div>
                    <div className="top-images">
                        <img className="first-img-ontop" src={WomensApparel} alt="tesla gallery image"/>
                    </div>
                </div>
            </div>
            <div className="gallery-img full-gallery-img">
                <img className="full-gallery-img" src={LifestyleCar} alt="tesla gallery image"/>
            </div>
        </div>
    )
}

export default ShopImageGallery
