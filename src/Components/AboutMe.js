import React from 'react';
import '../Styles/AboutMe.scss';

export default function AboutMe({Title, Message1, Message2, Message3}) {
    return(
          <div id = "card-container">
            <div id = "inner-tech-card">
                <h1>{Title}</h1>

                <p>{Message1}</p>
                <p>{Message2}</p>
                <p>{Message3}</p>
            </div>
          </div>
      )
  }