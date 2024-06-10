import React from 'react'
import logoContact from "../contact.png"

const ContactUs = () => {
  //FUNCTION TO INITIALIZE GOOGLE MAP
  const initMap = () => {
  
 //COORDINATES FOR TIRANA
  const tiranaLatLng = { lat: 41.3275, lng: 19.8187 };

  //CREATE A NEW MAP  FOR TIRANA
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: tiranaLatLng,
      zoom: 12,
    });

   //ADD A MARER FOR TIRANA
    new window.google.maps.Marker({
      position: tiranaLatLng,
      map: map,
      title: "Tirana",
    });
  };

  //FUNCTION TO ASYNCHRONE LOAD GOOGLE MAP API
  const loadGoogleMapsAPI = () => {
    const script = document.createElement("script");
  //API KEY
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB4hGdFHRpKGUMpGtH6q5M-9FxLJOBq-zI&callback=initMap`;
    script.defer = true;
    script.async = true;
    window.initMap = initMap;
    document.head.appendChild(script);
  };

  //CALL LOADGOOGLEMAPAPI
  React.useEffect(() => {
    loadGoogleMapsAPI();
  }, []);

  //RENDER CONACTUS COMPONENT
  return (
    <div className="card-contact">
    <div className="row-contact">
      <div className="column1"> 
      <p className="contact-text">
          
          Email: petexpo@gmail.com <br /> <br />
          Mobile: +355 66 666 666 66  <br /> <br />
         Address: Tirane, Albania
        </p>   
      </div>
      <div className="column2">
      <img className="image-contact" src={logoContact} />
      </div>
    </div>
    <div id="map" style={{ width: "100%", height: "400px" }}></div>
  </div>
  );
};

export default ContactUs;