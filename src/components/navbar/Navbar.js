import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import logo from "../../pictures/logo.png"
import { useNavigate } from 'react-router';
import "./Navbar.css"
import { BsFillPersonFill} from "react-icons/bs";
import { ImHome3, ImStarFull} from "react-icons/im";

export default function Navbar() {
    let navigate = useNavigate();

    function handleProjectClick(){
        navigate("/all_projects");
    }

    function handleProfileClick(){
        navigate("/profile");
    }

    function handleHomeClick(){
        navigate("/");
    }

        return (
            <div>
             <Toolbar className="navbar">
                <button onClick={handleHomeClick} className="button" id="homeButton"> <ImHome3 className="iconSmall"/>Homepage</button>
                    <img src={logo} id="logo"/>
                    <h1 id="title">Portfolio</h1>
                    <button onClick={handleProfileClick} className="button" id="profileButton"> <BsFillPersonFill className="iconSmall"/>Profile</button>
                    <button onClick={handleProjectClick} className="button" id="projectButton"> <ImStarFull className="iconSmall"/>Projects<ImStarFull className="iconSmall"/></button>
                </Toolbar>
            </div>
        )
}