import React from 'react';
import dietIcon from "../diet.png";
import familyIcon from "../family.png";
import heightIcon from "../height.png";
import weightIcon from "../weight.png";
import shapeIcon from "../shape.png";

const Home = ({ animals, isLoading, error, modal, setModal }) => {
  const handleImageClick = (animal) => {
    setModal({
      isOpen: true,
      image: animal.image,
      name: animal.name,
      place_of_found: animal.place_of_found,
      diet: animal.diet,
      weight_kg: animal.weight_kg,
      height_cm: animal.height_cm,
      family: animal.family,
      description: animal.description,
    });
  };

  const handleCloseModal = () => {
    setModal({ isOpen: false });
  };

  if (isLoading) {
    return (
   
      <div id="container-skeleton">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="card-skeleton">
            <img className="image-skeleton" alt=""  />
            <div className='skeleton-body' style={{ width: '100%', textAlign: 'left', fontFamily: 'cursive, SANS-SERIF' }}>
                <h4 className="skeleton-title"></h4>
            <p className="skeleton-text"></p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="container">
      {modal.isOpen && (
        <div className="modal" style={{ display: 'block' }}>
          <span className="close" onClick={handleCloseModal}>&times;</span>
          <div className="modal-content">
            <img id='shape' src={shapeIcon}/>
            <img id="img01" src={modal.image} alt={modal.name} />
            <div className='modal-title'>{modal.name}, {modal.place_of_found}</div>
            <div className='table'>
              <div className="row">
                <div className="column">
                  <img id="diet" src={dietIcon} alt="Diet" />
                  <p id='diet-title'>Diet</p>
                  <p>{modal.diet}</p>
                </div>
                <div className="column">
                  <img id="weight" src={weightIcon} alt="Weight" />
                  <p id='weight-title'>Weight</p>
                  <p>{modal.weight_kg} Kg</p>
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <img id="height" src={heightIcon} alt="Height" />
                  <p id='height-title'>Height</p>
                  <p>{modal.height_cm} Cm</p>
                </div>
                <div className="column">
                  <img id="family" src={familyIcon} alt="Family" />
                  <p id='family-title'>Family</p>
                  <p>{modal.family}</p>
                </div>
              </div>
             </div>
             <div className='description'>{modal.description}</div>
          </div>
        </div>
      )}
      {animals.map(animal => (
        <div className="card" style={{ height: '350px' }} key={animal.id}>
          <div className="card-img">
            <img
              className="image"
              src={animal.image}
              alt={animal.name}
              onClick={() => handleImageClick(animal)}
            />
          </div>
          <div className="card-body" style={{ width: '100%', textAlign: 'left', fontFamily: 'cursive, SANS-SERIF' }}>
            <h4 className="card-title">{animal.name}</h4>
            <p className="card-text">
              <span>Origin:</span> {animal.place_of_found}
            </p>
          </div>
        </div>
      ))}
    </div>
    
  );
};

export default Home;
