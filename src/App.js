  import React, { useState, useEffect } from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Header from './components/Header';
  import Home from './components/Home';
  import AppRoutes from './routes/Routes';
  // https://freetestapi.com/api/v1/animals?sort=name&order=desc
  const api = {
    url: "https://freetestapi.com/api/v1/animals",
  };
  
  const App = () => {
    const [query, setQuery] = useState('');
    const [animals, setAnimals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modal, setModal] = useState({ isOpen: false });
  
    useEffect(() => {
      fetchAnimals(query);
    }, []);
  
    const fetchAnimals = (query) => {
      setIsLoading(true);
      const queryString = query ? `?search=${query}` : ''; 
      const requestUrl = `${api.url}${queryString}`;
     
      fetch(requestUrl)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Animal not found 😏");
          }
          return res.json();
        })
        .then((data) => {
          setAnimals(data);
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
  
    const handleSearchSubmit = (e) => {
      e.preventDefault();
      console.log('genta', query)
      fetchAnimals(query);
    };
  
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        fetchAnimals(query);
      }
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
                animals={animals}
                isLoading={isLoading}
                error={error}
                modal={modal}
                setModal={setModal}
              />
            } 
          />
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
      </Router>
    );
  };
  
  export default App;
  