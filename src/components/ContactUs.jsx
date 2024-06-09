import React from 'react'
import logoContact from "../contact.png"
const ContactUs = () => {
  return (
    <div class="card-contact">
    <div class="row-contact">
      <div class="column1"> 
      <p class="contact-text">
          
          Email: petexpo@gmail.com <br />
          Mobile: +355 6. ... ... ..  <br />
         Address: Tirane, Albania
        </p>   
      </div>
      <div class="column2">
      <img class="image-contact" src={logoContact} />
      </div>
    </div>
  </div>
  );
};

export default ContactUs;