import React, { useState } from 'react';
import "./navBar.css";
import "../../App.css";

function Navbar(){
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }
    return(
        <nav>
            <div className="menuIcon" onClick={handleClick}>
                {clicked 
                ?   <i className="material-icons menu">close</i>
                :   <i className="material-icons menu">dehaze</i>
                }
            </div>
            <div class="rectangle79">
                <li class="thisInterior">THIS INTERIOR</li>
            </div>
            <ul class={clicked ? "navLinks active" : "navLinks"}>
                <li><a href="#" class="home">Home</a></li>
                <li><a href="#" class="coll">Collection</a></li>
                <li><a href="#" class="about">About</a></li>
                <li><a href="#" class="contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;