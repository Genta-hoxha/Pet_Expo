import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AppRoutes from './routes/Routes';


const api = {
  url: "https://freetestapi.com/api/v1/animals?sort=name&order=desc",
  // url: "https://api.pexels.com/v1/search?query=nature&size=medium",
  // key: "563492ad6f9170000100000172e40c73ea194f8589f3de8585118b13",
};
const App = () => {
  const [query, setQuery] = useState('dogs');
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState({ isOpen: false });

  useEffect(() => {
    fetchAnimals(query);
  }, [query]);

  const fetchAnimals = (query) => {
    setIsLoading(true);
    fetch(`${api.url}&query=${query}`)

    // fetch(`https://api.pexels.com/v1/search?query=${query}&size=medium`, {
    //   headers: {
    //     Authorization: api.key,
    //   },
    // })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Animal not found 😏");
        }
        return res.json();
      })
      .then((data) => {
        const animalsWithLikes = data.map(animal => ({
          ...animal,
          liked: false,
        }));
        setAnimals(animalsWithLikes);
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
    console.log("genta")
    fetchAnimals(query);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchAnimals(query);
    }
  };

  // const toggleLike = (id) => {
  //   setAnimals(animals.map(animal => 
  //     animal.id === id ? { ...animal, liked: !animal.liked } : animal
  //   ));
  // };

  // const handleLiked = () => {
  //  console.log("liked photo ")
  // };

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
            animals={animals}
              isLoading={isLoading}
              error={error}
              modal={modal}
              setModal={setModal}
              // toggleLike={toggleLike}
            />
          } 
        />
      <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;


