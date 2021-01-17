import React from 'react';
import "./Shop.css";
import shop1stimg from "../assets/shop1stimg.jpg";

function Shop() {
    return (
        <div>
            <div className="shop-top-img-container">
                <img src={shop1stimg} alt="shop 1st image" className="shop-head-img"/>
            </div>
        </div>
    );
}

export default Shop;
