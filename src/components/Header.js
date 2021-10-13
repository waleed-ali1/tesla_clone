import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
function Header() {
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
        <MenuIcon/>
        </div>
        
        <div className="navbar">
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">CyberTruck</a></li>
        <li><a href="#">Roadaster</a></li>


        </div>

        </div>
    )
}

export default Header
