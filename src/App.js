// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router } from 'react-router-dom';
// import AppRoutes from './routes/Routes'; 
// import Header from './components/Header';
// function App() {
 
//   return ( <>
   
   
//       <Router>
//         <div> 
//           <Header  />
//           <AppRoutes />
//         </div>
//       </Router>
//     </>
//   );
// }

// export default App;




import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AppRoutes from './routes/Routes';

// const api = {
//   key: "563492ad6f9170000100000172e40c73ea194f8589f3de8585118b13",
// };



const api = {
  url: "https://api.pexels.com/v1/search?query=nature&size=medium",
  key: "563492ad6f9170000100000172e40c73ea194f8589f3de8585118b13",
};
const App = () => {
  const [query, setQuery] = useState('animals');
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState({ isOpen: false, src: '', alt: '', photographer: '' });

  useEffect(() => {
    fetchPhotos(query);
  }, [query]);

  const fetchPhotos = (query) => {
    setIsLoading(true);
    fetch(`https://api.pexels.com/v1/search?query=${query}&size=medium`, {
      headers: {
        Authorization: api.key,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Image not found 😏");
        }
        return res.json();
      })
      .then((data) => {
        const photosWithLikes = data.photos.map(photo => ({
          ...photo,
          liked: false,
        }));
        setPhotos(photosWithLikes);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    fetchPhotos(query);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchPhotos(query);
    }
  };

  const toggleLike = (id) => {
    setPhotos(photos.map(photo => 
      photo.id === id ? { ...photo, liked: !photo.liked } : photo
    ));
  };

  return (
    <Router>
      <Header 
        query={query}
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
        handleKeyDown={handleKeyDown}
      />
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              photos={photos}
              isLoading={isLoading}
              error={error}
              modal={modal}
              setModal={setModal}
              toggleLike={toggleLike}
            />
          } 
        />
      <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;


