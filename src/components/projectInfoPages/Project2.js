import React, { useState } from 'react';
import "./Project.css"
import kuva1 from "../../pictures/project2_pic1.png"
import kuva2 from "../../pictures/project2_pic2.png"

export default function Project2() {

        return (
            <div className="projectRoot">
            <h1 className='project_title'>Travian bot</h1>

            <div className="project_box">

             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Basic info</h2><br/><br/>
             </div>
             <a className='text_project'>The bot I created for the web browser game Travian, designed to play the game on my behalf, is entirely my own work and intended for personal use. This is evident in the absence of a plan and project schedule. I didn't bother creating a plan because I didn't see it as necessary. There wasn't a specific timeline for this project; progress depended on how much time and motivation I had for working on it, with motivation strongly tied to my playing of Travian. When I stopped playing Travian, I also stopped working on this project.

The main goal of this project was to reduce the time I spent on Travian without falling behind other players. Additionally, I wanted to challenge myself and answer the question in my mind: Do I have the skills to create something like this?

In my opinion, this project remains unfinished. The feature for constructing buildings was partially completed, and there were numerous additional features that could have been added to the bot. There was also much to be done on the visual side, as I primarily focused on functionality.






             </a>
             </div>

             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Most important functionalities</h2><br/><br/>
             </div>
             <a className="text_project">
This bot is coded using the Electron framework, which utilizes HTML, CSS, and JavaScript. Additionally, it uses Puppeteer, a JavaScript module that provides a programmable Chromium browser, allowing tasks such as web scraping and, in this case, simulating button clicks on web pages. With Electron, I made this bot into an executable .exe Windows application.
            <br/><br/>
             
The bot needs to be provided with two times in minutes (minimum and maximum), the numbers of farm lists, the base URL of the game server, the player's username, and password. After that, you can add buildings to the construction queue. Once you start the bot by pressing the start button, it logs into the user's account, sends farm lists, and starts constructing the next building in the construction queue if possible. Then, the bot randomly selects a number between the minimum and maximum set by the user and waits for that amount of time in minutes. After the waiting period, the process repeats: sending farm lists, construction, generating a new random waiting time, and waiting again.
             </a>

             
             <div className="picture_grid large">
             <div>
           
             <img src={kuva1} className="picture"></img>

             <a className="text_project">
In this image, you can see the entire user interface of the bot. In the leftmost separate window, buildings are added to the construction queue for the bot, which are visible in the tasks box in the middle main window. I added a few construction commands there as an example. In the main window in the middle, there are buttons at the top to open those other windows, start and stop the bot, and exit the bot by closing it completely. The "State" section shows the current status of the bot, whether it's on or stopped. Below the "Logs" section, you can see what the bot has been doing, and below the "Tasks" section, you can see the construction queue given to the bot. In the rightmost window, the user's information is entered so that the bot can function. The useragent box is copied from another browser's useragent to make the bot seem less bot-like, reducing the risk of detection, as using bots is prohibited in Travian's terms of service. The "Server" field is for the URL of the server's login page. The "Username" and "Password" fields are self-explanatory. In the "Farmlists" field, the numbers of farm lists are entered so that the bot can send them. The "Interval" fields are for the minimum and maximum intervals at which the bot should play, allowing the bot to randomly generate a new waiting time at each waiting point. This is done for the same reason as the useragent field. From the "Headless" section, the user can choose whether to see the browser controlled by the bot or keep it hidden as a background task. By pressing the "Select" button, the user still needs to select chrome.exe, otherwise, the bot won't work, explained better in the "Problems and Solutions" section below. The "Save" button saves the information to a separate JSON file so that the same information doesn't have to be entered again when the bot is opened, and the bot's construction queue is also saved to a separate JSON file for the same reason.





             </a>
             </div>

             </div>

             <div className="picture_grid large">
             <div>
           
             <img src={kuva2} className="picture"></img>

             <a className="text_project">
Here are my old user credentials saved by the bot in the config.json file, except for the password which I removed before taking the picture for security reasons. This bot isn't very secure, at least in the sense that the user's password is stored in plain text along with other data in a JSON file, making it easily visible. Without providing the password to the bot, it obviously can't function, but in hindsight, it might have been wiser not to store the password at all and have the bot prompt the user for it each time it's opened.
             </a>
             </div>

             </div>

             </div>

             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Problems & Solutions</h2><br/><br/>
             </div>
             <a className="text_project">A small issue initially was with using Electron due to lack of experience. I was able to overcome this by following YouTube tutorials. Additionally, another issue that stuck in my mind from this project was as follows: when I ran the bot through the command prompt or PowerShell, everything worked as expected, but when I converted it to an executable (exe) file, the bot stopped functioning. This was because Electron somehow didn't work properly with the Chromium browser included in Puppeteer. This can be fixed by making Puppeteer use Chrome instead of Chromium. I found the solution to this problem by searching online, and I still have the link to the article that explains the problem and solution in more detail
             
             Here is the link to that article. <a className="text_project" href="https://medium.com/@alexanderruma/using-node-js-puppeteer-and-electronjs-to-create-a-web-scraping-app-with-a-desktop-interface-668493ced47d">https://medium.com/@alexanderruma/using-node-js-puppeteer-and-electronjs-to-create-a-web-scraping-app-with-a-desktop-interface-668493ced47d</a>
             </a>
             </div>

             <div className='project_child bottom'>
             <div className='title_div'>
             <h2 className='title'>Videopresentation</h2><br/><br/>
             </div>
             <a className="text_project">I haven't created a video presentation for this project because I feel there isn't enough to showcase, and additionally, I would need a Travian game account with a purchased Gold Club for farm lists for presentation purposes.
             </a>
             </div>


            </div>
            </div>
        )
}