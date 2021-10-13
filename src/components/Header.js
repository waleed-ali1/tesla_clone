import React , {useState} from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';


function Header() {

    const [menuStatus , setMenuStatus] = useState(false);

    return ( 

        <div className="headerLayout">


        <div className= "teslaLogo">
            <img src="/images/logo.svg" alt=""/>
        </div>

        <div className="menu">     

            <a href="#">  Model S </a>
            <a href="#">  Model 3 </a>
            <a href="#">  Model X </a>
            <a href="#">  Model Y </a>
        </div>

        <div className="rightMenu">

            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
        
        </div>
        <div className="menuLogo">
        <MenuIcon  onClick={()=>setMenuStatus(true)}/>
        </div>
        


        <Nav show={menuStatus}>
        <div className="navbar"> 

            <div className="closeIcon">

            <CustomClose  onClick={()=>setMenuStatus(false)}/>

            </div>

        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">CyberTruck</a></li>
        <li><a href="#">Roadaster</a></li>


        </div>
        </Nav>

        </div>
    )
}


const Nav = styled.div`
        position: fixed;
        top:0;
        bottom: 0;
        right: 0;

        background: white ;
        width: 300px;
        z-index: 16;
        list-style: none;
        padding: 20px;
        display: flex;
        flex-direction: column;
        text-align: start;
         transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};

         transition : transform 0.2s ease-in;

`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

export default Header
