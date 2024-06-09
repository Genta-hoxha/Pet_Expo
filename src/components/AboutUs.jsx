import React from 'react';
import logoAbout from "../pet-logo.png"
const About = () => {
  return (
     
        <div class="card-about">
  <div class="row-about">
    <div class="column2"> 
      <img class="image-about" src={logoAbout} />
    </div>
    <div class="column1">
      <p class="about-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
  </div>
</div>

  );
};

export default About;