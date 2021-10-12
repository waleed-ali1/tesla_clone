import React from 'react'
import './Section.css';

function Section(props) {
    return (
        <div className= 'layout'>
            
            <div className="ItemTexts">
                <h1>{props.title}</h1>
                <p> {props.desciption}</p>

            </div>


            <div className="buttons">


            <div className = 'buttonGroup'>
                <div className='leftButton'>
                        Custom order
                    </div>             
                        
                <div className='rightButton'>

                    Existing invetory
                </div>
            </div>

            <div className="arrow">
             <img src="C:\Users\onibarca\Desktop\Tesla\tesla_clone\public\images\down-arrow.svg"/>
                 </div>

                 </div>
        </div>


    )
}

export default Section
