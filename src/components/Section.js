import React from 'react'
import './Section.css';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

// const btn = () =>{

//     if (this.props.rightBtn && this.props.leftBtn){

//         return(
            
//                 <div className='rightButton'>

//                 {this.props.rightBtn}
//                 </div>
           
//         )
//     }
// }

function Section(props) {

   
    return (
        <Layout bgImage={props.backImage} >
         
         <Fade bottom>
          
        
            <div className="ItemTexts">
                <h1>{props.title}</h1>
                <p> {props.description}</p>

            </div>

            </Fade>


            <div className="buttons">


            <Fade bottom>

            <div className = 'buttonGroup'>

                <div className='leftButton'>
                        {props.leftBtn}
                    </div> 

                 
                {props.rightBtn && 
                    <div className='rightButton'>
                        {props.rightBtn}
                    </div> 
                    }
            </div>

            </Fade>

            
            <div className="arrowLogo">
          <KeyboardArrowDownIcon/>
                </div>

                 </div>
        
        </Layout>


    )
}

export default Section


const Layout = styled.div`
        width: 100vw;
        height: 100vh;
       
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-image: ${props => `url("/images/${props.bgImage}")` }

`
