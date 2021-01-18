import React, { useState, useEffect } from 'react'
import "./Shop.css";
import Cargomats from "../assets/Desktop-cargomats.jpeg";
import Mobileconnector from "../assets/Desktop-connectormobile.jpeg";
import Diecast from "../assets/Desktop-diecast.jpeg";
import RepairKit from "../assets/Desktop-repairkit.jpeg";
import Shirt from "../assets/Desktop-shirtsweat.jpeg";
import Weathermats from "../assets/Desktop-weathermats.jpeg";
import Xweathermats from "../assets/Desktop-xweathermats.jpeg";
import Wheelkit from "../assets/Desktop-wheelkit.jpeg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function ShopImageSlider(){

    const imageSlide = document.querySelector(".image-slide");
    const btnBack = document.querySelectorAll(".btn-slide back-btn");
    const btnFwards = document.querySelectorAll(".btn-slide fwards-btn");
    const carouselImages = document.querySelector(".carousel-img");
    const imgSize = 612.96;
    let imgCounter = 1;
    imageSlide.style.transform = 'translateX(' + (-imgSize * imgCounter) + "px)";
    const carouselFwards = () => {
        imgCounter ++;
        imageSlide.style.transform = 'translateX(' + (-imgSize * imgCounter) + "px)";
        imageSlide.style.transition = "transform 0.4s ease-in-out";
        console.log(imgCounter);
        if(imgCounter >= 8){
            imgCounter = 2;
            imageSlide.style.transition = "none";
            imageSlide.style.transform = 'translateX(' + (-imgSize * imgCounter) + "px)";
        }
    }
    const carouselBack = () => {
        imgCounter --;
        imageSlide.style.transform = 'translateX(' + (-imgSize * imgCounter) + "px)";
        console.log(imgCounter);
        if(imgCounter <= -1){
            imgCounter = 5;
            imageSlide.style.transition = "none";
            imageSlide.style.transform = 'translateX(' + (-imgSize * imgCounter) + "px)";
        }else{
            imageSlide.style.transition = "transform 0.4s ease-in-out";
        }
    }

    return (
        <>
            <div className="image-slider">
                <button className="btn-slide back-btn" onClick={carouselBack}><ArrowBackIosIcon /></button>
                <div className="image-slide">
                    <img className="carousel-img" id="lastagain" src={Diecast} alt="shop product img"/>  
                    <img className="carousel-img" src={Mobileconnector} alt="shop product img"/>
                    <img className="carousel-img" src={Cargomats} alt="shop product img"/>
                    <img className="carousel-img" src={Shirt} alt="shop product img"/>
                    <img className="carousel-img" src={Xweathermats} alt="shop product img"/>
                    <img className="carousel-img" src={Wheelkit} alt="shop product img"/>
                    <img className="carousel-img" src={Weathermats} alt="shop product img"/>
                    <img className="carousel-img" src={RepairKit} alt="shop product img"/>
                    <img className="carousel-img" src={Diecast} alt="shop product img"/>        
                    <img className="carousel-img" id="firstagain" src={Mobileconnector} alt="shop product img"/>                      
                </div>
                <button className="btn-slide fwards-btn" onClick={carouselFwards}><ArrowForwardIosIcon /></button>
            </div>
        </>
    )
}

export default ShopImageSlider;
