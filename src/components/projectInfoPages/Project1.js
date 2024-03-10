import React, { useState } from 'react';
import "./Project.css"
import kuva1 from "../../pictures/project1.png"
import kuva2 from "../../pictures/project1_pic1.png"
import kuva3 from "../../pictures/project1_pic3.png"
import kuva4 from "../../pictures/project1_pic4.png"
import kuva5 from "../../pictures/project1_pic5.png"
import kuva6 from "../../pictures/project1_pic2.png"
import kuva7 from "../../pictures/project1_pic6.png"

export default function Project1() {

        return (
            <div className="projectRoot">
            <h1 className='project_title'>Cabin reservation website</h1>

            <div className="project_box">

             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Basic info</h2><br/><br/>
             </div>
             <a className='text_project'>This is a fullstack website, so there are three gategories
             that are frontend aka what the user sees aka the website, database for storing and fetching all the data,
             and a backend rest api for communicating with the database. There were supposed to be three people involved in this
             project in total so me and two other people, although one of us didnt contribute much and dropped out quite quickly.<br/> <br/>
             The project was split into six two week long sprints. We made a starting plan
             on Azure Devops wich detailed all functionalities we need and whos responsibility is to do what and when. We were free to choose
             what technologies we wanted to use and we went with React + NodeJs + Mysql.</a>

             <div className="picture_grid">
             <div>
           
             <img src={kuva1} className="picture"></img>

             <a className="text_project">Homepage view as a logged in Admin user.
             </a>
             </div>

             <div>
   
             <img src={kuva2} className="picture"></img>
             <a className="text_project">Database model of the project.
             </a>
             </div>
             </div>

             </div>

             <div className='project_child'>
                
             <div className='title_div'>
             <h2 className='title'>Tasks</h2><br/><br/>
             </div>
             <a className="text_project">I don't remember exactly which functionalities I have implemented because I no longer have access to the 
             project plan, and we didn't divide the tasks so strictly that, for example, one of us would do the backend completely and the other the 
             frontend. This was because we wanted both of us to have the opportunity to work on both the frontend and the backend.

Roughly speaking, here is my contribution: My focus was more on the backend because I found and still find it more comfortable and easier than 
doing the frontend. So, roughly speaking, about 80% of the project's backend is my work, including user authentication on the backend, retrieving, 
editing, adding, and deleting data from the database, and of course, most of the routes and methods for communicating with the database.
In addition to this, I helped a little with the frontend, creating about half of the admin pages, including the page where the admin can 
view user data, search for users using various criterias, edit user data, and delete users. We designed the database model together.</a>

             <div className="picture_grid">
             <div>
           
             <img src={kuva5} className="picture"></img>

             <a className="text_project">The picture shows the admin component I mentioned earlier for managing user data. You 
             can filter the data using different criteria, and the input fields for these criteria are visible above the data table. 
             Additionally, when scrolling the data table to the right, there are three additional buttons to the right of the Edit button:
             Delete, which deletes the user; Cabins, which shows the user's cabins and Reservations, which shows the user's reservations. 
             Due to the width of the table, it doesn't fit entirely into one image.
             </a>

             <img src={kuva7} className="picture"></img>

            <a className="text_project">
                
In this image, you can see the same test data as in the previous image, but this time extracted directly 
from the database using MySQL Workbench. Pay attention to the password field, it's a mess of characters, and each 
user has a different password even though in this example, they are all set to "Password123". The passwords are properly hashed and salted incase
there is a database leak.
            </a>
             </div>

             <div>
   
             <img src={kuva6} className="picture"></img>
             <a className="text_project">The picture shows the project's frontend App.js file, which contains all the project's routes 
             and components and manages which component is displayed to the user at any given time.
             </a>
             </div>
             </div>

             </div>

             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Most important functionalities</h2><br/><br/>
             </div>
             <a className="text_project">The main functionalities of the project for users include the ability to register on the site and then log in. Once logged in, users can add their cabins to the site for others to rent, browse and book cabins from other users, edit their personal information and cabin details, view and edit their cabin reservation information, and reserve additional services added by the site administrators.

In addition to users, the site also has an admin role intended for site management, which can be assigned to any user. Users with the admin role have additional functionalities beyond those mentioned above, including searching, editing, and deleting user information, cabins, and reservations. Furthermore, admins can add, edit, and delete additional services and manage user billing.

This project has been implemented with a focus on security. At least the following aspects have been considered for the site's security:

The backend is implemented so that users only have access to data and methods intended for them. This applies to all data manipulation operations: addition, editing, deletion, and retrieval. Only users with the admin role have unrestricted access. The same applies to the frontend, where users only have access to pages intended for them.

User input is never sent raw to the database. Additionally, the database root user is not used; the project has its own database user with limited permissions tailored to the project's needs.

User passwords are not stored in plaintext in the database but rather properly hashed and salted.

These measures ensure that the project is as secure as possible, protecting user data and ensuring proper access control.
             </a>

             <div className="picture_grid">
             <div>
           
             <img src={kuva3} className="picture"></img>

             <a className="text_project">The image shows the authenticationController.js file that I created for the backend, which ensures that users only have access to data intended for them.
             </a>
             </div>

             <div>
   
             <img src={kuva4} className="picture"></img>
             <a className="text_project">
The image shows part of the personController.js script that controls backend requests for fetching, adding, editing, and deleting user data. The function responsible for handling get requests for user data is visible in the image. First, the script calls the authenticationController shown in the previous image. Then, it checks if the user is logged in, meaning if the token field is missing from the request header or has been modified, in which case the request is rejected with a 401 status code and the message "Not authorized." Next, it checks if the user is an admin. If so, the script continues to execute the fetchPersons_admin function in the personSQL.js file, which runs an SQL command to fetch the desired data from the database, and then returns the data to the user with a 200 status code.

If the user is not an admin, the script then checks if the id carried with the request matches the id contained in the verification, ensuring that the user cannot access other users' data. Once it's confirmed that the user is fetching their own data, the script executes the getPerson function in the personSQL.js file, which runs an SQL command to fetch the desired data from the database, and then returns the data to the user with a 200 status code.

The data fetching operation is enclosed in a try-catch block, so if an error occurs during data retrieval, such as an incorrect SQL statement or a misconfigured database connection, the user is returned a message "Technical problem," and the error is logged to the console to aid in debugging and fixing the issue.
             </a>
             </div>
             </div>

             </div>

             <div className='project_child'>
             <div className='title_div'>
             <h2 className='title'>Problems & Solutions</h2><br/><br/>
             </div>
             <a className="text_project">
               
The biggest and most recurring issue in this project was the lack of experience. At the time of working on this project, I had been studying coding for less than a year, with no prior experience in coding, let alone building applications of this scale. Even in school, we weren't taught everything; of course, we were taught the basics, and I had a grasp of those by this point. However, aspects like user authentication, securely storing passwords, and utilizing them for login were entirely new to me at the time of this project. To overcome these experience-related challenges and all other problems, I relied heavily on YouTube tutorials and searching for solutions online.
             </a>
             </div>

             <div className='project_child bottom'>
             <div className='title_div'>
             <h2 className='title'>Videopresentation</h2><br/><br/>
             </div>
             <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/FkDc7BJ2On4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </div>

            </div>
            </div>
        )
}