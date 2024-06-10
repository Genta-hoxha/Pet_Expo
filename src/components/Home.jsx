import React from 'react';
import dietIcon from "../diet.png";
import familyIcon from "../family.png";
import heightIcon from "../height.png";
import weightIcon from "../weight.png";
import shapeIcon from "../shape.png";

//HANDLE MAIN LOGIC
const Home = ({ animals, isLoading, error, modal, setModal }) => {

//FUNCTION THAT SET MODAL STATE WITH ANIMAL DATA
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

  //CLOSE MODAL
  const handleCloseModal = () => {
    setModal({ isOpen: false });
  };

  //IF DATA IS STILL LOADING, MAKE RENDER SKELETON
  if (isLoading) {
    return <SkeletonLoader />;
  }

  //ERROR MESSAGE IF WAS AN ERROR FETCHING DATA
  if (error) {
    return <ErrorMessage error={error} />;
  }

  //RENDER MAIN CONATINER, INCLUDE MODAL & ANIMAL CARD
  return (
    <div id="container">
      {modal.isOpen && <Modal modal={modal} onClose={handleCloseModal} />}
      <AnimalCards animals={animals} onImageClick={handleImageClick} />
    </div>
  );
};

//SKELETON LOADERFOR DISPLAY LOADING STATE
const SkeletonLoader = () => (
  <div id="container-skeleton">
    {Array.from({ length: 10 }).map((_, index) => (
      <div key={index} className="card-skeleton">
        <img className="image-skeleton" alt="" />
        <div className="skeleton-body">
          <h4 className="skeleton-title"></h4>
          <p className="skeleton-text"></p>
        </div>
      </div>
    ))}
  </div>
);

//COMPONENT FOR DISPLAY ERROR MESSAGE
const ErrorMessage = ({ error }) => <div>Error: {error}</div>;


//ANIMAL INFORMATION(DETAILS)
const Modal = ({ modal, onClose }) => (
  <div className="modal" style={{ display: 'block' }}>
    <span className="close" onClick={onClose}>&times;</span>
    <div className="modal-content">
      <img id='shape' src={shapeIcon} alt="Shape" />
      <img id="img01" src={modal.image} alt={modal.name} />
      <div className='modal-title'>{modal.name}, {modal.place_of_found}</div>
      <div className='table'>
        <div className="row">
          <ModalColumn icon={dietIcon} title="Diet" content={modal.diet} />
          <ModalColumn icon={weightIcon} title="Weight" content={`${modal.weight_kg} Kg`} />
        </div>
        <div className="row">
          <ModalColumn icon={heightIcon} title="Height" content={`${modal.height_cm} Cm`} />
          <ModalColumn icon={familyIcon} title="Family" content={modal.family} />
        </div>
      </div>
      <div className='description'>{modal.description}</div>
    </div>
  </div>
);


//REUSABLE COMPONENT FOR DISPLAY INFO
const ModalColumn = ({ icon, title, content }) => (
  <div className="column">
    <img id={title.toLowerCase()} src={icon} alt={title} />
    <p id={`${title.toLowerCase()}-title`}>{title}</p>
    <p>{content}</p>
  </div>
);


//RENDER LIST OF ANIMAL CARD
const AnimalCards = ({ animals, onImageClick }) => (
  <>
    {animals.map(animal => (
      <div className="card" style={{ height: '350px' }} key={animal.id}>
        <div className="card-img">
          <img
            className="image"
            src={animal.image}
            alt={animal.name}
            onClick={() => onImageClick(animal)}
          />
        </div>
        <div className="card-body">
          <h4 className="card-title">{animal.name}</h4>
          <p className="card-text">
            <span>Origin:</span> {animal.place_of_found}
          </p>
        </div>
      </div>
    ))}
  </>
);

export default Home;
