import React from "react";
import './App.css';
import Header from "./components/Header";
import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="items-container">
        <Item 
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          backgroundImg={SolarPanels}
          leftBtnText="ORDER NOW"
          rightBtnText="LEARN MORE"
          twoButtons="true"
          first        
        />
        <Item 
          title="Model S"
          desc="Starting at $69,420"
          backgroundImg={ModelS}
          leftBtnText="CUSTOM ORDER"
          rightBtnText="EXISTING INVENTORY"
          twoButtons="true"     
        />
        <Item 
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          backgroundImg={Model3}
          leftBtnText="CUSTOM ORDER"
          rightBtnText="EXISTING INVENTORY"
          twoButtons="true"   
        />
        <Item 
          title="Model X"
          desc="Order Online for Touchless Delivery"
          backgroundImg={ModelX}
          leftBtnText="CUSTOM ORDER"
          rightBtnText="EXISTING INVENTORY"
          twoButtons="true"   
        />
        <Item 
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          backgroundImg={ModelY}
          leftBtnText="CUSTOM ORDER"
          rightBtnText="LEARN MORE"
          twoButtons="true"   
        />
        <Item 
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg={SolarRoof}
          leftBtnText="ORDER NOW"
          rightBtnText="LEARN MORE"
          twoButtons="true"   
        />
        <Item 
          title="Accessories"
          desc=""
          backgroundImg={Accessories}
          leftBtnText="SHOP NOW"
          rightBtnText="LEARN MORE"  
        />
      </div>
    </div>
  );
}

export default App;
