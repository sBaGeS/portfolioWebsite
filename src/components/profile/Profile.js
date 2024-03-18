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
             <a className="text">Savonia Code Academy. Savonia University of Applied Sciences, Kuopio 2020.</a>
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
             <a className="text">Enthusiastic and dedicated individual with a profound passion for technology, particularly in the domain of video games. 
             Skilled in coding and actively engaged in crafting personal projects with most of them centered around gaming, more about those in the projects section. 
             Embraces honesty and integrity, constantly driven to expand knowledge and skills.
             Diagnosed with Asperger's Syndrome, embracing unique perspectives and approaches to problem-solving.
             <br/><br/>
             My hobbies include playing videogames such as Supremacy1914, Baldurs Gate3 and CS2 with my friends and sometimes streaming while doing that.
             I also like to watch a lot tv-series and movies and youtube. When it comes to movies my favourite gategories are scifi and action, my favourite 
             tv-series so far: The Expanse, and what comes to youtube i watch whatever i feel like or need at the moment sometimes thats a spesific coding tutorial
             or other tutorial to solve a problem im working on at the moment, sometimes thats listening to music, gaming related videos, youtube creator drama,
             true crime, documentaries, tech reviews, educational videos to learn about new interesting topics and so on. I feel like youtube has so much to
             offer for me in a very broad spectrum from simple entertainment to tutorials and learning about new interesting things to being kept up to date with
             whats happening around the world.
             </a>

             </div>
            </div>
            </div>
        )
}