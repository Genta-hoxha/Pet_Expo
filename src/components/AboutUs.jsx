import React from 'react';
import logoAbout from "../pet-logo.png"
const About = () => {
  return (
     
        <div className="card-about">
  <div className="row-about">
    <div className="column2"> 
      <img className="image-about" src={logoAbout} />
    </div>
    <div className="column1">
      <p className="about-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
  </div>
</div>

  );
};

export default About;