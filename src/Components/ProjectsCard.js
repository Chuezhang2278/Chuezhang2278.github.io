import React from 'react';
import '../Styles/ProjectCard.scss';
import github from "../Images/github.png";


export default function ProjectsCard({summary, p1, p2, p3, p4, p5, image1, image2, blockquote1, link, title}){

    return(
        <div id = "projectsContainer">
                <div id = "simpleHeader"> 
                    <h1> {title} </h1>
                </div>
                <div id = "cardContainer">
                    <div id = "card">
                        <h1> Summary </h1>
                        <p> {summary} </p>
                        <blockquote> {blockquote1} </blockquote>
                        
                    </div>
                        <div id = "card">
                        
                            <h1> Technology involved</h1>
                            <div id = "icon-grid">
                                <div id = "involved-Icon">
                                    <img id = "involved-Icon" alt = "" src="https://img.icons8.com/nolan/64/python.png"/>
                                </div>

                                <div id = "involved-Icon">
                                    <img id = "involved-Icon" alt = "" src="https://img.icons8.com/nolan/64/javascript.png"/>
                                </div>

                                <div id = "involved-Icon">
                                    <img id = "involved-Icon" alt = "" src="https://img.icons8.com/nolan/64/html-filetype.png"/>
                                </div>

                                <div id = "involved-Icon">
                                    <img id = "involved-Icon" alt = "" src="https://img.icons8.com/nolan/64/css-filetype.png"/>
                                </div>

                                <div id = "involved-Icon">
                                    <img id = "involved-Icon" alt = "" src="https://img.icons8.com/nolan/64/mysql.png"/>
                                </div>

                                <div id = "involved-Icon">
                                    <img id = "involved-Icon" alt = "" src="https://img.icons8.com/nolan/64/c-plus-plus.png"/>
                                </div>

                                <div id = "involved-Icon">
                                    <img id = "involved-Icon" alt = "" src="https://img.icons8.com/nolan/64/java-coffee-cup-logo.png"/>   
                                </div>
                            </div>
                        <div id = "">
                                <h1> People Involved</h1>
                                <p> {p1}</p>
                                <p> {p2}</p>
                                <p> {p3}</p>
                                <p> {p4}</p>
                                <p> {p5}</p>
                        </div>
                        <div id = "">
                            <h1> Go check it out</h1>
                                <div id = "icon-grid">
                                    <div id = "involved-Icon">
                                        <a href = {link}> 
                                            <img alt = "" src = {github}/>
                                        </a>
                                    </div>
                                </div>
                        </div>     
                        </div>
                    <div id = "card">
                        <h1> Gallery </h1>
                        <div id = "gallery-grid">
                            <div id = "image1">
                                <img id = "test" alt = "" src = {image1}></img>
                            </div>
                            <div id = "image2">
                                <img id = "test2" alt = "" src = {image2}></img>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}