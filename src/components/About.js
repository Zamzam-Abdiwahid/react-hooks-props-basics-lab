import React from "react";
import Links from "./Links"; // Correct import statement

function About({ bio, links }) { // Correctly destructure the 'links' prop
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} /> {/* Corrected prop usage */}
    </div>
  );
}

export default About;