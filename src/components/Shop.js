import React from 'react';
import "./Shop.css";
import ShopTopImages from "./ShopTopImages";
import ShopImageSlider from "./ShopImageSlider";
import ShopImageGallery from './ShopImageGallery';

function Shop() {
    return (
        <div className="shop">
            <ShopTopImages />
            <div className="white-shop-container">
                <div className="first-text-white-shop">
                    <p className="bestsellers-text">BEST SELLERS</p>
                    <p className="shopall-text">Shop All</p>
                </div>
                <div className="image-slider">
                    <ShopImageSlider />
                </div>
                <ShopImageGallery />
            </div>
        </div>
    );
}

export default Shop;
