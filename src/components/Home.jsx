// import React, { useEffect, useState } from 'react';
// import liked from "../Love.png";
// import unliked from "../Love_Heart.png";
// import searchlogo from '../searchlogo.png'
// const api = {
//   url: "https://api.pexels.com/v1/search?query=nature&size=medium",
//   key: "563492ad6f9170000100000172e40c73ea194f8589f3de8585118b13",
// };

// const Home = () => {
//   const [photos, setPhotos] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [modal, setModal] = useState({ isOpen: false, src: '', alt: '', photographer: '' });
//   const [query, setQuery] = useState('animals');

//   useEffect(() => {
//     fetchPhotos(query);
//   }, [query]);

//   const fetchPhotos = (query) => {
//     setIsLoading(true);
//     fetch(`https://api.pexels.com/v1/search?query=${query}&size=medium`, {
//       headers: {
//         Authorization: api.key,
//       },
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Image not found 😏");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         const photosWithLikes = data.photos.map(photo => ({
//           ...photo,
//           liked: false,
//         }));
//         setPhotos(photosWithLikes);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setIsLoading(false);
//       });
//   };

//   const handleImageClick = (src, alt) => {
//     setModal({ isOpen: true, src, alt});
//   };

//   const handleCloseModal = () => {
//     setModal({ isOpen: false, src: '', alt: '', photographer: '' });
//   };

//   const handleSearchChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleSearchSubmit = () => {
//     fetchPhotos(query);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       fetchPhotos(query);
//     }
//   };

//   const toggleLike = (id) => {
//     setPhotos(photos.map(photo => 
//       photo.id === id ? { ...photo, liked: !photo.liked } : photo
//     ));
//   };

//   // SKELETON
//   if (isLoading) {
//     return (
//       <div id="container">
//         {Array.from({ length: 10 }).map((_, index) => (
//           <div key={index} className="card skeleton">
//             <div className="card__body">
//               <img className="skeleton" alt="" id="cover-img" />
//             </div>
//             <div className="card__footer skeleton-footer"></div>
//             <div className="card__text skeleton-text"></div>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       {/* <div className='search'>
//         <input 
//           type="text" 
//           id="searchInput" 
//           placeholder="Search for images" 
//           value={query} 
//           onChange={handleSearchChange} 
//           onKeyDown={handleKeyDown}
//         />
       
//        <button id="searchButton" onClick={handleSearchSubmit}>
//        <img
//     src={searchlogo}
//     alt="icon"
//     style={{ width: "30px", height: "30px" }}
//   />
//        </button>
//       </div> */}

//       <div id="container">
//         {modal.isOpen && (
//           <div className="modal" style={{ display: 'block' }}>
//             <span className="close" onClick={handleCloseModal}>&times;</span>
//             <img className="modal-content" id="img01" src={modal.src} alt={modal.alt} photographer={modal.photographer} />
//             <div id="caption">{modal.alt}</div>
//             <div id="caption1">{modal.photographer}</div>
//             <div id="caption2"><span>Description:</span> {modal.alt}</div>
//           </div>
//         )}
//         {photos.map((photo) => (
//           <div className="card" style={{ height: '550px' }} key={photo.id}>
//             <img className="card-img-top" id="image" src={photo.src.original} alt={photo.alt} onClick={() => handleImageClick(photo.src.original, photo.alt)} />
//             <button className="heart" onClick={() => toggleLike(photo.id)} style={{ paddingRight: '60px' }}>
//               <img src={photo.liked ? liked : unliked} style={{ width: '40px', height: '40px' }} alt="heart" />
//             </button>
//             <div className="card-body" style={{ width: '65%', textAlign: 'left', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif' }}>
//               <h4 className="card-title">{photo.photographer}</h4>
//               <p className="card-text">
//                 <span>Description:</span> {photo.alt}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;





// Home.jsx
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
      <div id="container">
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
    <div>
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
    </div>
  );
};

export default Home;
