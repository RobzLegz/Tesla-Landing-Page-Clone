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
import React, {useEffect} from "react";

function ShopImageSlider(){

    const imageSlide = document.querySelector(".image-slide");
    const btnBack = document.querySelector(".back-btn");
    const btnFwards = document.querySelector(".fwards-btn");
    const imgSize = 612.96;
    let imgCounter = 1;
    imageSlide.style.transform = 'translateX(' + (-imgSize * imgCounter) + "px)";
    const carouselFwards = () => {
        imgCounter ++;
        imageSlide.style.transform = 'translateX(' + (-imgSize * imgCounter) + "px)";
        imageSlide.style.transition = "transform 0.4s ease-in-out";
        console.log(imgCounter);
        if(imgCounter >= 8){
            imgCounter = 0;
            imageSlide.style.transition = "none";
            imageSlide.style.transform = 'translateX(' + (-imgSize * imgCounter) + "px)";
        }
    }
    btnFwards.addEventListener("click", function(){
        carouselFwards();
    })
    btnBack.addEventListener("click",function(){
        imgCounter --;
        imageSlide.style.transform = 'translateX(' + (-imgSize * imgCounter) + "px)";
        console.log(imgCounter);
        if(imgCounter <= -1){
            imgCounter = 6;
            imageSlide.style.transition = "none";
            imageSlide.style.transform = 'translateX(' + (-imgSize * imgCounter) + "px)";
        }else{
            imageSlide.style.transition = "transform 0.4s ease-in-out";
        }
    })

    return (
        <>
            <div className="image-slider">
                <button className="btn-slide back-btn"><ArrowBackIosIcon /></button>
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
                <button className="btn-slide fwards-btn"><ArrowForwardIosIcon /></button>
            </div>
        </>
    )

}

export default ShopImageSlider;
