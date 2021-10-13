import React from 'react'
import './Home.css';
import Section from './Section';
 
function Home() {
    return (
        <div className= 'container'>

            <Section title="Model S " 
            description= "Order Online for Touchless Delivery "
            backImage="model-3.jpg"
            leftBtn="Custom Order"
            rightBtn="Existing inventory"
            />

            <Section title="Model Y " 
            description= "Order Online for Touchless Delivery "
            backImage="model-y.jpg"
            leftBtn="Custom Order"
            rightBtn="Existing inventory"
            />        
            
            <Section title="Model 3 " 
            description= "Order Online for Touchless Delivery "
            backImage="model-3.jpg"
            leftBtn="Custom Order"
            rightBtn="Existing inventory"
            />

            <Section title="Model X " 
            description= "Order Online for Touchless Delivery "
            backImage="model-3.jpg"
            leftBtn="Custom Order"
            rightBtn="Existing inventory"
            />


            <Section title="Lowest Cost Solar Panels in America " 
            description= "Money-back guarantee  "
            backImage="solar-panel.jpg"
            leftBtn="Order now"
            rightBtn="Learn more"
            />      

            <Section title="Solar for new roofs " 
            description= "Solar roofs costs Less than a New Roof plus solar Panels "
            backImage="solar-roof.jpg"
            leftBtn="Order now"
            rightBtn="Learn more"
            />  

            <Section title="Accessories " 
            description= ""
            backImage="accessories.jpg"
            leftBtn="shop now"
             
            />      
    

              </div>
       
    )
}

export default Home
