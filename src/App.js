import './App.scss';
import Intro from './Components/Intro.js';
import Skills from './Components/Skills.js';
import ProjectsCard from './Components/ProjectsCard.js';
import AboutMe from './Components/AboutMe.js';

import {MuiThemeProvider, createMuiTheme} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";


import czImage from "./Images/chue.png";
import img1 from "./Images/img1.png";
import img2 from "./Images/img2.png";
import img3 from "./Images/img3.png";
import img4 from "./Images/img4.png";
import linkedin from "./Images/LI-In-Bug.png";
import gmail from "./Images/gmail.png";
import discord from "./Images/discord.png";
import github from "./Images/github.png";

import resume from "./Images/Chue_Zhang_resume.pdf";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const czRepo = "https://github.com/Chuezhang2278"

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#242424"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

function App() {

  function onClickLinkedin () {
    window.location.assign('https://www.linkedin.com/in/chue-zhang/')
  }

  function onClickDiscord () {
    navigator.clipboard.writeText("Chue#8367")
  }

  function onClickEmail () {
    navigator.clipboard.writeText("czhang003@gmail.com")
  }

  return (
    <MuiThemeProvider theme = {themeDark}>
        <CssBaseline />
          <div id = "navbar-style">
            <a href = {czRepo}> 
              <img alt = "" src = {github}/>
            </a>
          </div>
          <Carousel showStatus = {false} useKeyboardArrows = {true} infiniteLoop = {true}>
              <section id = "first-page">
                  <Intro message = {"The City College of New York"} 
                        Image = {czImage} 
                        Link = {czRepo} 
                        Name = {"Chue Zhang"}
                        Loc = {"New York, NY"}
                        />
                  <AboutMe Title = {"Something about Me"} 
                           Message1 = {"I like simple."}
                           Message2 = {"I have aspirations of living life as simple as possible."}
                           Message3 = {"Welcome to my simple site."}
                           />
                  <Skills/>
                  
              </section>

              <ProjectsCard
                summary = {"SimpleMTA is a project I worked on with 2 other teammates which is a simplified version of New Yorks MTA website. What's featured is a nice dark design with fast lookup speed. Below is a thought from the team"}
                p1 = {"Chue Zhang"}
                p2 = {"Xiang Min Mo"}
                p3 = {"Jia Ming Ma"}
                image1 = {img1}
                image2 = {img2}
                blockquote1 = {"That lookup speed is fast, but do you know what's not fast? Understanding the GTFS documentation"}
                link = {"https://github.com/Chuezhang2278/SimpleMTA"}
                title = {"SimpleMTA"}
              />

              <ProjectsCard
                summary = {"Crypto Slot Machine was my Capstone project where I worked in a team of 4 to develop a Slot Machine that takes Etherium as currency"}
                p1 = {"Chue Zhang"}
                p2 = {"Jia Ming Ma"}
                p3 = {"Eric Mai"}
                p4 = {"Garland Qiu"}
                image1 = {img3}
                image2 = {img4}
                blockquote1 = {"Gas prices like you've never seen before, both in real life and virtually"}
                link = {"https://github.com/Chuezhang2278/Slot-Machine-Crypto"}
                title = {"Crypto Slot Machine"}
              />
              <section>
                <h1> You like what you see? I'd like to know! Contact me on these platforms.</h1>
                <div id = "contact-info-container"> 
                  <div id = "contact-info">
                    <h2>Email</h2>
                    <button id = "btn-style" onClick={onClickEmail}>
                      <img src={gmail} width="90" height="90" alt="submit" />
                    </button>
                  </div>

                  <div id = "contact-mid">
                    <h2>LinkedIn</h2>
                    <button id = "btn-style" onClick={onClickLinkedin}>
                      <img src={linkedin} width="90" height="90" alt="submit" />
                    </button>
                  
                  </div>

                  <div id = "contact-info">
                    <h2>Discord</h2>
                    <button id = "btn-style" onClick={onClickDiscord}>
                      <img src={discord} width="90" height="90" alt="submit" />
                    </button>
                  </div>
                </div>

                <div>
                  <h2> Resume </h2>
                  <a href={resume} download="Chue_Zhang_resume.pdf"> 
                    <button id = "btn-style2"> <p> Resume </p></button>
                  </a>
                </div>

              </section>
              
        </Carousel>
    </MuiThemeProvider>
  );
}

export default App;
