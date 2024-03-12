import React, { useState } from 'react';
import "./Profile.css"
import {AiOutlineFileWord, AiOutlineFileExcel, AiOutlineHtml5} from "react-icons/ai";
import {FaRegFilePowerpoint, FaNodeJs, FaReact, FaUnity, FaGitAlt, FaPhp} from "react-icons/fa";
import {SiJavascript, SiCsswizardry, SiMysql} from "react-icons/si";


export default function Profile() {

        return (
            <div id="profileRoot">
            <div className="float-container">
             <div id="koulutus" className='float-child'>
             <h2 id='title_koulutus'>Education</h2>
             <a className="text"> Cybersecurity. South-Eastern Finland University of Applied Sciences, Kotka 2023-2026.</a>
             <br/>
             <a className="text"> Gameprogramming. South-Eastern Finland University of Applied Sciences, Kotka 2022-2023. Changed my
             degree to Cybersecurity after studying 1 year of gameprogramming.</a>
             <br/>
             <a className="text">Savonia Code Academy. Savonia university of applied sciences, Kuopio 2020.</a>
             <br/>
             <a className="text">ICT-Technician. Savo vocational school, Kuopio 2019.</a>
             </div>
             <div id="tekninen_osaaminen" className="float-child">
             <h2 id='title_osaaminen'>Technical skills</h2>

             <div id="osaaminen_gridContainer">

            <div className='osaaminen_item'>
            <h4><SiJavascript/>Javascript</h4>
            <small>Excellent</small>
            </div>

            <div className='osaaminen_item'>
            <h4><FaNodeJs/>Nodejs </h4>
            <small>Excellent</small>
            </div>

            <div className='osaaminen_item'>
            <h4><FaRegFilePowerpoint/>Powerpoint</h4>
            <small>Good</small>
            </div>

            <div className='osaaminen_item'>
            <h4><SiCsswizardry/>CSS</h4>
            <small>Good</small>
            </div>

            <div className='osaaminen_item'>
            <h4><AiOutlineHtml5/>HTML</h4>
            <small>Good</small>
            </div>

            <div className='osaaminen_item'>
            <h4><SiMysql/>SQL</h4>
            <small>Good</small>
            </div>
  
            <div className='osaaminen_item'>
            <h4><FaReact/>React</h4>
            <small>Good</small>
            </div>
            
            <div className='osaaminen_item'>
            <h4><AiOutlineFileWord/>Word</h4>
            <small>Decent</small>
            </div>

            <div className='osaaminen_item'>
            <h4><FaUnity/>Unity</h4>
            <small>Decent</small>
            </div>

            <div className='osaaminen_item'>
            <h4><FaGitAlt/>Git</h4>
            <small>Decent</small>
            </div>
      
            <div className='osaaminen_item'>
            <h4>C#</h4>
            <small>Basics</small>
            </div>

            <div className='osaaminen_item'>
            <h4>C++</h4>
            <small>Basics</small>
            </div>

            <div className='osaaminen_item'>
            <h4><FaPhp/>PHP</h4>
            <small>Basics</small>
            </div>

            <div className='osaaminen_item'>
            <h4><AiOutlineFileExcel/>Excel</h4>
            <small>Basics</small>
            </div>

            </div>
                
             </div>
             <div id="harrastukset" className='float-child'>
             <h2 id='title_harrastukset'>About myself</h2>
             <a className="text">I like computers and It-stuff, i spend most of
             my sparetime on my computer.<br/><br/>I watch a lot of youtube, tv-series and movies, play games like Supremacy1914,
             Baldurs Gate3 and CS2 and code my own videogame related projects.
             <br/><br/>
             I consider myself an introvert and socially akward to some degree, as i have been diagnosed with asperger.
             </a>

             </div>
            </div>
            </div>
        )
}