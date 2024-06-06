
import React from 'react';
import liked from "../Love.png";
import unliked from "../Love_Heart.png";

const Home = ({ photos, isLoading, error, modal, setModal, toggleLike }) => {
  const handleImageClick = (src, alt) => {
    setModal({ isOpen: true, src, alt });
  };

  const handleCloseModal = () => {
    setModal({ isOpen: false, src: '', alt: '' });
  };

  if (isLoading) {
    return (
      <div id="containerskeleton">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="card skeleton">
            <div className="card__body">
              <img className="skeleton" alt="" id="cover-img" />
            </div>
            <div className="card__footer skeleton-footer"></div>
            <div className="card__text skeleton-text"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    // <div id='fullcontainer'>
      <div id="container">
        {modal.isOpen && (
          <div className="modal" style={{ display: 'block' }}>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img className="modal-content" id="img01" src={modal.src} alt={modal.alt} />
            <div id="caption">{modal.alt}</div>
          </div>
        )}
        {photos.map((photo) => (
          <div className="card" style={{ height: '550px' }} key={photo.id}>
            <img className="card-img-top" id="image" src={photo.src.original} alt={photo.alt} onClick={() => handleImageClick(photo.src.original, photo.alt)} />
            <button className="heart" onClick={() => toggleLike(photo.id)} style={{ paddingRight: '60px' }}>
              <img src={photo.liked ? liked : unliked} style={{ width: '40px', height: '40px' }} alt="heart" />
            </button>
            <div className="card-body" style={{ width: '65%', textAlign: 'left', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif' }}>
              <h4 className="card-title">{photo.photographer}</h4>
              <p className="card-text">
                <span>Description:</span> {photo.alt}
              </p>
            </div>
          </div>

                ))}
      </div>
    // </div>
  );
};

export default Home;
