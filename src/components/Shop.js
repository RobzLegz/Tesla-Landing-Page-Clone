import React from 'react';
import "./Shop.css";
import shop1stimg from "../assets/shop1stimg.jpg";
import shop2ndimg from "../assets/shop2ndimg.jpg";


var counter = 1;
setInterval(function(){
    const firstAutoplayImg = document.querySelector(".first-autoplay");
    const secondAutoplayImg = document.querySelector(".second-autoplay")
    firstAutoplayImg.classList.add("autoplay" + counter);
    secondAutoplayImg.classList.add("autoplay" + counter);
    counter +=1;
    if(counter > 2){
        counter = 0;
    }
}, 2000);


function Shop() {
    return (
        <div className="shop">
            <div className="shop-top-img-container">
                <img src={shop1stimg} alt="shop 1st image" className="shop-head-img first-autoplay"/>
                <img src={shop2ndimg} alt="shop 2nd image" className="shop-head-img second-autoplay"/>
            </div>
            <div className="white-shop-container">
                <div className="first-text-white-shop">
                    <p className="bestsellers-text">BEST SELLERS</p>
                    <p className="shopall-text">Shop All</p>
                </div>
            </div>
        </div>
    );
}

export default Shop;
