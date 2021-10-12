import React from 'react'
import './Home.css';
import Section from './Section';
 
function Home() {
    return (
        <div className= 'container'>
            <Section title="Model S " 
            description= "Order Online for Touchless Delivery "
            backImage="modelsvg"
            leftBtn="Custom Order"
            rightBtn="Existing inventory"
            />

            <Section title="Model Y " 
            description= "Order Online for Touchless Delivery "
            backImage="modelsvg"
            leftBtn="Custom Order"
            rightBtn="Existing inventory"
            />        
            
            <Section title="Model 3 " 
            description= "Order Online for Touchless Delivery "
            backImage="modelsvg"
            leftBtn="Custom Order"
            rightBtn="Existing inventory"
            />

            <Section title="Model X " 
            description= "Order Online for Touchless Delivery "
            backImage="modelsvg"
            leftBtn="Custom Order"
            rightBtn="Existing inventory"
            />


            <Section title="Model S " 
            description= "Order Online for Touchless Delivery "
            backImage="modelsvg"
            leftBtn="Custom Order"
            rightBtn="Existing inventory"
            />        </div>
       
    )
}

export default Home
