import React, { useState } from 'react';
import "./Project.css"
import kuva1 from "../../pictures/project3_pic1.png"
import kuva2 from "../../pictures/project3.png"
import kuva3 from "../../pictures/project3_pic3.png"
import kuva4 from "../../pictures/project3_pic4.png"

export default function Project3() {

        return (
            <div className="projectRoot">
            <h1 className='project_title'>Elorating system for CS2 pro players</h1>   
            <div className="project_box">


             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Basic info</h2><br/><br/>
             </div>
             <a className='text_project'>
This project consists of a MySQL database where data is stored, as well as JavaScript files which are separate Node.js scripts run through the command prompt or PowerShell, each serving its own purpose such as fetching data from the internet, saving it, retrieving data from the database, or modifying it. The main functionalities are detailed in the following paragraph. <br/> <br/> 
I consider this project mostly complete except for the formula used to update Elo ratings, which might still needs some adjustments as I feel the predictions are not accurate enough. It could aswell just be the case that i dont have enough 
data yet for fully accurate predictions, im personally starting to lean more this way rather than it being the formulas problem.  <br/> <br/>
             
The goal of the project is to predict future CS2 matches accurately enough to make money, either by betting on the matches myself or by selling the predictions for other people to use.
             </a>

             <div className="picture_grid">
             <div>
           
             <img src={kuva1} className="picture"></img>

             <a className="text_project">Prediction for Metizport vs Spirit game logged using powershell. 
             <br/><br/><a className="text_project" href="https://www.hltv.org/matches/2370253/metizport-vs-spirit-blast-premier-spring-showdown-2024">Link to the hltv.org matchpage</a>
             </a>
             </div>

             <div>
   
             <img src={kuva2} className="picture"></img>
             <a className="text_project">
The image shows the player table of the database. In the "Rating" column, the ratings of the player for each map have been summed up, 
and the rows are sorted accordingly. In other words, the image displays the best players of the game according to my rating system, 
sorted by their overall rating at the time the picture was taken at 10.03.2024
             </a>
             </div>
             </div>

             </div>

             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Most important functionalities</h2><br/><br/>
             </div>
             <a className="text_project">The data scraping from the web was implemented using Puppeteer, a Node.js module that provides a high-level 
             control over headless Chrome or Chromium browser. Puppeteer can be used for tasks such as web scraping, automated 
             testing, and taking screenshots, pressing buttons etc...<br/><br/>

The "index.js" script under the "Testing" directory is used to initially scrape and store all the previously played gameresults.
The "predictor.js" script under the "Testing" directory is used for recalculating all ratings and testing them, which is necessary when I modify the formula used for calculating ratings. Essentially, this script first clears most of the tables in the database, including the player table, team table, and prediction table. Then, it iterates through the "gamehistory" table row by row.

For each row, the script adds necessary teams and players if they don't already exist and proceeds to update the players' map-specific ratings based on the results. When the script reaches a predefined point in the processing of the game history before changing the ratings, it makes a prediction of the match outcome and records the prediction along with the actual result in the "predictions" table for later analysis to determine the accuracy of the predictions.

Once the entire game history has been processed, the script calculates the mean squared error (MSE) for the predictions. Then, it repeats the process, but instead of using the actual results, it randomly generates outcomes based on the probabilities derived from the predictions. Finally, it compares the difference in MSE values between these two scenarios.
<br/><br/> 
The "update.js" script under the "Datascraper" directory performs almost the same tasks as the combination of the two scripts mentioned earlier. The main differences are that instead of processing the entire game history, it only adds yesterday's matches to the "gamehistory" table. Additionally, it doesn't clear the tables, so ratings are updated on top of the existing ones, but only for the newly added matches. Moreover, it doesn't analyze new predictions in any way. I use this script daily to keep the database and ratings up to date.

The "predictor.js" script under the "Datascraper" directory is used almost daily for predicting the outcomes of new matches. The script navigates to the "hltv.org/matches" page using Puppeteer and goes through all the new matches that haven't been played yet. It calculates predictions for these matches based on the player ratings stored in the database.
             </a>

             <div className="picture_grid">
             <div>
           
             <img src={kuva3} className="picture"></img>

             <a className="text_project">
The picture shows code from the Datascraper's predictor.js script. First, the code starts Puppeteer, which is a Chromium browser that can be controlled via code. Next, the script opens a blank page and sets the browser's user agent to match my own Chrome browser. Then it navigates to the hltv.org/matches page and finds all the links on the site. After that, the links are parsed so that only the ones I need remain, which are the links to all the new matches. Then, all the remaining links are looped through, first navigating to the link in the browser, after which the script scrapes the page for the names of the teams and checks if they exist in my database, and if not, adds them there. After this, much more is done, but I couldn't fit it all into the picture as the script is over 800 lines long in its entirety.
             </a>
             </div>

             <div>
   
             <img src={kuva4} className="picture"></img>
             <a className="text_project">Database model of the project.
             </a>
             </div>
             </div>

             </div>

             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Problems & Solutions</h2><br/><br/>
             </div>
             <a className="text_project">The biggest and ongoing problem in this project is the formula used to update ratings. It has been a challenge from the beginning because I didn't have a ready-made model for it. Instead, I had to rely on a trial and error approach, adjusting the weighting of different factors and the k-factor of the Elo rating system (update rate) based on intuition, and then testing its accuracy.

Another potential problem is the method used to test the accuracy of the formula. Testing probabilities isn't straightforward, and I've experimented with various mathematical functions as well as ones I've created myself before settling on using mean squared error.
             </a>
             </div>

             
             <div className='project_child bottom'>
             <div className='title_div'>
             <h2 className='title'>Videopresentation</h2><br/><br/>
             </div>
             <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/OK6OFznj4Zo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </div>

            </div>
            </div>
        )
}