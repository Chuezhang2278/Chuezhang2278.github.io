import './App.scss';
import Intro from './Components/Intro.js';
import Skills from './Components/Skills.js';
import ProjectsCard from './Components/ProjectsCard.js';
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import czImage from "./Images/chue.png";
import img1 from "./Images/img1.png";
import img2 from "./Images/img2.png";

import AboutMe from './Components/AboutMe.js';
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

  return (
    <MuiThemeProvider theme = {themeDark}>
        <CssBaseline />
          <Carousel showStatus = {false} preventMovementUntilSwipeScrollTolerance = {false} swipeScrollTolerance = {1}>
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
                  <h1> Go check out some of the projects I've worked on! </h1>
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
              />
              <ProjectsCard></ProjectsCard>
              <ProjectsCard></ProjectsCard>
        </Carousel>
    </MuiThemeProvider>
  );
}

export default App;
