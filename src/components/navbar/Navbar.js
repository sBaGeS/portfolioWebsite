import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import logo from "../../pictures/logo.png"
import { useNavigate } from 'react-router';
import "./Navbar.css"
import { BsFillPersonFill} from "react-icons/bs";
import { ImHome3, ImStarFull} from "react-icons/im";

export default function Navbar() {
        return (
            <div>
             <Toolbar className="navbar">
                <button className="button" id="homeButton"> <ImHome3 className="iconSmall"/><a href="#/">Homepage</a></button>
                    <img src={logo} id="logo"/>
                    <h1 id="title">Portfolio</h1>
                    <button className="button" id="profileButton"> <BsFillPersonFill className="iconSmall"/><a href="#/profile">Profile</a></button>
                    <button className="button" id="projectButton"> <ImStarFull className="iconSmall"/><a href="#/all_projects">Projects</a><ImStarFull className="iconSmall"/></button>
                </Toolbar>
            </div>
        )
}