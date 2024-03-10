import React, { useState } from 'react';
import "./projectOverviewTemplate.css"
import project1 from "../../pictures/project1.png"
import project2 from "../../pictures/project2.png"
import project3 from "../../pictures/project3.png"
import project4 from "../../pictures/project4.png"
import { useNavigate } from 'react-router';


export default function ProjectTemplate() {

    let navigate = useNavigate();

    function handleGithubClicked(project_id){
       if (project_id == 1){
        window.location.href=("https://github.com/sBaGeS/cabinProject");
       }
       else if (project_id == 2){
        window.location.href=("https://github.com/sBaGeS/travian_bot");
       }
    }

    function handleNavigation(project_id){
       if(project_id == 1){
        navigate("/project1");
       }
       if(project_id == 2){
        navigate("/project2");
       }
       if(project_id == 3){
        navigate("/project3");
       }
       if(project_id == 4){
        navigate("/project4");
       }
    }

        return (
            <div id="templateGrid">
                <div className='grid_item'>
                <a className="projectButton" onClick={e => handleNavigation(1)}><img src={project1} className="projectPhoto"/></a>
                <a onClick={e => handleNavigation(1)} className="project_title"><h2>Cabin reservation website</h2></a>
                <a>Savonia Code Academys final project. Website where users can rent other users cabins and other services.</a>
                <br/>
                <button className='githubButton' onClick={e =>handleGithubClicked(1)}>Project github page</button>
                </div>

                <div className='grid_item'>
                <a className="projectButton" onClick={e => handleNavigation(2)}><img src={project2} className="projectPhoto"/></a>
                <a onClick={e => handleNavigation(2)} className="project_title"><h2>Travian bot</h2></a>
                <a>A program made for browsergame travian, that can play the game for me.</a>
                <br/>
                <button className='githubButton' onClick={e =>handleGithubClicked(2)}>Project github page</button>
                </div>

                <div className='grid_item'>
                <a className="projectButton" onClick={e => handleNavigation(3)}><img src={project3} className="projectPhoto"/></a>
                <a onClick={e => handleNavigation(3)} className="project_title"><h2>Elorating system for CS:GO & CS2</h2></a>
                <a>Nodejs scripts for comparing the skill level of pro players based on publicly available and scraped data from hltv.org
                    and making predictions based on that.
                </a>
                <br/>
                <br/>
                <a>Not on github.
                </a>
                </div>

                <div className='grid_item'>
                <a className="projectButton" onClick={e => handleNavigation(4)}><img src={project4} className="projectPhoto"/></a>
                <a onClick={e => handleNavigation(4)} className="project_title"><h2>Ai sponge clone</h2></a>
                <a>Clone of the popular ai_sponge livestream on twitch. Spongebob cartoon with ai generated topics from stream chat and
                    with ai generated voice text to speech.
                </a>
                <br/>
                <br/>
                <a>Not on github.
                </a>
                </div>
            </div>
        )
}