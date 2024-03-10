import React, { useState } from 'react';
import "./Project.css"

export default function Project4() {

        return (
            <div className="projectRoot">
            <h1 className='project_title'>Projektin nimi</h1>

            <div className="project_box">

             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Projektin kuvaus</h2><br/><br/>
             </div>
             <a className='text_project'>projektin kuvaus</a>
             </div>

             <div className='project_child'>
                
             <div className='title_div'>
             <h2 className='title'>Tehtävien Kuvaus</h2><br/><br/>
             </div>
             <a className="text_project">tehtävien kuvaus</a>
             </div>

             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Tärkeimmät toiminnallisuudet</h2><br/><br/>
             </div>
             <a className="text_project">tietoa toiminallisuuksista</a>
             </div>

             <div className='project_child bottom'>
             <div className='title_div'>
             <h2 className='title'>Ongelmat ja ratkaisut</h2><br/><br/>
             </div>
             <a className="text_project">ongelmat ja ratkaisut</a>
             </div>

            </div>
            </div>
        )
}