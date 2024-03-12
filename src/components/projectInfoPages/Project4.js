import React, { useState } from 'react';
import "./Project.css"

export default function Project4() {

        return (
            <div className="projectRoot">
            <h1 className='project_title'>Ai Sponge Clone</h1>

            <div className="project_box">

             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Basic info</h2><br/><br/>
             </div>
             <a className='text_project'>This project consists of multiple Nodejs scripts each serving their own
             purpose, mysql database, Unity project for the visuals and some C# code to manage the Unity side of things. Nodejs script for interacting 
             with twitch chat, so random people could add topics with !topic command directly to the show, another nodejs script for managing newly added
             topics that takes the users topic from the previous script and goes to a free chatgpt like website, types in the topic and waits for the website
             to generate a conversation then scrapes that response and puts it into the mysql database for Unity to access. For visuals i used videos of a spongebob minecraft mod
             looping in Unity, and some C# code to fetch the conversations from the database into Unity for subtitle processing and voice processing for
             wich i used Uberduck and their C# api. <br/> <br/> First i intended to do everything by hand from visuals to voices, but then i realized that it would 
             have been way too complicated and timeconsuming for me to do so i had to cut some corners, but still im impressed and happy with what i managed
             to create and learn along the way.</a>
             </div>

             <div className='project_child bottom'>
             <div className='title_div'>
             <h2 className='title'>Videos</h2><br/><br/>
             </div>
             <iframe id="video1" width="600" height="330" src="https://www.youtube.com/embed/HG-wah4BF7U?si=WPZ5wuE65MvVBwUc" title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <iframe id="video2" width="600" height="330" src="https://www.youtube.com/embed/AzLXrmjks-0?si=rWIAWMQzeJ2dQiMY" title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <iframe id="video3" width="600" height="330" src="https://www.youtube.com/embed/DWR0UzKkrF0?si=OMD0Bmft3jVOmBNU" title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             </div>
             </div> 
             </div>
        )
}