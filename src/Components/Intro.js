import React from 'react';
import '../Styles/Intro.scss';

export default function Intro({message, Link, Name, Image, Loc}){
  return (
    <div id = "aboutme">
      <div id = "aboutme-container"> 
        <a href = {Link}>
          <img alt = "" id = "aboutme-image" src = {Image}/>
        </a>
        <div id = "aboutme-intro">
          <h1>{Name}</h1>
          <p> Recent college grad from <b>{message}</b> </p>
          <p> Living in <b>{Loc}</b> </p>
        </div>
      </div>
    </div>
  )
}